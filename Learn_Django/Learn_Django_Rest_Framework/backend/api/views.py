import json
from django.http import JsonResponse

from products.models import Product

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

    model_data = Product.objects.all().order_by("?").first()
    data = {}
    if model_data:
        data['id'] = model_data.id
        data['title'] = model_data.title
        data['content'] = model_data.content
        data['price'] = model_data.price

    return JsonResponse(data)