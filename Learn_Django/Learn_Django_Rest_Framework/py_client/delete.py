import requests

product_id  = input("masukan data yang ingin ID yang ingin hapus ? /n")
try:
    product_id = int(product_id)
except:
    product_id = None
    print(f'{product_id} ini bukan nomor')

if product_id:
    endpoint = f"http://localhost:8000/api/products/{product_id}/delete/"

get_response = requests.delete(endpoint)
print(get_response.status_code , get_response.status_code == 204)

