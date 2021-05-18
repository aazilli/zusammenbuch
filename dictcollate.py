from bs4 import BeautifulSoup
import requests
from datetime import datetime
import re
import selenium
import langid

# Could also potentially include: PONS, Reverso, English language dicts/thesauruses, OED
# Cambridge dictionary has interesting DE-EN feature

# Relative links are changed to absolute links, but maybe they can link to results
# in the app itself?

# Add nav bar
# Add search history? Auto-place cursor in search bar.
# look into langid and langdetect libraries for automatically detecting langauge
# Search should be able to reroute from conjugated verbs to infinitives, either
# via leo or with nltk.

# Might be able to add Grimm by using its API. https://api.woerterbuchnetz.de/open-api/dictionaries
# Not seeing any definitions in the JSON though
# Loop through these? https://api.woerterbuchnetz.de/dictionaries/DWB/articles/N06749/formid
# They render it with this JavaScript: https://woerterbuchnetz.de//Woerterbuecher/DWB/renderArticle.js

# Add stat tracking!!! Save queries, users, visits, dictionaries used, settings

search = "bitter"

user_header = {'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'}
# cc_link = requests.get("https://www.dict.cc/?s=" + search, headers=user_header).text
# leo_link = requests.get("https://dict.leo.org/englisch-deutsch/" + search).text
# duden_link = requests.get("https://www.duden.de/rechtschreibung/" + search).text
# linguee_link = requests.get("https://www.linguee.com/english-german/search?source=auto&query=" + search, headers=user_header).text
# dwds_link = requests.get("https://www.dwds.de/wb/" + search).text

dictionary_com_link = requests.get("https://www.dictionary.com/browse/" + search).text
thesaurus_com_link = requests.get("https://www.thesaurus.com/browse/" + search).text
merriam_webster_dict_link = requests.get("https://www.merriam-webster.com/dictionary/" + search).text
merriam_webster_thes_link = requests.get("https://www.merriam-webster.com/thesaurus/" + search).text
# cambridge_dict_link = requests.get("https://dictionary.cambridge.org/dictionary/english/" + search, headers=user_header).text
# wiktionary_link = requests.get("https://en.wiktionary.org/wiki/" + search).text
# free_dictionary_link = requests.get("https://www.thefreedictionary.com/" + search).text


# wiktionary grab everything from the English h2 to the next h2?

#still getting rate limited by linguee
#def IP block
#enable javascript?
# linguee rate-limiting message:
# You have sent too many requests causing Linguee to block your computer
# To prevent automatic queries by computer programs, Linguee only allows a certain number of queries per computer.
# For users with disabled Javascript, this number is much lower than for those with enabled Javascript. The following steps may be helpful to prevent your computer from being blocked again: enable Javascript in your browser settings, wait for a few hours, and then try using Linguee again.
# If your computer is part of a large network that is protected by an NAT/Firewall with many users within your network using Linguee concurrently, please contact us.

#headless browser
#chrome headless with python/selenium

#Edge case: e.g. Verdienst, which has two forms: der AND das. duden has separate
# URLS for each, whereas dwds splits them between tabs. Workaround?

#user-agent = Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)
#only on get requests where there is a problem

#dwds and duden links may need a 404 exception where they try capitalized/uncapitalized

t1 = datetime.now()

# with open('ex_cc.html') as ex_cc:
#     soup = BeautifulSoup(ex_cc, 'lxml')
#     cc_content = soup.find_all('table')[2]
# #The main table seems to be [2]

# Going to have to add try/excepts or ifs, in the eventuality that some pages don't return the query

# soup = BeautifulSoup(cc_link, 'lxml')
# cc_content = soup.find_all('table')[2]
# for relative_link in cc_content.find_all('a', href=re.compile('^//www.dict.cc')):
#     relative_link['href'] = "https:" + relative_link['href']
#
# soup2 = BeautifulSoup(linguee_link, 'lxml')
# linguee_content = soup2.find(id='lingueecontent')
# for relative_link in linguee_content.find_all('a', href=re.compile('^/english-german')):
#     relative_link['href'] = "https://www.linguee.com" + relative_link['href']
#
# soup3 = BeautifulSoup(duden_link, 'lxml')
# duden_content = soup3.find('article')
# duden_nav = soup3.find('div', id="block-stickynavigationblock")
#trim
# duden_content.find('nav', {'class': 'gizmo'}).decompose()
 #not working?

