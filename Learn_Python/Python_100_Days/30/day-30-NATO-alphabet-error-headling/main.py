import pandas
import os

full_path = os.path.realpath(__file__)
file_dir = str(os.path.dirname(full_path))


file_dir_nato_phonetic_alphabet = file_dir + r"\nato_phonetic_alphabet.csv"
data = pandas.read_csv(file_dir_nato_phonetic_alphabet)

dictionary = {row.letter: row.code for (index, row) in data.iterrows()}


def convert_name():
    global dictionary
    name = input("name plz ? ").upper()
    try:
        # name_dictionary = [dictionary[val] for val in name if val in dictionary]
        name_dictionary = [dictionary[val] for val in name]
    except KeyError as e:
        print(f"sory {e} is not a alphabet !!!")
        convert_name()
    else:
        print(name_dictionary)


convert_name()
