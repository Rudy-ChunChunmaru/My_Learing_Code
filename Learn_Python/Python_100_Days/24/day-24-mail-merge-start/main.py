import os

full_path = os.path.realpath(__file__)
file_dir = str(os.path.dirname(full_path))
# TODO: Create a letter using starting_letter.txt
# for each name in invited_names.txt
# Replace the [name] placeholder with the actual name.
# Save the letters in the folder "ReadyToSend".

# Hint1: This method will help you: https://www.w3schools.com/python/ref_file_readlines.asp
# Hint2: This method will also help you: https://www.w3schools.com/python/ref_string_replace.asp
# Hint3: THis method will help you: https://www.w3schools.com/python/ref_string_strip.asp
file_dir_starting_letter = file_dir + r"\input\letters\starting_letter.txt"
with open(file_dir_starting_letter, mode="r") as starting_letter:
    str_starting_letter = starting_letter.read()

file_dir_invited_names = file_dir + r"\input\names\invited_names.txt"
with open(file_dir_invited_names, mode="r") as invited_names:
    array_invited_names = invited_names.readlines()

# print(array_invited_names)
for invited_names in array_invited_names:
    name = invited_names.strip()
    str_starting_letter_with_name = str_starting_letter.replace(
        r"[name]", name
    ).replace(r"Angela", "Rudy")

    file_dir_ready_to_send = file_dir + r"\Output\ReadyToSend\letter_for_?name.txt"

    with open(
        file_dir_ready_to_send.replace(r"?name", name.replace(r" ", "_")),
        mode="w",
    ) as ready_to_send:
        ready_to_send.write(str_starting_letter_with_name)
