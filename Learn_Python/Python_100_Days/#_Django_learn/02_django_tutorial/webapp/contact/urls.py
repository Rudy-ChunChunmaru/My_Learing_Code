from django.urls import path
from . import views

# /contact/
urlpatterns = [
    path('', views.contact, name="contact"),
]