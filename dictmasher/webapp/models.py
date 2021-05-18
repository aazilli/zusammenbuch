from django.db import models
from bs4 import BeautifulSoup
from django.contrib.sessions.models import Session
import requests
import re
import selenium
import json
from datetime import datetime

class Dictionary(models.Model):

    lang_choices = [('EN', 'EN'), ('DE','DE'), ('TRANS','TRANS')]
    type_choices = [('HTML','HTML'), ('API','API')]
    # rate_limit_choices = [('User-Agent', 'User-Agent'), ('IP', 'IP'), ('API', 'API'), ('', '')]

    name = models.CharField(max_length=40)
    lang = models.CharField(max_length=5, choices=lang_choices)
    type = models.CharField(max_length=5, choices=type_choices)
    div_id = models.CharField(max_length=20)
    base_url = models.CharField(max_length=500)
    dependencies = models.JSONField(null=True)
    # rate_limit = models.CharField(max_length=20, choices=rate_limit_choices)
    search = ''
    trimmings = []
    trans_toggle = 'DE'
    retrieved_settings = 'default'

    def __str__(self):
        return self.name

    def add_logo(self, html):
        logo_src = "<img src=" + str('"/static/logos/') + self.div_id + "-logo.png" + str('"') + """class="header-logo" """ + "id=" + str('"') + self.div_id + "-logo" + str('">')
        return str(logo_src) + chr(10) + str(html)

    def wrap_in_divs(self, html):
        html = "<div id=" + str('"') + self.div_id + str('">') + str(html) + "</div id=" + str('"') + self.div_id + str('">')
        return html

    def make_article(self):

        start = datetime.now()

        #not changing anything!!!
        if self.name in ["dict.leo", "Merriam-Webster Dictionary", "Merriam-Webster Thesaurus"]:
            print("leo:" + self.search)
            self.search = self.search.replace(" ", "%20")
            print("leo:" + self.search)
        elif self.name in ["linguee", "dict.cc"]:
            print("cc:" + self.search)
            self.search = self.search.replace(" ", "+")
            print("cc:" + self.search)
        elif self.name == "duden":
            print("duden:" + self.search)
            #nouns must be capitalized
            self.search = self.search.replace(" ", "_")
            self.search = self.search.replace("ß", "sz")
            self.search = self.search.replace("ü", "ue")
            self.search = self.search.replace("ö", "oe")
            self.search = self.search.replace("ä", "ae")
            print("duden:" + self.search)
        elif self.name in ["Cambridge Dictionary", "dictionary.com", "thesaurus.com"]:
            #"to" in infinitives? retry without if 404?
            self.search.replace(" ", "-")

        if self.name in ['dict.cc','linguee','Cambridge Dictionary']:
            user_header = {'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'}
            page_html = requests.get(self.base_url + self.search, headers=user_header).text
        else:
            page_html = requests.get(self.base_url + self.search).text


        # duden retry logic: search with base: https://www.duden.de/suchen/dudenonline/ and grab first <a> from section w/ class "vignette"

        soup = BeautifulSoup(page_html, 'html.parser')

        if self.name == 'dict.cc':
            #grabs desired table

            #The following blows up somtimes. Is it when they block scraping?
            print(str(soup))
            try:
                content = soup.find_all('table')[2]
            except IndexError:
                content = soup

            #changes relative links
            for relative_link in content.find_all('a', href=re.compile('^//www.dict.cc')):
                relative_link['href'] = "https:" + relative_link['href']

        elif self.name == 'dict.leo':
            content = soup.find('div', {"data-dz-search": "result"})

            for relative_link in content.find_all('a', href=re.compile('^/englisch-deutsch')):
                relative_link['href'] = "https://dict.leo.org" + relative_link['href']
            for relative_link in content.find_all('a', href=re.compile('^/grammatik')):
                relative_link['href'] = "https://dict.leo.org" + relative_link['href']
            for relative_link in content.find_all('a', href=re.compile('^/forum')):
                relative_link['href'] = "https://dict.leo.org" + relative_link['href']
            for relative_link in content.find_all('a', href=re.compile('^/pages/flecttab')):
                relative_link['href'] = "https://dict.leo.org" + relative_link['href']

            #non-optional trimmings

            #optional trimmings


        elif self.name == 'linguee':
            content = soup.find(id='lingueecontent')
            for relative_link in content.find_all('a', href=re.compile('^/english-german')):
                relative_link['href'] = "https://www.linguee.com" + relative_link['href']

        elif self.name == 'duden':
            content = soup.find('article')

            for relative_link in content.find_all('a', href=re.compile('^/rechtschreibung')):
                relative_link['href'] = "https://www.duden.de" + relative_link['href']

            for div in content.find_all('div', {'id': ['wussten_sie_schon', 'aussprache', 'kontext']}):
                div.decompose()
            for ad in content.find_all('div', {'class': 'tile__wrapper'}):
                ad.decompose()

                #may need to grab more duden tags to get styles in Rechtschreibung working (e.g. results for "stehen")
            content = '<div class="tabloid"> <main class="tabloid__main-column">' + str(content) + "</main> </div>"

        elif self.name == 'dictionary.com':
            content = soup.find('div', {'class': 'css-1avshm7'})

            # removes collapsibility and presents full table without buttons
            for div in content.find_all('div', {'class': re.compile('.*content-hidden.*')}):
                div['class'] = div['class'].remove('content-hidden')
            for div in content.find_all('div', {'class': re.compile('.*collapsed.*')}):
                div['class'] = div['class'].remove('collapsed')
            for button in content.find_all('button', {'class': 'expandable-button'}):
                button.decompose()

            for relative_link in content.find_all('a', href=re.compile('^/browse')):
                relative_link['href'] = "https://www.dictionary.com" + relative_link['href']

        elif self.name == 'thesaurus.com':
            pass

        elif self.name == 'Cambridge Dictionary':
            content = soup.find('div', {'class': 'entry'})

        elif self.name == 'Merriam-Webster Dictionary':
            content = soup.find('div', {'id': 'left-content'})

            for div in content.find_all('div', {'class': ['d-block', 'heavy-break', 'wgt-incentive-anchors', 'learn_more', 'more_defs', 'more-from', 'seen-and-heard-block']}):
                div.decompose()

            for div in content.find_all('div', {'id': ['other-words-anchor', 'synonyms-anchor', 'examples-anchor', 'first-known-anchor', 'etymology-anchor', 'learn-more-anchor']}):
                div.decompose()

            content = """<div id="definition-wrapper" class="container">""" + str(content) + """</div>"""

        elif self.name == 'Merriam-Webster Thesaurus':
            content = soup.find('div', {'id': 'left-content'})

            for div in content.find_all('div', {'class': ['d-block', 'heavy-break', 'learn_more', 'more-from', 'seen-and-heard-block']}):
                div.decompose()

            for div in content.find_all('div', {'id': ['faqs-anchor', 'learn-more-anchor']}):
                div.decompose()

            content = """<div id="mw-thes"><div id="definition-wrapper" class="container">""" + str(content) + """</div></div>"""
        content = self.add_logo(content)
        content = self.wrap_in_divs(content) + "<hr> <br>"
        # return "<div id=" + str('"') + self.div_id + str('">') + str(content) + "</div id=" + self.div_id + str('">')

        finish = datetime.now()
        print(self.name + ": " + str(finish-start))

        return content

    def make_form(self):
        id = self.name
        form_name = ''

        #sets whether the submission will be in the DE or EN section of the form
        if self.lang == 'DE':
            form_name = 'de-form'
        elif self.lang == 'EN':
            form_name = 'en-form'
        else:
            if self.trans_toggle == 'DE':
                form_name = 'de-form'
            else:
                form_name = 'en-form'

        if form_name == 'de-form':
            order_name = 'order-de'
        else:
            order_name = 'order-en'

        #retrieves settings to prepopulate values
        dict_check = 'checked=True'
        lite_check = 'checked=True'
        full_check = ''
        order = ''

        if Dictionary.retrieved_settings == 'default':
            pass
        else:
            for setting in Dictionary.retrieved_settings:
                if setting.dict == self:
                    if self.lang == 'DE' or form_name == 'de-form':
                        if setting.is_enabled_de == False:
                            dict_check = ''
                    if self.lang == 'EN' or form_name == 'en-form':
                        if setting.is_enabled_en == False:
                            dict_check = ''
                    if self.lang == 'DE' or form_name == 'de-form':
                        if setting.is_trimmed_de == False:
                            lite_check = ''
                            full_check = 'checked=True'
                    if self.lang == 'EN' or form_name == 'en-form':
                        if setting.is_trimmed_en == False:
                            lite_check = ''
                            full_check = 'checked=True'
                    if self.lang == 'DE' or form_name == 'de-form':
                        if setting.order_de != None:
                            order = 'value=' + str('"') + str(setting.order_de) + str('"')
                    if self.lang == 'EN' or form_name == 'en-form':
                        if setting.order_en != None:
                            order = 'value=' + str('"') + str(setting.order_en) + str('"')


        form_html = f"""

        <div class="row">
        <span class=checkbox>
        <input type="checkbox" id={str('"') + id + "-checkbox-" + form_name + str('"')} name={str('"') + id + "-checkbox-" + form_name + str('"')} {dict_check}>
        <label id="checkbox-label" for={str('"') + id + str('"')}>{self.name}</label>
        </span>
        <span class="order">

        <input type="number" min="1" max="10" id={str('"') + id + "-" + order_name + str('"')} name={str('"') + id + "-" + order_name + str('"')} {order}>
        </span>
        <span class="display">

        <input type="radio" id="lite" name={str('"') + id + "-display-" + form_name + str('"')} value="lite" {lite_check}>
        <label for="lite">Lite</label>
        <input type="radio" id="full" name={str('"') + id + "-display-" + form_name + str('"')} value="full" {full_check}>
        <label for="full">Full</label>
        </span>
        </div>
        """

        if self.trans_toggle == 'DE':
            self.trans_toggle = 'EN'
        else:
            self.trans_toggle = 'DE'

        return form_html

    def make_favicon(self):
        return self.div_id + "-favicon.png"

    def make_font_dependencies(self):
        links = json.loads(self.dependencies)
        dependency_html = ''
        if len(links["fonts"]) < 1:
            pass
        else:
            for link in links["fonts"]:
                dependency_html = dependency_html + """<link rel="preload" as="font" href="/static/css/fonts/""" + link + """" type="font/woff2">""" + chr(10)
        return dependency_html

    def make_css_dependencies(self):
        links = json.loads(self.dependencies)
        dependency_html = ''
        if len(links["css"]) < 1:
            pass
        else:
            for link in links["css"]:
                dependency_html = dependency_html + """<link rel="stylesheet" href="/static/css/""" + link + """" type="text/css">""" + chr(10)
        return dependency_html

    def make_js_dependencies(self):
        links = json.loads(self.dependencies)
        dependency_html = ''
        if len(links["js"]) < 1:
            pass
        else:
            for link in links["js"]:
                dependency_html = dependency_html + """<script src="/static/js/""" + link + """"></script>""" + chr(10)
        return dependency_html

#add foreign key
class Settings(models.Model):
    session = models.ForeignKey(Session, on_delete=models.CASCADE)
    dict = models.ForeignKey(Dictionary, on_delete=models.CASCADE)
    is_enabled_de = models.BooleanField()
    is_enabled_en = models.BooleanField()
    is_trimmed_de = models.BooleanField(default=True)
    is_trimmed_en = models.BooleanField(default=True)
    order_de = models.IntegerField(null=True)
    order_en = models.IntegerField(null=True)
