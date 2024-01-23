##################### Extra Hard Starting Project ######################

# 1. Update the birthdays.csv

# 2. Check if today matches a birthday in the birthdays.csv

# 3. If step 2 is true, pick a random letter from letter templates and replace the [NAME] with the person's actual name from birthdays.csv

# 4. Send the letter generated in step 3 to that person's email address.

import smtplib
import datetime as dt
import os
import random
import pandas

full_path = os.path.realpath(__file__)
file_dir = str(os.path.dirname(full_path))

sender_email = "rudymuinfo@gmail.com"
sender_password = "ydtngotmqkxngyet"

while True:
    try:
        data_birthdays = pandas.read_csv(file_dir + r"\birthdays.csv")
        break
    except:
        new_data_dic = {"name": [], "email": [], "year": [], "month": [], "day": []}
        new_data = pandas.DataFrame(new_data_dic)
        new_data.to_csv(file_dir + r"\birthdays.csv", index=False)
        continue

def InputNewBirthdays():
    global data_birthdays
    
    if data_birthdays.empty:
        print("Data is empty plz insert new data !!!")
        last_data_number = 0
        input_new = "y"
    else:
        last_data_number = data_birthdays.iloc[-1].name
        input_new = ""

    def AskInput():
        global input_new
        input_new = input("do u want add new birthdays ? y or n :").lower()

    def DataInput():
        name = input("input name plz !!! :").lower()
        email = input("input email to sand birthday wish plz !!! :").lower()
        while True:
            try:
                year = int(input("input year plz !!! :"))
                month = int(input("input month plz !!! :"))
                day = int(input("input day plz !!! :"))
                break
            except:
                print("plz input year, mount, day in int !!!")
                continue

        data_birthdays.loc[last_data_number, "name"] = name.title()
        data_birthdays.loc[last_data_number, "email"] = email.title()
        data_birthdays.loc[last_data_number, "year"] = year
        data_birthdays.loc[last_data_number, "month"] = month
        data_birthdays.loc[last_data_number, "day"] = day
        try:
            data_birthdays.to_csv(file_dir + r"\birthdays.csv", index=False)
            print("add new data birthday success !!!")
        except:
            print("add new data birthday fail !!!")
        finally:
            AskInput()

    if input_new == "y":
        DataInput()
    elif input_new == "n":
        pass
    else:
        AskInput()


def CheckBirthday():
    now = dt.datetime.now()
    print("Start Check Birthday Day !!!")
    # print(now.day)
    # print(now.month)
    # print(data_birthdays.to_dict(orient="records"))

    for data_birthdays_dic in data_birthdays.to_dict(orient="records"):
        if (
            now.day == data_birthdays_dic["day"]
            and now.month == data_birthdays_dic["month"]
        ):  
            nama_user = data_birthdays_dic["name"]
            print(f"| Today is {nama_user} birthday day !!! Sending Email !!!")
            SendEmail(data_birthdays_dic)

    print("Done Check Birthday Day !!!")


def SendEmail(data_birthdays_dic):
    letter = [r"\letter_templates\letter_1.txt",r"\letter_templates\letter_2.txt",r"\letter_templates\letter_3.txt"]

    with open(file_dir + random.choice(letter) , mode="r") as letter_msg:
        str_msg = f'''{letter_msg.read().replace("[NAME]",data_birthdays_dic["name"])}'''

    try:
        with smtplib.SMTP("smtp.gmail.com") as connection:
            connection.starttls()
            connection.login(user=sender_email, password=sender_password)
            connection.sendmail(
                from_addr=sender_email,
                to_addrs=data_birthdays_dic["email"],
                msg=f"Subject:Happy Birthday\n\n{str_msg}",
            )
        print(f"| success sanding to email {data_birthdays_dic["email"]} !!!")
    except:
        print(f"| fail sanding to email {data_birthdays_dic["email"]} !!!")


# InputNewBirthdays()
CheckBirthday()
