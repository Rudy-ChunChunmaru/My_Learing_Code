import requests
from datetime import datetime

USERNAME = "rudymu"
TOKEN = "ChunChunMaruGOGOGO"

pixela_endpoint = "https://pixe.la/v1/users"

user_params= {
    "token":TOKEN,
    "username":USERNAME,
    "agreeTermsOfService":"yes",
    "notMinor": "yes"
}
# # _______________________________________________________________________ make a new user
# result = requests.post(url=pixela_endpoint, json=user_params)
# print(result.text)

headers = {
    "X-USER-TOKEN":TOKEN
}

graph_config={
    "id":"graph1",
    "name": "walk step",
    "unit": "step",
    "type": "int",
    "color": "kuro",
}

# # _______________________________________________________________________ make a new graph 1
# graph_endpoint = f"{pixela_endpoint}/{USERNAME}/graphs"
# result = requests.post(url=graph_endpoint, json=graph_config, headers=headers)
# print(result.text)


graph_update_config={
    "id":"graph0",
    "name":"walk step",
    "unit": "step",
    "type": "int",
    "color": "kuro",
}

# # _______________________________________________________________________ make a new graph 0
# graph_endpoint = f"{pixela_endpoint}/{USERNAME}/graphs"
# result = requests.post(url=graph_endpoint, json=graph_update_config, headers=headers)
# print(result.text)

today = datetime.now()
today = datetime(year=2023, month=11, day=16)

graph_pixel_data={
    "date":f"{today.strftime('%Y%m%d')}",
    "quantity":"6000"
}

# # _______________________________________________________________________ make a new pixel on graph
# GRAPHID = "graph0"
# post_pixel_endpoint = f"{pixela_endpoint}/{USERNAME}/graphs/{GRAPHID}"
# result = requests.post(url=post_pixel_endpoint, json=graph_pixel_data, headers=headers)
# print(result.text)

graph_pixel_update_data={
    "quantity":"1000"
}

# # _______________________________________________________________________ update pixel on graph
# GRAPHID = "graph0"
# post_pixel_endpoint = f"{pixela_endpoint}/{USERNAME}/graphs/{GRAPHID}/{today.strftime('%Y%m%d')}"
# result = requests.put(url=post_pixel_endpoint, json=graph_pixel_update_data, headers=headers)
# print(result.text)


# # _______________________________________________________________________ delete pixel on graph
GRAPHID = "graph0"
post_pixel_endpoint = f"{pixela_endpoint}/{USERNAME}/graphs/{GRAPHID}/{today.strftime('%Y%m%d')}"
result = requests.delete(url=post_pixel_endpoint, headers=headers)
print(result.text)