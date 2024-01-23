# Which year do you want to check?
year = int(input())
# 🚨 Don't change the code above 👆

# Write your code below this line 👇
Leap = True
year_divisible_by_4 = year % 4
if year_divisible_by_4 == 0:
    year_divisible_by_100 = year % 100
    if year_divisible_by_100 == 0:
        year_divisible_by_400 = year % 400
        if year_divisible_by_400 == 0:
            Leap = True
        else:
            Leap = False
    else:
        Leap = True

else:
    Leap = False

if Leap:
    print("Leap year")
else:
    print("Not leap year")
