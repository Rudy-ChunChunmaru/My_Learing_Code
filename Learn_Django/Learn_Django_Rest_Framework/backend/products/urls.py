from django.urls import path

from . import views

urlpatterns = [
    # ----------------------------------- using generic
    path('',views.product_list_createa_view,  name='product-list'),
    path('<int:pk>/update/',views.product_update_view ,  name='product-edit'),
    path('<int:pk>/delete/',views.product_delete_view ,  name='product-delete'),
    path('<int:pk>/',views.product_detail_view , name='product-detail')

    # ----------------------------------- using mix in
    # path('',views.product_mix_in_view),
    # path('<int:pk>/',views.product_mix_in_view)

    # ----------------------------------- default rest framework
    # path('',views.product_alt_view),
    # path('<int:pk>/',views.product_alt_view)
]