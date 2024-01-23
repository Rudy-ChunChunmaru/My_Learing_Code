print("Welcome to the rollercoaster!")
height = int(input("What is your height in cm? "))

if height >= 120:
    print("you can ride the rollercoaster !!!")
    age = int(input("What is your age now? "))

    if age < 12:
        bill = 5
        print("pls pay $5.")
    elif age >= 12 and age < 18:
        bill = 7
        print("pls pay $7.")
    elif age >= 18 and age < 45:
        bill = 12
        print("pls pay $12.")
    elif age >= 45 and age <= 55:
        bill = 0
        print("no need to pay")
    else:
        bill = 12
        print("pls pay $12.")

    if not bill == 0:
        want_photo = input("Do you want a photo taken Y or N")
        if want_photo == "Y":
            bill += 3
        print(f"your need to pay ${bill}")
    else:
        print("no need to pay")
else:
    print("sory, you can't go ride !!!")
