from bs4 import BeautifulSoup
import requests
from datetime import datetime
import re
import selenium

search = "Gebrauch"
cc_link = requests.get("https://www.dict.cc/?s=" + search).text
leo_link = requests.get("https://dict.leo.org/englisch-deutsch/" + search).text
duden_link = requests.get("https://www.duden.de/rechtschreibung/" + search).text
linguee_link = requests.get("https://www.linguee.com/english-german/search?source=auto&query=" + search).text

with open('ex.html') as ex_cc:
    soup = BeautifulSoup(ex_cc, 'lxml')
    cc_content = soup.find_all('table')[2]
#The main table seems to be [2]
for relative_link in cc_content.find_all('a', href=re.compile('^//www.dict.cc')):
    relative_link['href'] = "https:" + relative_link['href']


soup2 = BeautifulSoup(linguee_link, 'lxml')
linguee_content = soup2.find(id='lingueecontent')
for relative_link in linguee_content.find_all('a', href=re.compile('^/english-german')):
    relative_link['href'] = "https://www.linguee.com" + relative_link['href']

soup3 = BeautifulSoup(duden_link, 'lxml')
duden_content = soup3.find('article')
duden_nav = soup3.find('div', id="block-stickynavigationblock")
duden_css_links = soup3.find_all('link', href=re.compile('https://cdn.duden.de/ampersand/'))
for relative_link in duden_content.find_all('a', href=re.compile('^/rechtschreibung')):
    relative_link['href'] = "https://www.duden.de" + relative_link['href']

soup4 = BeautifulSoup(leo_link, 'lxml')
leo_content = soup4.find('div', {"data-dz-search": "result"})
for relative_link in leo_content.find_all('a', href=re.compile('^/englisch-deutsch')):
    relative_link['href'] = "https://dict.leo.org" + relative_link['href']
