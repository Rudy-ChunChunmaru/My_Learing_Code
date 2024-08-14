import requests

endpoint = "http://localhost:8000/api/products/02020202/"

get_response = requests.get(endpoint, json={"title":"hellow world me"})
print(get_response.json())