# duden_content.find('div', {'id': 'wussten_sie_schon'}).decompose()
# duden_content.find('div', {'id': 'aussprache'}).decompose()
# duden_content.find('div', {'id': 'kontext'}).decompose()
# for ad in duden_content.find_all('div', {'class': 'tile__wrapper'}):
#     ad.decompose()


# duden_css_links = soup3.find_all('link', href=re.compile('https://cdn.duden.de/ampersand/'))
# for relative_link in duden_content.find_all('a', href=re.compile('^/rechtschreibung')):
#     relative_link['href'] = "https://www.duden.de" + relative_link['href']

# soup4 = BeautifulSoup(leo_link, 'lxml')
# leo_content = soup4.find('div', {"data-dz-search": "result"})
#trim
# leo_content.find('div', {'class': 'm-v-large'}).decompose()
# leo_content.find('div', {'id': 'sim'}).decompose()
# leo_content.find('div', {'id': 'ffsyn'}).decompose()
# leo_content.find('div', {'id': 'grammar'}).decompose()
# leo_content.find('div', {'id': 'forumResults'}).decompose()
# #maybe add dedicated forum section at end
# leo_content.find('div', {'class': 'ta-r m-v-large'}).decompose()
# leo_content.find('div', {'id': 'adv-native'}).decompose()
# leo_content.find('header', {'class': 'breadcrumb'}).decompose()

# for relative_link in leo_content.find_all('a', href=re.compile('^/englisch-deutsch')):
#     relative_link['href'] = "https://dict.leo.org" + relative_link['href']
# for relative_link in leo_content.find_all('a', href=re.compile('^/grammatik')):
#     relative_link['href'] = "https://dict.leo.org" + relative_link['href']
# for relative_link in leo_content.find_all('a', href=re.compile('^/forum')):
#     relative_link['href'] = "https://dict.leo.org" + relative_link['href']
# for relative_link in leo_content.find_all('a', href=re.compile('^/pages/flecttab')):
#     relative_link['href'] = "https://dict.leo.org" + relative_link['href']

# soup5 = BeautifulSoup(dwds_link, 'lxml')
# dwds_content = soup5.find('div', {'class': 'dwdswb-artikel'})
# dwds_css_links = soup5.find_all('link', href=re.compile(r"/.css$"))

soup6 = BeautifulSoup(dictionary_com_link, 'lxml')
dictionary_com_content = soup6.find('div', {'class': 'css-1avshm7'})
# find_all? seems to be the same class for british english definition

# removes collapsibility and presents full table without buttons
# for div in dictionary_com_content.find_all('div', {'class': re.compile('.*content-hidden.*')}):
#     div['class'] = div['class'].remove('content-hidden')
# for div in dictionary_com_content.find_all('div', {'class': re.compile('.*collapsed.*')}):
#     div['class'] = div['class'].remove('collapsed')
# for button in dictionary_com_content.find_all('button', {'class': 'expandable-button'}):
#     button.decompose()
#
for relative_link in dictionary_com_content.find_all('a', href=re.compile('^/browse')):
    relative_link['href'] = "https://www.dictionary.com" + relative_link['href']

soup7 = BeautifulSoup(thesaurus_com_link, 'lxml')
thesaurus_com_content1 = soup7.find('div', {'id': 'headword'})
thesaurus_com_content2 = soup7.find('div', {'id': 'meanings'})
#double check how the css applies here. maybe it applies to the overarching div?
#I've just grabbed a sub-div here. Hack would be just to put it in an extra div with the overarching class name.

for relative_link in thesaurus_com_content1.find_all('a', href=re.compile('^/browse')):
    relative_link['href'] = "https://www.thesaurus.com" + relative_link['href']
