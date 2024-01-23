import os

full_path = os.path.realpath(__file__)
file_dir = str(os.path.dirname(full_path))

# file_dir_weather_data = file_dir + r"\weather_data.csv"
# with open(file_dir_weather_data, mode="r") as data_file:
#     data = data_file.readlines()

# print(data)
# --------------------------------------------------------------------------------------------------------
# import csv

# file_dir_weather_data = file_dir + r"\weather_data.csv"

# with open(file_dir_weather_data, mode="r") as data_file:
#     data = csv.reader(data_file)
#     temperatures = []
#     for row in data:
#         if not row[1] == "temp":
#             temperatures.append(int(row[1]))

#     print(temperatures)

# --------------------------------------------------------------------------------------------------------

import pandas

file_dir_weather_data = file_dir + r"\weather_data.csv"
data = pandas.read_csv(file_dir_weather_data)
# print(type(data))
# print(type(data["temp"]))
# print(type(data["temp"][0]))

# data_dict = data.to_dict()
# print(data_dict)

# tamp_list = data["temp"].to_list()
# print(tamp_list)

# avg = sum(tamp_list) / len(tamp_list)
# print(avg)
# print(data["temp"].mean())
# print(data["temp"].max())
# print(data["condition"])
# print(data.condition)

# print(data[data.day == "Monday"])
# print(data[data.temp == data["temp"].max()])

# monday = data[data.day == "Monday"]
# # print(monday.condition)
# monday_temp = monday.temp[0]
# monday_temp_f = monday_temp * 9 / 5 + 32
# print(monday_temp_f)

# --------------------------------------------------------------------------------------------------------

data_dict = {
    "students": ["Amy", "James", "Angela"],
    "score": [76, 56, 65],
}

data = pandas.DataFrame(data_dict)
# print(data)
file_dir_new_csv = file_dir + r"\new_csv.csv"
data.to_csv(file_dir_new_csv)
