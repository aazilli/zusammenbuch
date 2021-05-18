from .models import Dictionary, Settings
from django.contrib.sessions.models import Session
import json

#import Sessions? Match session object by session key, then pass object to Settings?

def set_settings(request):

    sesh = Session.objects.get(pk=request.session.session_key)
    Settings.objects.all().filter(session=sesh).delete()

    dictionaries = Dictionary.objects.all()
    for dictionary in dictionaries:
        is_enabled_de = False
        is_enabled_en = False
        is_trimmed_de = True
        is_trimmed_en = True
        order_de = None
        order_en = None
        for item in request.POST.items():
            if item[0] == dictionary.name + "-checkbox-de-form":
                is_enabled_de = True
            if item[0] == dictionary.name + "-checkbox-en-form":
                is_enabled_en = True
            if item[0] == dictionary.name + "-order-de":
                try:
                    order_de = int(item[1])
                except ValueError:
                    order_de = None
            if item[0] == dictionary.name + "-order-en":
                try:
                    order_en = int(item[1])
                except ValueError:
                    order_en = None
            if item[0] == dictionary.name + "-display-de-form":
                if item[1] == 'full':
                    is_trimmed_de = False
            if item[0] == dictionary.name + "-display-en-form":
                if item[1] == 'full':
                    is_trimmed_en = False
        setting = Settings(session=sesh, dict=dictionary, is_enabled_de=is_enabled_de, is_enabled_en=is_enabled_en, is_trimmed_de=is_trimmed_de, is_trimmed_en=is_trimmed_en, order_de=order_de, order_en=order_en)
        setting.save()

def set_dictionaries():

    Dictionary.objects.all().delete()

    dict_cc_dependencies = {'fonts':[],
    'css':['cc_id.css'],
    'js':[]
    }
    dict_cc_json = json.dumps(dict_cc_dependencies)
    dict_cc = Dictionary(name="dict.cc", lang="TRANS", type='HTML', div_id="cc-id", base_url='https://www.dict.cc/?s=', dependencies=dict_cc_json)
    dict_cc.save()

    dict_leo_dependencies = {'fonts':[],
    'css':['leo_id.css'],
    'js':[]
    }
    dict_leo_json = json.dumps(dict_leo_dependencies)
    dict_leo = Dictionary(name="dict.leo", lang="TRANS", type='HTML', div_id="leo-id", base_url='https://dict.leo.org/englisch-deutsch/', dependencies=dict_leo_json)
    dict_leo.save()

    linguee_dependencies = {'fonts':[],
    'css':['linguee_id.css'],
    'js':[]
    }
    linguee_json = json.dumps(linguee_dependencies)
    linguee = Dictionary(name="linguee", lang="TRANS", type='HTML', div_id="linguee-id", base_url='https://www.linguee.com/english-german/search?source=auto&query=', dependencies=linguee_json)
    linguee.save()

    duden_dependencies = {'fonts':[],
    'css':['duden_id.css'],
    'js':[]
    }
    duden_json = json.dumps(duden_dependencies)
    duden =  Dictionary(name="duden", lang="DE", type='HTML', div_id="duden-id", base_url='https://www.duden.de/rechtschreibung/', dependencies=duden_json)
    duden.save()

    dictionarycom_dependencies = {'fonts':[],
    'css':['dictionary_com_id.css'],
    'js':[]
    }
    dictionarycom_json = json.dumps(dictionarycom_dependencies)
    dictionarycom = Dictionary(name='dictionary.com', lang='EN', type='HTML', div_id='dictionary-com-id', base_url='https://www.dictionary.com/browse/', dependencies=dictionarycom_json)
    dictionarycom.save()

    cambridge_dependencies = {'fonts':[],
    'css':['cambridge_id.css'],
    'js':[]
    }
    cambridge_json = json.dumps(cambridge_dependencies)
    cambridge = Dictionary(name='Cambridge Dictionary', lang='EN', type='HTML', div_id='cambridge-id', base_url='https://dictionary.cambridge.org/dictionary/english/', dependencies=cambridge_json)
    cambridge.save()

    mw_dependencies = {'fonts': ['mw/nuFlD-vYSZviVYUb_rj3ij__anPXBYf9lW4e5j5hNKc.woff2',
    'mw/nuFnD-vYSZviVYUb_rj3ij__anPXDTngOWwu5DRmFqWF_g.woff2',
    'mw/nuFiD-vYSZviVYUb_rj3ij__anPXDTzYgEM86xQ.woff2',
    'mw/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2',
    'mw/mem8YaGs126MiZpBA-UFW50bf8pkAp6a.woff2',
    'mw/mem6YaGs126MiZpBA-UFUK0Xdc1GAK6bt6o.woff2',
    'mw/mem6YaGs126MiZpBA-UFUK0Zdc1GAK6b.woff2',
    'mw/mem5YaGs126MiZpBA-UN7rgOUuhpKKSTjw.woff2',
    'mw/memnYaGs126MiZpBA-UFUKWiUNhrIqOxjaPX.woff2'],
    'css': ['merriam_webster_id1.css', 'merriam_webster_id2.css', 'merriam_webster_fonts.css'],
    'js': []
    }
    mw_json = json.dumps(mw_dependencies)
    mw_dict = Dictionary(name='Merriam-Webster Dictionary', lang='EN', type='HTML', div_id='merriam-webster-id', base_url='https://www.merriam-webster.com/dictionary/', dependencies=mw_json)
    mw_dict.save()

    mw_thes = Dictionary(name='Merriam-Webster Thesaurus', lang='EN', type='HTML', div_id='merriam-webster-id', base_url='https://www.merriam-webster.com/thesaurus/', dependencies=mw_json)
    mw_thes.save()

def string_preprocess(string):
    #hopefully this won't overwrite the search term for the other dictionaries
    if self.name in ["dict.leo", "Merriam-Webster Dictionary", "Merriam-Webster Thesaurus"]:
        string.replace(" ", "%20")
    elif self.name in ["linguee", "dict.cc"]:
        string.replace(" ", "+")
    elif self.name == "duden":
        #nouns must be capitalized
        string.replace(" ", "_")
        string.replace("ß", "sz")
        string.replace("ü", "ue")
        string.replace("ö", "oe")
        string.replace("ä", "ae")
    elif self.name in ["Cambridge Dictionary", "dictionary.com", "thesaurus.com"]:
        #"to" in infinitives? retry without if 404?
        string.replace(" ", "-")
    return string