for relative_link in thesaurus_com_content2.find_all('a', href=re.compile('^/browse')):
    relative_link['href'] = "https://www.thesaurus.com" + relative_link['href']
#
# soup8 = BeautifulSoup(cambridge_dict_link, 'lxml')
# cambridge_content = soup8.find('div', {'class': 'entry'})

# soup9 = BeautifulSoup(free_dictionary_link, 'lxml')
# free_dictionary_content = soup9.find('div', {'id': 'content'})


soup10 = BeautifulSoup(merriam_webster_dict_link, 'lxml')
merriam_webster_dict_content = soup10.find('div', {'id': 'left-content'})

for div in merriam_webster_dict_content.find_all('div', {'class': ['d-block', 'heavy-break', 'wgt-incentive-anchors', 'learn_more', 'more_defs', 'more-from', 'seen-and-heard-block']}):
    div.decompose()

for div in merriam_webster_dict_content.find_all('div', {'id': ['other-words-anchor', 'synonyms-anchor', 'examples-anchor', 'first-known-anchor', 'etymology-anchor', 'learn-more-anchor']}):
    div.decompose()


soup11 = BeautifulSoup(merriam_webster_thes_link, 'lxml')
merriam_webster_thes_content = soup11.find('div', {'id': 'left-content'})

for div in merriam_webster_thes_content.find_all('div', {'class': ['d-block', 'heavy-break', 'learn_more', 'more-from', 'seen-and-heard-block']}):
    div.decompose()

for div in merriam_webster_thes_content.find_all('div', {'id': ['faqs-anchor', 'learn-more-anchor']}):
    div.decompose()



#trim
# dwds_content.find('div', {'class': 'dwdswb-quelle'}).decompose()
# dwds_content.find('audio').decompose()

# with open('dwds.css', 'a') as dwds_css:
#     for linktag in dwds_css_links:
#         css_content = requests.get(linktag['href']).text
#         dwds_css.write(css_content)

# grab js for expanding and closing table

#how to get leo's sans serif font? it's easier on the eyes

# Merge multiple css files from duden into one
# with open('duden.css', 'a') as duden_css:
#     for linktag in duden_css_links:
#         css_content = requests.get(linktag['href']).text
#         duden_css.write(css_content)

# NOTE on dict.leo/linguee: hyperlinks on their site have relative paths
# and therefore need to be rewritten as absolute paths to work

# use devtool to copy styles?
# or ... completely wipe styles between each section?

#styles are working, I think, but leo needs javascript
# find leo inflection tables

#compile bootstrap with LESS?



