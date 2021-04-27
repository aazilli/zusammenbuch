from django.db import models
from bs4 import BeautifulSoup
from django.contrib.sessions.models import Session
import requests
import re
import selenium

class Dictionary(models.Model):

    lang_choices = [('EN', 'EN'), ('DE','DE'), ('TRANS','TRANS')]
    type_choices = [('HTML','HTML'), ('API','API')]
    # rate_limit_choices = [('User-Agent', 'User-Agent'), ('IP', 'IP'), ('API', 'API'), ('', '')]

    name = models.CharField(max_length=40)
    lang = models.CharField(max_length=5, choices=lang_choices)
    type = models.CharField(max_length=5, choices=type_choices)
    div_id = models.CharField(max_length=20)
    base_url = models.CharField(max_length=500)
    # rate_limit = models.CharField(max_length=20, choices=rate_limit_choices)
    search = ''
    trimmings = []
    dependencies = []
    trans_toggle = 'DE'
    retrieved_settings = 'default'
    #ImageField for favicon?

    def __str__(self):
        return self.name

    def make_article(self):
        if self.name in ['dict.cc','linguee']:
            user_header = {'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'}
            page_html = requests.get(self.base_url + self.search, headers=user_header).text
        else:
            page_html = requests.get(self.base_url + self.search).text

        soup = BeautifulSoup(page_html, 'lxml')

        if self.name == 'dict.cc':
            #grabs desired table
            content = soup.find_all('table')[2]

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

            content.find('div', {'id': 'wussten_sie_schon'}).decompose()
            content.find('div', {'id': 'aussprache'}).decompose()
            content.find('div', {'id': 'kontext'}).decompose()
            for ad in content.find_all('div', {'class': 'tile__wrapper'}):
                ad.decompose()

        return "<div id=" + str('"') + self.div_id + str('">') + str(content) + "</div id=" + self.div_id + str('">')

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
        <input type="checkbox" id={str('"') + id + "-checkbox-" + form_name + str('"')} name={str('"') + id + "-checkbox-" + form_name + str('"')} {dict_check}>
        <label for={str('"') + id + str('"')}>{self.name}</label>
        <label for="order">Order:</label>
        <input type="number" id={str('"') + id + "-" + order_name + str('"')} name={str('"') + id + "-" + order_name + str('"')} {order}>
        <label for="display">Display:</label>
        <input type="radio" id="lite" name={str('"') + id + "-display-" + form_name + str('"')} value="lite" {lite_check}>
        <label for="lite">Lite</label>
        <input type="radio" id="full" name={str('"') + id + "-display-" + form_name + str('"')} value="full" {full_check}>
        <label for="full">Full</label>
        """

        if self.trans_toggle == 'DE':
            self.trans_toggle = 'EN'
        else:
            self.trans_toggle = 'DE'

        return form_html

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
