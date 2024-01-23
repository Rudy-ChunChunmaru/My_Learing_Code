import smtplib
import datetime as dt
import os
import random

full_path = os.path.realpath(__file__)
file_dir = str(os.path.dirname(full_path))

email = "rudymuinfo@gmail.com"
password = "ydtngotmqkxngyet"

now = dt.datetime.now()
weekday = now.weekday()

if weekday == 2:
    with open(file_dir + r"\quotes.txt", "r") as quotes_file:
        all_quotes = quotes_file.readlines()
        qutes = random.choice(all_quotes)

    print(qutes)

with smtplib.SMTP("smtp.gmail.com") as connection:
    connection.starttls()
    connection.login(user=email, password=password)
    connection.sendmail(
        from_addr=email,
        to_addrs="rudymu1822024@gmail.com",
        msg=f"Subject:Quotes Motivation\n\n{qutes}",
    )

## -------------------------------------------------------------------

# connection = smtplib.SMTP("smtp.gmail.com")
# connection.starttls()
# connection.login(user=email, password=password)
# connection.sendmail(
#     from_addr=email,
#     to_addrs="rudymu1822024@gmail.com",
#     msg="Subject:Hello\n\nThis is the body of my email",
# )
# connection.close()

## -------------------------------------------------------------------

# with smtplib.SMTP("smtp.gmail.com") as connection:
#     connection.starttls()
#     connection.login(user=email, password=password)
#     connection.sendmail(
#         from_addr=email,
#         to_addrs="rudymu1822024@gmail.com",
#         msg="Subject:Hello\n\nThis is the body of my email",
#     )

## -------------------------------------------------------------------

# now = dt.datetime.now()
# year = now.year
# print(year)

## -------------------------------------------------------------------

# date_of_birth = dt.datetime(year=1998, month=11, day=3)
# print(date_of_birth)
