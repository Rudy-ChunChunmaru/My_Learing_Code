from django.contrib import admin


from .models import Client
from .models import Todolist
from .models import Comment

admin.site.register(Client)
admin.site.register(Todolist)
admin.site.register(Comment)