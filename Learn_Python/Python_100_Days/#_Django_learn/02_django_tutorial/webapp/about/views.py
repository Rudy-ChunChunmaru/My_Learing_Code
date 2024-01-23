from django.shortcuts import render

# Create your views here.
def index(request):
    context = {
        'name':'Home page'
    }
    return render(request,'index.jinja',context)