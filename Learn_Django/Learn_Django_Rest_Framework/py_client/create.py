import requests

endpoint = "http://localhost:8000/api/products/"

data = {
    "title" : "test"
    ,"content" : "test 1"
    ,"price" : 20.50
}

get_response = requests.post(endpoint , json=data)
print(get_response.json())

