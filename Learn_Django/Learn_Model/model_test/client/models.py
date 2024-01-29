from django.db import models
from django.contrib.auth.models import User
from team.models import Team

class InfoTabel (models.Model) : 
    created_at = models.DateTimeField(auto_now_add = True)
    changed_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

class Comment (InfoTabel) : 
    content = models.TextField()
    created_by = models.ForeignKey(User,related_name='comment', on_delete=models.CASCADE)

class Client (InfoTabel):
    ACTIVE = 'active'
    ARCHIVED = 'archived'
    CHOICES = (
        (ACTIVE, 'Active'),
        (ARCHIVED, 'Archived')
    )

    team = models.ForeignKey(Team,related_name='clients',on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    status = models.CharField(max_length=255, choices=CHOICES ,default=ACTIVE)
    comments = models.ManyToManyField(Comment, blank=True)

    class Meta: 
        ordering = ['name',]
        verbose_name = 'Client_name'

    def __str__ (self):
        return self.name
    
    def save(self, *args, **kwargs):
        print('save')
        super(Client,self).save(*args, **kwargs)
    
    def number_of_comments(self):
        return self.comments.count()
    
    
class Todolist (InfoTabel):
    client = models.ForeignKey(Client,related_name='todolists',on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    comments = models.ManyToManyField(Comment, blank=True)
    created_by = models.ForeignKey(User,related_name='todolists', on_delete=models.CASCADE)



