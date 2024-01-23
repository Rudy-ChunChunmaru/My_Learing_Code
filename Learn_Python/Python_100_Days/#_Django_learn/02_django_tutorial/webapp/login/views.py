from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth import login
from .form import FormLogin

# Create your views here.
def log_in(request):
    form = FormLogin()
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect('dashboard')
        
    return render(request,'login/login.jinja', {'form':form})


def log_out(request):
    logout(request)
    request.session.flush()
    return redirect('/login/')