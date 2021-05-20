from django.urls import path
from . import views

urlpatterns = [
    path('', views.welcome, name='home'),
    path('settings/', views.settings, name='settings'),
    path('results/', views.results, name='results'),
    path('about/', views.about, name='about'),
    path('success/', views.success, name='success')
]

#test ints in seraches
