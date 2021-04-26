from django import forms
from django.forms import formset_factory
from .models import Dictionary

dicts = Dictionary.objects.all()

class SearchForm(forms.Form):
    search_field = forms.CharField(label="Search")
    lang = forms.ChoiceField(choices=[('DE','DE'),('EN','EN')])
