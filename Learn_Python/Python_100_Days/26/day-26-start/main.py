# number = [1, 2, 3]
# new_number = [n + 1 for n in number]

# print(new_number)

# name = "Rudy"
# leter_list = [letter for letter in name]
# print(leter_list)

# range_list = [n * 2 for n in range(1, 5)]
# print(range_list)

names = ["Alex", "Beta", "Carloine", "dave", "elenor", "freddie"]
# short_name = [name for name in names if len(name) < 5]
# long_name = [name.upper() for name in names if len(name) > 5]
# print(long_name)
# -------------------------------------------------------------------------------
# import random

# students_scores = {student: random.randint(1, 100) for student in names}

# passed_students = {key: val for (key, val) in students_scores.items() if val >= 60}
# print(passed_students)
# -------------------------------------------------------------------------------
import pandas

students_dict = {
    "student": ["rudy", "david", "mu"],
    "score": [55, 65, 43],
}
students_data_frame = pandas.DataFrame(students_dict)
print(students_data_frame)

for index, row in students_data_frame.iterrows():
    if row.student == "rudy":
        print(row["score"])
