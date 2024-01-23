import requests
import datetime as dt
import smtplib
import time

MY_LAT = -6.930122
MY_LONG = 107.607976

sender_email = "rudymuinfo@gmail.com"
sender_password = "ydtngotmqkxngyet"
email = "rudymu1822024@gmail.com"


def IsISSOverhead():
    response = requests.get(url="http://api.open-notify.org/iss-now.json")
    response.raise_for_status()
    # if response.status_code == 404:
    #     raise Exception("That resource does nt exist.")
    # elif response.status_code == 401:
    #     raise Exception("you are not authorised to access this data.")
    data = response.json()
    iss_latitude = float(data["iss_position"]["latitude"])
    iss_longitude = float(data["iss_position"]["longitude"])

    if (
        MY_LAT - 5 <= iss_latitude <= MY_LAT + 5
        and MY_LONG - 5 <= iss_longitude <= MY_LONG + 5
    ):
        return True


def IsNight():
    parameters = {"lat": MY_LAT, "lng": MY_LONG, "formatted": 0}
    response = requests.get("https://api.sunrise-sunset.org/json", params=parameters)
    response.raise_for_status()
    data = response.json()
    sunrise = data["results"]["sunrise"]
    sunset = data["results"]["sunset"]

    sunrise_h = sunrise.split("T")[1].split("+")[0].split(":")[0]
    sunrise_m = sunrise.split("T")[1].split("+")[0].split(":")[1]
    sunrise_s = sunrise.split("T")[1].split("+")[0].split(":")[2]

    sunset_h = sunset.split("T")[1].split("+")[0].split(":")[0]
    sunset_m = sunset.split("T")[1].split("+")[0].split(":")[1]
    sunset_s = sunset.split("T")[1].split("+")[0].split(":")[2]

    now = dt.datetime.now()

    if now.hour >= sunset_h or now.hour <= sunrise_h:
        return True


while True:
    time.sleep(120)
    if IsISSOverhead() and IsNight():
        with smtplib.SMTP("smtp.gmail.com") as connection:
            connection.starttls()
            connection.login(user=sender_email, password=sender_password)
            connection.sendmail(
                from_addr=sender_email,
                to_addrs=email,
                msg=f"Subject:ISS Overhead\n\nISS is above you.",
            )
