import os
import pandas

full_path = os.path.realpath(__file__)
file_dir = str(os.path.dirname(full_path))

file_dir_centeral_park_squirrel_census = (
    file_dir + r"\2018_Central_Park_Squirrel_Census_-_Squirrel_Data.csv"
)

data = pandas.read_csv(file_dir_centeral_park_squirrel_census)
grey_squirrels_count = len(data[data["Primary Fur Color"] == "Gray"])
Cinnamon_squirrels_count = len(data[data["Primary Fur Color"] == "Cinnamon"])
Black_squirrels_count = len(data[data["Primary Fur Color"] == "Black"])
print(grey_squirrels_count)
print(Cinnamon_squirrels_count)
print(Black_squirrels_count)

data_dict = {
    "Fur Color": ["grey", "Cinnamon", "Black"],
    "Count": [grey_squirrels_count, Cinnamon_squirrels_count, Black_squirrels_count],
}

df = pandas.DataFrame(data_dict)
file_dir_df = file_dir + r"\df.csv"
df.to_csv(file_dir_df)
