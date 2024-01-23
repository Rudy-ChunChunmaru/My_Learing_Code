names_string = input()
names = names_string.split(", ")
# The code above converts the input into an array seperating
# each name in the input by a comma and space.
# 🚨 Don't change the code above 👆
import random

random_key_int = random.randint(0, int(len(names)) - 1)
print(f"{names[random_key_int]} is going to buy the meal today!")
