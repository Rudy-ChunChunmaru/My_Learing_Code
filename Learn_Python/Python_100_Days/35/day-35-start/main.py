import requests
import os
from twilio.rest import Client

MY_LAT = -6.930122
MY_LONG = 107.607976
MY_KEY = "52adbb3782e4ecc4590ae9920bf98e3e"
account_sid = "AC77be9ca4cb8cb0645106af75251349e7"
auth_token = "e9dcf92433060aaa75b1a34867181678"
client = Client(account_sid, auth_token)


paramenters = {
    "lat": MY_LAT,
    "lon": MY_LONG,
    "exclude": "current,minutely,daily,alerts",
    "appid": MY_KEY
}

response = requests.get(
    "https://api.openweathermap.org/data/2.8/onecall", params=paramenters
)

response.raise_for_status()
data = response.json()
data_hourly = data['hourly'][:12]

will_rain = False
for hour_data in data_hourly:
    condition_code = hour_data['weather'][0]['id'];
    if int(condition_code) < 700:
        will_rain = True

if(will_rain):
    message = client.messages \
        .create(body='bawa payung ujan ujan ui',
                from_='+12565888516',
                to='+6281257592455'
                )
    print(message.status)

