# Enter your height in meters e.g., 1.55
height = float(input())
# Enter your weight in kilograms e.g., 72
weight = int(input())
# 🚨 Don't change the code above 👆

# Write your code below this line 👇
value_BMI = weight / (height**2)

if value_BMI < 18.5:
    print(f"Your BMI is {value_BMI}, you are underweight.")
elif value_BMI < 25:
    print(f"Your BMI is {value_BMI}, you have a normal weight.")
elif value_BMI < 30:
    print(f"Your BMI is {value_BMI}, you are slightly overweight.")
elif value_BMI < 35:
    print(f"Your BMI is {value_BMI}, you are obese.")
else:
    print(f"Your BMI is {value_BMI}, you are clinically obese.")
