from django.shortcuts import render
from django.http import HttpResponse
from .forms import SearchForm
from .models import Dictionary, Settings
from .funcs import set_settings
from django.contrib.sessions.models import Session

dictionaries = Dictionary.objects.all()

def welcome(request):
    form = SearchForm
    context = { 'form': SearchForm
    }
    return render(request, 'webapp/home.html', context)

def settings(request):
    if not request.session.exists(request.session.session_key):
        request.session.create()
    sesh = Session.objects.get(pk=request.session.session_key)
    request.session.set_expiry(12 * 60 * 60)

    # validate form as well
    if request.method == "POST":
        request.session['test'] = 'Test'
        for item in list(request.session.items()):
            print(item)
        set_settings(request)

    dictionaries = Dictionary.objects.all()
    session_settings = Settings.objects.all().filter(session=sesh)
    if len(session_settings) > 0:
        Dictionary.retrieved_settings = session_settings
    else:
        Dictionary.retrieved_settings = 'default'

    return render(request, 'webapp/settings.html', {'dictionaries': dictionaries})

def results(request):
    search = request.GET['search_field']
    lang = request.GET['lang']
    sesh = Session.objects.get(pk=request.session.session_key)
    #processes dictionaries according to settings
    #seems not to be working!!! try building the query set by starting with Settings rather than Dictionary
    if lang == 'EN':
        dictionaries = Dictionary.objects.all().filter(pk__in=Settings.objects.filter(session=sesh, is_enabled_en=True).order_by('order_en').values('dict'))

        # user_settings = Settings.objects.all().filter(session=sesh, is_enabled_en=True).order_by('order_en')
        # dictionaries = Dictionary.objects.all().filter(pk__in=user_settings)
        # dictionaries = Dictionary.objects.all().filter(pk__in=Settings.objects.filter(is_enabled_en=True)).order_by('settings__order_en')

        #This gets us soooo close! Just need to switch backend to Postgres?
        # dictionaries = Dictionary.objects.all().filter(pk__in=Settings.objects.filter(session=sesh, is_enabled_de=True).values('dict')).order_by('-settings__order_de').distinct('pk')
        print(dictionaries)


    elif lang == 'DE':
        dictionaries = Dictionary.objects.all().filter(pk__in=Settings.objects.filter(session=sesh, is_enabled_de=True).values('dict')).order_by('-settings__order_de')
        # user_settings = Settings.objects.all().filter(session=sesh, is_enabled_en=True).order_by('order_en')
        # dictionaries = Dictionary.objects.all().filter(pk__in=Settings.objects.filter(is_enabled_de=True)).order_by('settings__order_de')
        print(dictionaries)
    for dictionary in dictionaries:
        dictionary.search = search
    return render(request, 'webapp/results.html', {'dictionaries': dictionaries, 'lang': lang, 'search_field': search})