with open('ex_output.html', "w") as ex2:
    ex2.write("""<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Das Zusammenbuch</title>
        <link rel="stylesheet" href="css/cc_id.css" type="text/css">
        <link rel="stylesheet" href="css/leo_id.css" type="text/css">
        <link rel="stylesheet" href="css/linguee_id.css" type="text/css">
        <link rel="stylesheet" href="css/dwds_id.css" type="text/css">
        <link rel="stylesheet" href="css/bootstrap_dwds.css" type="text/css">
        <link rel="stylesheet" href="css/duden_id.css" type="text/css">
        <link rel="stylesheet" href="css/dictionary_com_id.css" type="text/css">
        <link rel="stylesheet" href="css/thesaurus_com_id.css" type="text/css">
        <link rel="stylesheet" href="css/cambridge_id.css" type="text/css">


        <link rel="stylesheet" href="css/merriam_webster_id1.css" type="text/css">
        <link rel="stylesheet" href="css/merriam_webster_id2.css" type="text/css">


    <link rel="preload" as="font" href="css/fonts/mw/nuFlD-vYSZviVYUb_rj3ij__anPXBYf9lW4e5j5hNKc.woff2" type="font/woff2">
    <!-- Playfair, 700, italic, latin -->
    <link rel="preload" as="font" href="css/fonts/mw/nuFnD-vYSZviVYUb_rj3ij__anPXDTngOWwu5DRmFqWF_g.woff2" type="font/woff2">
    <!-- Playfair, 400, latin -->
    <link rel="preload" as="font" href="css/fonts/mw/nuFiD-vYSZviVYUb_rj3ij__anPXDTzYgEM86xQ.woff2" type="font/woff2">
    <!-- Open Sans, 400, latin -->
    <link rel="preload" as="font" href="css/fonts/mw/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2" type="font/woff2">
    <!-- Open Sans, 400, latin-ext -->
    <link rel="preload" as="font" href="css/fonts/mw/mem8YaGs126MiZpBA-UFW50bf8pkAp6a.woff2" type="font/woff2">
    <!-- Open Sans, 400, italic, latin-ext -->
    <link rel="preload" as="font" href="css/fonts/mw/mem6YaGs126MiZpBA-UFUK0Xdc1GAK6bt6o.woff2" type="font/woff2">
    <!-- Open Sans, 400, italic, latin -->
    <link rel="preload" as="font" href="css/fonts/mw/mem6YaGs126MiZpBA-UFUK0Zdc1GAK6b.woff2" type="font/woff2">
    <!-- Open Sans, 700, latin -->
    <link rel="preload" as="font" href="css/fonts/mw/mem5YaGs126MiZpBA-UN7rgOUuhpKKSTjw.woff2" type="font/woff2">
    <!-- Open Sans, 700, italic, latin -->
    <link rel="preload" as="font" href="css/fonts/mw/memnYaGs126MiZpBA-UFUKWiUNhrIqOxjaPX.woff2" type="font/woff2">

            <link rel="stylesheet" href="css/merriam_webster_fonts.css" type="text/css">


    </head>
    <body>
    """)

        # <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        # <script src="js/dwds.js"></script>
        # <script src="js/dist/modern/dict.webpack-734fb2aa.js"></script>

                # <link rel="stylesheet" href="https://merriam-webster.com/assets/mw/dist/compiled/css/style-dsp-redesign-definitions.1610e36f46aca6ea9d79.css" media="screen">
                # <link rel="preload" as="style" onload="this.onload=null;this.rel='stylesheet'" href="https://merriam-webster.com/assets/mw/dist/compiled/css/style-dsp-redesign-definitions-defer.46e5a2ca6d25c5c9f3bc.css">


        # <link rel="preload" href="https://www.dictionary.com/assets/dictionary-font-83b17ba5505b01708ba42e437547e028.woff" as="font" type="font/woff" crossorigin="anonymous">

        # <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        # <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>


        # <script src="js/dist/chunks/208c89650ed8b76f7bc9-abedd811.js"></script>
        # <script src="js/dist/chunks/1d1321fde5ce51b65ccd-56e046c2.js"></script>
        # <script src="js/dist/chunks/2717fea9730a2b80bb2c-e7cb3c71.js"></script>
        # <script src="js/dist/chunks/a52c6b7cab1067acadb9-f92f6585.js"></script>
        # <script src="js/dist/chunks/a54433a2f86c3649fe07-b0d6e025.js"></script>
        # <script src="js/dist/chunks/bf1277e10fbb76b11601-9ec2b836.js"></script>
        # <script src="js/dist/chunks/da63244f9197f39c8b76-aa54a2af.js"></script>
        # <script src="js/dist/chunks/df43ca8bf1214a23448d-596cae91.js"></script>
        # <script src="js/dist/chunks/eaa767e15a212b04c449-72742021.js"></script>
        # <script src="js/dist/chunks/ffcb0a97e2a87d50f07c-e254b275.js"></script>


    # ex2.write("""<div id="cc-id">""")
    # ex2.write(str(cc_content))
    # ex2.write("""</div>""")
    #
    # ex2.write("""<div id="leo-id">""")
    # ex2.write(str(leo_content))
    # ex2.write("""</div>""")
    #
    # ex2.write("""<div id="linguee-id">""")
    # ex2.write(str(linguee_content))
    # ex2.write("""</div>""")
    #
    # ex2.write("""<div id="duden-id">""")
    # ex2.write(str(duden_content))
    # ex2.write("""</div>""")

    # ex2.write("""<div id="dwds-id">""")
    # ex2.write(str(dwds_content))
    # ex2.write("""</div>""")

    ex2.write("""<div id="dictionary-com-id">""")
    ex2.write("""<div id="root">""")
    ex2.write("""<div class="app-base">""")
    ex2.write("""<div id="base-pw" class="base-pwrap css-1wfmt41 e1fub8bm1">""")
    ex2.write(str(dictionary_com_content))
    ex2.write("""</div>""")
    ex2.write("""</div>""")
    ex2.write("""</div>""")
    ex2.write("""</div>""")

    ex2.write("""<div id="thesaurus-com-id">""")
    ex2.write("""<div id="loadingContainer">""")
    ex2.write("""<div id="root">""")
    ex2.write("""<div class="css-1oxnttq e1orooix1">""")
    ex2.write("""<main class="css-2h897a e1orooix0">""")
    ex2.write("""<section class="MainContentContainer css-3dex3x e1h3b0ep0">""")
    ex2.write("""<section class="css-19763d6 e1v16r9g0">""")
    ex2.write(str(thesaurus_com_content1))
    ex2.write(str(thesaurus_com_content2))
    ex2.write("""</section>""")
    ex2.write("""</section>""")
    ex2.write("""</main>""")
    ex2.write("""</div>""")
    ex2.write("""</div>""")
    ex2.write("""</div>""")
    ex2.write("""</div>""")
    #
    # ex2.write("""<div id="cambridge-id">""")
    # ex2.write(str(cambridge_content))
    # ex2.write("""</div>""")

    # ex2.write("""<div id="free-dictionary-id">""")
    # ex2.write(str(free_dictionary_content))
    # ex2.write("""</div>""")

    ex2.write("""<div id="merriam-webster-id">""")
    ex2.write("""<div id="definition-wrapper" class="container">""")
    ex2.write(str(merriam_webster_dict_content))
    ex2.write("""</div>""")
    ex2.write("""</div>""")

    ex2.write("""<div id="merriam-webster-id">""")
    ex2.write("""<div id="definition-wrapper" class="container">""")
    ex2.write(str(merriam_webster_thes_content))
    ex2.write("""</div>""")
    ex2.write("""</div>""")



    ex2.write("""<script src="js/client-eba1f0e0.js"></script>
        <script src="js/client-bfd247be.js"></script>
        <script src="js/react-a73fb4a1.js"></script>""")

    ex2.write("""<script defer src="https://www.thesaurus.com/assets/client-98dc5bf4.js"></script><script defer src="https://www.thesaurus.com/assets/react-babde140.js"></script><script defer src="https://www.thesaurus.com/assets/vendor~06694820-e59c5b7d.js"></script><script defer src="https://www.thesaurus.com/assets/vendor~2a42e354-1b369671.js"></script><script defer src="https://www.thesaurus.com/assets/vendor~62235fd2-ea109293.js"></script><script defer src="https://www.thesaurus.com/assets/vendor~6e8b5f81-f6bc5ccb.js"></script><script defer src="https://www.thesaurus.com/assets/vendor~7d359b94-11c70c4a.js"></script><script defer src="https://www.thesaurus.com/assets/vendor~9c5b28f6-80323c93.js"></script><script defer src="https://www.thesaurus.com/assets/vendor~b5906859-b893761f.js"></script><script defer src="https://www.thesaurus.com/assets/vendor~b9cf3951-1538c530.js"></script><script defer src="https://www.thesaurus.com/assets/vendor~d95e979a-b3ea2dc1.js"></script>
    """)


    ex2.write("""</body>
    </html>""")

#missing styles, e.g. for merriam webster, probably come from not including the outer divs

#removing left padding on merriam webster gets it to behave
#merriam webster can probably can share ids/css files

#is the problem with certain js elements not working the fact that js is being loaded BEFORE the elements?

#add bootstrap, javascript

t2 = datetime.now()
print(str(t2 - t1))
