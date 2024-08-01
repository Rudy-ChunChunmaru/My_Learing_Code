from django.shortcuts import render

from rest_framework import generics,status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import BlogPost
from .serializer import BlogPostSerializer

# Create your views here.
class BlogPostCreate(generics.ListCreateAPIView):
    queryset=BlogPost.objects.all()
    serializer_class = BlogPostSerializer

    def delete(self,request,*args, **kwargs):
        BlogPost.objects.all().delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class BlogPostRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset=BlogPost.objects.all()
    serializer_class = BlogPostSerializer
    lookup_field = 'pk'

# --------------------------------------------------------------------------------------------

class BlogPostList(APIView):
    def get(self,request,*args, **kwargs):
        title = request.query_params.get("title","")
        print(title)
        if title:
            blog_post = BlogPost.objects.filter(title__icontains = title)
        else:
            blog_post = BlogPost.objects.all()

        result =  BlogPostSerializer(blog_post, many=True)
        return Response(data=result.data , status = status.HTTP_200_OK)
