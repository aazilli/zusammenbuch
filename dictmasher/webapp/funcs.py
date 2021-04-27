from .models import Dictionary, Settings
from django.contrib.sessions.models import Session

#import Sessions? Match session object by session key, then pass object to Settings?

def set_settings(request):
    #will filter the delete and write commands by session id

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
