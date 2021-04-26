from django.urls import path
from . import views

urlpatterns = [
    path('', views.welcome, name='home'),
    path('settings/', views.settings, name='settings'),
    path('results/', views.results, name='results'),
]

#test ints in seraches
