print("The Love Calculator is calculating your score...")
name1 = input()  # What is your name?
name2 = input()  # What is their name?
# 🚨 Don't change the code above 👆
# Write your code below this line 👇

name_1_2 = name1.lower() + name2.lower()
count_true = 0
count_true += int(name_1_2.count("t"))
count_true += int(name_1_2.count("r"))
count_true += int(name_1_2.count("u"))
count_true += int(name_1_2.count("e"))

count_love = 0
count_love += int(name_1_2.count("l"))
count_love += int(name_1_2.count("o"))
count_love += int(name_1_2.count("v"))
count_love += int(name_1_2.count("e"))

true_love_count = str(count_true) + str(count_love)

if int(true_love_count) < 10 or int(true_love_count) > 90:
    str_koment = ", you go together like coke and mentos."
elif int(true_love_count) > 40 and int(true_love_count) < 50:
    str_koment = ", you are alright together."
else:
    str_koment = "."

print(f"Your score is {true_love_count}" + str_koment)
