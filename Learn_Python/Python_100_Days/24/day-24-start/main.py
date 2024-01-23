# file = open("my_file.txt")
import os

# print("Path at terminal when executing this file")
# print(os.getcwd() + "\n")

# print("This file path, relative to os.getcwd()")
# print(__file__ + "\n")

# print("This file full path (following symlinks)")
# full_path = os.path.realpath(__file__)
# print(full_path + "\n")

# print("This file directory and name")
# path, filename = os.path.split(full_path)
# print(path + " --> " + filename + "\n")

# print("This file directory only")
# print(os.path.dirname(full_path))

full_path = os.path.realpath(__file__)
file_dir = str(os.path.dirname(full_path)) + r"\my_file.txt"

# file = open(file_dir)
# contents = file.read()
# print(contents)
# file.close()

# with open(file_dir) as file:
#     contents = file.read()
#     print(contents)


# with open(file_dir, mode="w") as file:
#     file.write("new text.")

# with open(file_dir, mode="a") as file:
#     file.write("new text.")

# with open(str(os.path.dirname(full_path)) + r"\my_file2.txt", mode="w") as file:
#     file.write("new text.")

file_dir = str(os.path.dirname(full_path)) + r"\..\day-24-snake-game\data.txt"
print(file_dir)
with open(file_dir, mode="r") as file:
    print(file.read())
