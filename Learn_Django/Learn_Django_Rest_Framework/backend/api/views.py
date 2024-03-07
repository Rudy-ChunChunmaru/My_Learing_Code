import json

from django.forms.models import model_to_dict
from products.models import Product
from django.http import JsonResponse, HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from products.serializers import ProductSerializers

@api_view(["POST"])
def api_home(request, *args, **kwargs):
    # body = request.body
   
    # print(request.GET) # url params
    # print(request.POST)
    
    # data = {}
    # try:
    #     data = json.loads(body) # json data
    # except:
    #     pass

    # print(data)
    # data['params']  = dict(request.GET)
    # data['headers'] = dict(request.headers) # meta data
 
    # data['content_type'] = request.content_type

    # instance = Product.objects.all().order_by("?").first()
    # data = {}
    # if instance:
    #     # data['id'] = model_data.id
    #     # data['title'] = model_data.title
    #     # data['content'] = model_data.content
    #     # data['price'] = model_data.price
    #     # data=model_to_dict(instance , fields=['id' ,'title', 'price' , 'sale_price'])
    #     data = ProductSerializers(instance).data

    serializer = ProductSerializers(data=request.data)
    # if(serializer.is_valid()):
    #     print(serializer.data)
    #     data= serializer.data
    #     return Response(data)

    if(serializer.is_valid(raise_exception=True)):
        # instance= serializer.save()
        # print(instance)
        return Response(serializer.data)
    return Response({"Invalid" : "not good data"} , status=400)


    # return Response(data)
    # return HttpResponse(data)