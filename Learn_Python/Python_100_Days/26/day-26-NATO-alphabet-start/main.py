# student_dict = {
#     "student": ["Angela", "James", "Lily"],
#     "score": [56, 76, 98]
# }

# #Looping through dictionaries:
# for (key, value) in student_dict.items():
#     #Access key and value
#     pass

# import pandas
# student_data_frame = pandas.DataFrame(student_dict)

# #Loop through rows of a data frame
# for (index, row) in student_data_frame.iterrows():
#     #Access index and row
#     #Access row.student or row.score
#     pass

# # Keyword Method with iterrows()
# # {new_key:new_value for (index, row) in df.iterrows()}
# ----------------------------------------------------------------------------------------------------------
# TODO 1. Create a dictionary in this format:
# {"A": "Alfa", "B": "Bravo"}

# TODO 2. Create a list of the phonetic code words from a word that the user inputs.


import pandas
import os

full_path = os.path.realpath(__file__)
file_dir = str(os.path.dirname(full_path))


file_dir_nato_phonetic_alphabet = file_dir + r"\nato_phonetic_alphabet.csv"
data = pandas.read_csv(file_dir_nato_phonetic_alphabet)

dictionary = {row.letter: row.code for (index, row) in data.iterrows()}

name = input("name plz ? ").upper()


name_dictionary = [dictionary[val] for val in name if val in dictionary]

print(name_dictionary)
