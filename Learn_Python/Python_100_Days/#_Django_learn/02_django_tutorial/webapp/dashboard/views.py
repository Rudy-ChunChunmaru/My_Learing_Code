from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.conf import settings

# Create your views here.
@login_required(login_url=settings.LOGIN_URL)
def dashboard(request):
    context = {'name' : ' selamat datang '}
    return render(request, 'dashboard/dashboard.jinja', context)