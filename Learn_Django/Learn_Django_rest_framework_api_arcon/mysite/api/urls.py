from django.urls import path
from . import views

urlpatterns = [
    path('blogpost/',views.BlogPostCreate.as_view(), name="blogpost-view-ListCreate"),
    path('blogpost/<int:pk>/',views.BlogPostRetrieveUpdateDestroy.as_view(), name="blogpost-view-RetrieveUpdateDestroy"),
    path('blogpost/title/',views.BlogPostList.as_view(), name="blogpost-view-List"),
]