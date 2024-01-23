# Write your code below this line 👇
import math


def paint_calc(height, width, cover):
    number_of_cans = (height * width) / cover
    round_up_cands = math.ceil(number_of_cans)
    print(f"You'll need {int(round_up_cands)} cans of paint.")


# Write your code above this line 👆
# Define a function called paint_calc() so the code below works.

# 🚨 Don't change the code below 👇
test_h = int(input())  # Height of wall (m)
test_w = int(input())  # Width of wall (m)
coverage = 5
paint_calc(height=test_h, width=test_w, cover=coverage)
