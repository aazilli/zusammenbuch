from django.core.management.base import BaseCommand, CommandError
from webapp.models import Dictionary
import json

class Command(BaseCommand):
    help = 'Populates the dictionary database'

    def handle(self, *args, **options):

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

        self.stdout.write(self.style.SUCCESS('-----Successfully added dictionaries-----'))
