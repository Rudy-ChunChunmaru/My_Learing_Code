from rest_framework import mixins,viewsets


from .models import Product
from .serializers import ProductSerializers

class ProductViewSet(viewsets.ModelViewSet):
    '''
    get -> list -> Queryset
    get -> retrieve -> Product Instance Detail View
    post -> create -> New Instance
    put -> Update
    patch -> Partial Update
    delete -> destroy 
    '''
    queryset = Product.objects.all()
    serializer_class = ProductSerializers
    lookup_field = 'pk'


class ProductGenericsViewSet(
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    viewsets.GenericViewSet
):
    '''
    get -> list -> Queryset
    get -> retrieve -> Product Instance Detail View
    '''
    queryset = Product.objects.all()
    serializer_class = ProductSerializers
    lookup_field = 'pk'

# product_list_view = ProductGenericsViewSet.as_view({'get': 'list'})
# product_detail_view = ProductGenericsViewSet.as_view({'get': 'retrieve'})
