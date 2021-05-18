from django import forms
from django.forms import formset_factory
from .models import Dictionary

dicts = Dictionary.objects.all()

class SearchForm(forms.Form):
    search_field = forms.CharField(label="Search")
    lang = forms.ChoiceField(choices=[('DE','DE'),('EN','EN')])

class ContactForm(forms.Form):
    email = forms.EmailField(label="Email", required=True)
    message = forms.CharField(label="Message", widget=forms.Textarea, required=True)
