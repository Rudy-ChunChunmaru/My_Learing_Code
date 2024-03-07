from django.urls import path

from . import views

urlpetterns = [
    path('<int:pk>',views.ProductDetailAPIView.as_view())
]