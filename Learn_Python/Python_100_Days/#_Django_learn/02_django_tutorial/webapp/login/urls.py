from django.urls import path
from . import views

# /login/
urlpatterns = [
    path('', views.log_in, name="login"),
    path('logout/', views.log_out, name="logout"),
]