from rest_framework.routers import DefaultRouter

from products.viewsets import ProductGenericsViewSet

router = DefaultRouter()
router.register('products-abc', ProductGenericsViewSet, basename='products')
print(router.urls)
urlpatterns = router.urls