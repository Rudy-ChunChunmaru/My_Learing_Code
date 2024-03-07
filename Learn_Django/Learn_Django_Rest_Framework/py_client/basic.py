
import requests

# endpoint = "https://httpbin.org/anything"
endpoint = "http://localhost:8000/api/"

get_response = requests.post(endpoint, json={"title":"hellow world me"})
print(get_response.headers)
print(get_response.text)

# print(get_response.json())
# print(get_response.status_code)
# HTTP Request -> HTML
# REST API HTTP Requests -> JSON / XML
