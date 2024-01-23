# file not found
import os

full_path = os.path.realpath(__file__)
file_dir = str(os.path.dirname(full_path))
try:
    file = open(file_dir + r"\a_file.txt")
    a_dictionary = {"key": "value"}
    print(a_dictionary["key"])
except FileNotFoundError:
    # if try fail
    file = open(file_dir + r"\a_file.txt", "w")
    file.write("somthing")
except KeyError as error_massage:
    # if try fail
    print(f"the key {error_massage} does not exist.")
else:
    # if try suces
    content = file.read()
    print(content)
finally:
    # if try fail or succes
    file.close()
    print("file was close")
    raise KeyError("i was made this error")
# -------------------------------------------------------------------------------------
