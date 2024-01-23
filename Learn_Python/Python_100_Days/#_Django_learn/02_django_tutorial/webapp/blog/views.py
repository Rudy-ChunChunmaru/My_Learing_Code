from django.shortcuts import render

# Create your views here.
def blog(request):
    context = {
        'name':'my blog'
    }
    return render(request,'blog/blog.jinja',context)