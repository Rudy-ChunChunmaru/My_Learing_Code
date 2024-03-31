

from .models import Product 
from .serializers import ProductSerializers

from rest_framework import authentication, generics, mixins, permissions
from rest_framework.response import Response
from rest_framework.decorators import api_view

#django
from django.shortcuts import get_object_or_404

class ProductCreateApiView(
    generics.CreateAPIView
    ):
    queryset = Product.objects.all()
    serializer_class = ProductSerializers
    
    def perform_create(self, serializer):
        print(serializer.validated_data)
        title = serializer.validated_data.get('title')
        content = serializer.validated_data.get('content')
        if content is None:
            content = title
        serializer.save(content=content)

product_createa_view = ProductCreateApiView.as_view()

class ProductDetailAPIView(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializers
    
product_detail_view = ProductDetailAPIView.as_view()

class ProductUpdateAPIView(generics.UpdateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializers

    def perform_update(self, serializer):
        instance = serializer.save()
        if not instance.content:
            instance.content = instance.title
    
product_update_view = ProductUpdateAPIView.as_view()

class ProductDeleteAPIView(generics.DestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializers

    def perform_destroy(self, instance):
        super().perform_destroy(instance)

product_delete_view = ProductDeleteAPIView.as_view()

class ProductListAPIView(generics.ListAPIView):
    '''
    not goin do this
    '''
    queryset = Product.objects.all()
    serializer_class = ProductSerializers
    
product_list_view = ProductListAPIView.as_view()

class ProductListCreateApiView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializers
    authentication_classes = [authentication.SessionAuthentication]
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    permission_classes = [permissions.DjangoModelPermissions]

    def perform_create(self, serializer):

        print(serializer.validated_data)
        title = serializer.validated_data.get('title')
        content = serializer.validated_data.get('content')
        if content is None:
            content = title
        serializer.save(content=content)

product_list_createa_view = ProductListCreateApiView.as_view()

#  -----------------------------------------------------------------------------------------------

class ProductMixInView(
    mixins.CreateModelMixin,   
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    generics.GenericAPIView
    ):
    queryset = Product.objects.all()
    serializer_class = ProductSerializers
    lookup_field = 'pk'

    def get(self, request, *args, **kwargs):
        # print(args, kwargs)
        pk = kwargs.get('pk')
        if pk is not None:
            return self.retrieve(request,*args, **kwargs)
        return self.list(request, *args, **kwargs)
    
    def post(self,request, *args, **kwargs):
        return self.create(request,*args, **kwargs)
    
product_mix_in_view = ProductMixInView.as_view()


# ------------------------------------------------------------------------------------------------

@api_view(['GET' , 'POST'])
def product_alt_view(request,pk=None,*args, **kwargs):
    method = request.method

    if method == 'GET':
        if pk is not None:
            # queryset = Product.objects.filter(pk=pk)
            # if not queryset.exists():
            #     raise Http404
            # return Response()
            obj = get_object_or_404(Product , pk=pk)
            data = ProductSerializers(obj,many= False).data
            return Response(data)
        else:
            queryset = Product.objects.all()
            data = ProductSerializers(queryset, many = True).data
            return Response(data) 
    if method == 'POST':
        serializer = ProductSerializers(data=request.data)
        if(serializer.is_valid(raise_exception=True)):
            title = serializer.validated_data.get('title')
            content = serializer.validated_data.get('content')
            if content is None:
                content = title
            serializer.save(content=content)
            return Response(serializer.data)
        return Response({"Invalid" : "not good data"} , status=400)