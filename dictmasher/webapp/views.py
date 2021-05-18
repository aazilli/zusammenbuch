from django.shortcuts import render, redirect
from django.http import HttpResponse
from .forms import SearchForm, ContactForm
from .models import Dictionary, Settings
from .funcs import set_settings
from django.contrib.sessions.models import Session
from django.db.models.expressions import RawSQL
import concurrent.futures
from django.core.mail import send_mail, BadHeaderError
from django.conf import settings
from datetime import datetime
import re

dictionaries = Dictionary.objects.all()

def welcome(request):
    if request.method == "POST":
        for item in list(request.post.items()):
            print(item)
    return render(request, 'webapp/home.html')

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
    if not request.session.exists(request.session.session_key):
        request.session.create()
    request.session.set_expiry(12 * 60 * 60)

    search = request.GET['search_field']
    lang = request.GET['lang']
    sesh = Session.objects.get(pk=request.session.session_key)

    if sesh.pk in Settings.objects.values_list("session", flat=True):
        sesh_has_settings = True
    else:
        sesh_has_settings = False

    #processes dictionaries according to settings
    if lang == 'EN':
        # dictionaries = Dictionary.objects.all().filter(pk__in=Settings.objects.filter(session=sesh, is_enabled_en=True).order_by('order_en').values('dict'))

        # user_settings = Settings.objects.all().filter(session=sesh, is_enabled_en=True).order_by('order_en')
        # dictionaries = Dictionary.objects.all().filter(pk__in=user_settings)
        # dictionaries = Dictionary.objects.all().filter(pk__in=Settings.objects.filter(is_enabled_en=True)).order_by('settings__order_en')

        #This gets us soooo close! Just need to switch backend to Postgres?
        # dictionaries = Dictionary.objects.all().filter(pk__in=Settings.objects.filter(session=sesh, is_enabled_de=True).values('dict')).order_by('-settings__order_de').distinct('pk')
        if sesh_has_settings and re.match("[a-z0-9]+", request.session.session_key) and len(request.session.session_key) == 32:
            dictionaries = Dictionary.objects.raw(f"SELECT webapp_dictionary.id, display_order FROM webapp_dictionary, (SELECT dict_id AS result_id, display_order FROM (SELECT id, session_id, dict_id, order_en AS display_order, is_enabled_en FROM webapp_settings WHERE webapp_settings.session_id = '{request.session.session_key}' AND webapp_settings.is_enabled_en = True) AS subquery ORDER BY display_order) AS subquery2 WHERE id = result_id ORDER BY display_order")
        else:
            dictionaries = Dictionary.objects.filter(lang__in=['EN', 'TRANS'])
        for dict in dictionaries:
            print(dict)
        print(dictionaries)


    elif lang == 'DE':
        # dictionaries = Dictionary.objects.all().filter(pk__in=Settings.objects.filter(session=sesh, is_enabled_de=True).values('dict')).filter(f'settings__session="{sesh}", settings__is_enabled_de="True"').order_by('settings__order_de')
        # user_settings = Settings.objects.all().filter(session=sesh, is_enabled_en=True).order_by('order_en')
        # dictionaries = Dictionary.objects.all().filter(pk__in=Settings.objects.filter(is_enabled_de=True)).order_by('settings__order_de')
        # SELECT dict_id FROM (SELECT id, session_id, dict_id, order_de AS display_order, is_enabled_de FROM webapp_settings WHERE webapp_settings.session_id = '33qnnt40b5ggfuipof94v0uw1smwzrrq' AND webapp_settings.is_enabled_de = True) AS subquery ORDER BY display_order;
        # dictionaries = Dictionary.objects.filter(pk__in=RawSQL(f"SELECT dict_id FROM (SELECT id, session_id, dict_id, order_de AS display_order, is_enabled_de FROM webapp_settings WHERE webapp_settings.session_id = '{request.session.session_key}' AND webapp_settings.is_enabled_de = True) AS subquery ORDER BY display_order", (sesh,)))
        if sesh_has_settings and re.match("[a-z0-9]+", request.session.session_key) and len(request.session.session_key) == 32:
            dictionaries = Dictionary.objects.raw(f"SELECT webapp_dictionary.id, display_order FROM webapp_dictionary, (SELECT dict_id AS result_id, display_order FROM (SELECT id, session_id, dict_id, order_de AS display_order, is_enabled_de FROM webapp_settings WHERE webapp_settings.session_id = '{request.session.session_key}' AND webapp_settings.is_enabled_de = True) AS subquery ORDER BY display_order) AS subquery2 WHERE id = result_id ORDER BY display_order")
        else:
            dictionaries = Dictionary.objects.filter(lang__in=['DE', 'TRANS'])
        for dict in dictionaries:
            print(dict)
    for dictionary in dictionaries:
        dictionary.search = search


    #grabs html w/ multithreading
    results_list = []

    with concurrent.futures.ThreadPoolExecutor() as executor:
        results = executor.map(lambda dictionary: dictionary.make_article(), dictionaries)
        for result in results:
            # print(result)
            results_list.append(result)

    return render(request, 'webapp/results.html', {'dictionaries': dictionaries, 'lang': lang, 'search_field': search, 'results': results_list})

def about(request):
    if request.method == "GET":
        form = ContactForm()
    else:
        form = ContactForm(request.POST)
        if form.is_valid():
            message = form.cleaned_data['message']
            email = form.cleaned_data['email']
            timestamp = datetime.now().strftime("%m/%d/%Y, %H:%M:%S")
            try:
                send_mail(f"DICTIONARY APP MESSAGE sent from {str(email)} at {timestamp}", message, email, ['zilli@umich.edu'])
            except BadHeaderError:
                return HttpResponse('Invalid header')
            return redirect("success")
    return render(request, 'webapp/about.html', {'form': form})

def success(request):
    return render(request, 'webapp/success.html')
