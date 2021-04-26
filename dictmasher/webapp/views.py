from django.shortcuts import render
from django.http import HttpResponse
from .forms import SearchForm
from .models import Dictionary, Settings
from .funcs import set_settings

dictionaries = Dictionary.objects.all()

def welcome(request):
    form = SearchForm
    context = { 'form': SearchForm
    }
    #make sure DE/EN toggle is persisted (between pages), though what to do if they have two tabs open? solution: if on EN page, set default to EN
    return render(request, 'webapp/home.html', context)

def settings(request):
    dictionaries = Dictionary.objects.all()
    Dictionary.retrieved_settings = Settings.objects.all()
    #will eventually filter by session id
    # send settings to class variable?
    # add logic to prepopulate form
    # validate form as well
    if request.method == "POST":
        for item in list(request.session.items()):
            print(item)
        for item in list(request.POST.items()):
            print(item)
        set_settings(request)
    return render(request, 'webapp/settings.html', {'dictionaries': dictionaries})

def results(request):
    search = request.GET['search_field']
    lang = request.GET['lang']
    #processes dictionaries according to settings
    #seems not to be working!!! try building the query set by starting with Settings rather than Dictionary
    # if lang == 'EN':
    #     dictionaries = Dictionary.objects.all().filter(pk__in=Settings.objects.filter(is_enabled_en=True)).order_by('settings__order_en')
    #     print(dictionaries)
    # elif lang == 'DE':
    #     dictionaries = Dictionary.objects.all().filter(pk__in=Settings.objects.filter(is_enabled_de=True)).order_by('settings__order_de')
    #     print(dictionaries)
    for dictionary in dictionaries:
        dictionary.search = search
    return render(request, 'webapp/results.html', {'dictionaries': dictionaries, 'lang': lang, 'search_field': search})
