from django.urls import path

from . import views

urlpatterns = [
    # ----------------------------------- using generic
    path('',views.product_list_createa_view),
    path('<int:pk>/update/',views.product_update_view),
    path('<int:pk>/delete/',views.product_delete_view),
    path('<int:pk>/',views.product_detail_view)

    # ----------------------------------- using mix in
    # path('',views.product_mix_in_view),
    # path('<int:pk>/',views.product_mix_in_view)

    # ----------------------------------- default rest framework
    # path('',views.product_alt_view),
    # path('<int:pk>/',views.product_alt_view)
]