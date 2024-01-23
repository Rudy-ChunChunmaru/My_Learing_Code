from django.shortcuts import render

# Create your views here.
def contact(request):
    context = {
        'name':'my contact'
    }
    return render(request,'contact/contact.jinja',context)