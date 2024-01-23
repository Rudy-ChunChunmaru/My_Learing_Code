import os
import random
from tkinter import *
import tkinter.messagebox
import pyperclip

full_path = os.path.realpath(__file__)
file_dir = str(os.path.dirname(full_path))


# ---------------------------- Check Input ------------------------------- #
def CheckInput():
    Is_Not_Empty = True
    if not website_input.get():
        website_input.focus()
        Is_Not_Empty = False

    if not Email_Username_input.get():
        Email_Username_input.focus()
        Is_Not_Empty = False

    if not Password_input.get():
        Password_input.focus()
        Is_Not_Empty = False

    return Is_Not_Empty


# ---------------------------- PASSWORD GENERATOR ------------------------------- #
def Generate():
    letters = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ]
    numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    symbols = ["!", "#", "$", "%", "&", "(", ")", "*", "+"]

    password_list = []
    nr_letters = 6
    nr_symbols = 1
    nr_numbers = 3

    for l in range(1, nr_letters + 1):
        password_list.append(random.choice(letters))

    for s in range(1, nr_symbols + 1):
        password_list.append(random.choice(symbols))

    for n in range(1, nr_numbers + 1):
        password_list.append(random.choice(numbers))

    random.shuffle(password_list)

    str_pass = "".join(password_list)

    Password_input.delete(0, END)
    Password_input.insert(0, f"{str(str_pass)}")
    pyperclip.copy(str_pass)


# ---------------------------- SAVE PASSWORD ------------------------------- #
def Save():
    if CheckInput():
        is_ok = tkinter.messagebox.askokcancel(
            title=website_input.get(),
            message=f"These are the details entered: \nEmail: {Email_Username_input.get()} "
            f"\nPassword: {Password_input.get()} \nIs it ok to save?",
        )
        if is_ok:
            file_dir_data = file_dir + r"\data.txt"
            with open(file_dir_data, mode="a") as data:
                data.write(
                    f"{website_input.get()} | {Email_Username_input.get()} | {Password_input.get()}\n"
                )
            website_input.delete(0, END)
            Password_input.delete(0, END)
    else:
        tkinter.messagebox.showinfo("Input Error", "please input the empty field !!!")


# ---------------------------- UI SETUP ------------------------------- #
window = Tk()
window.title("MyPass")
# window.minsize(width=500, height=300)
window.config(padx=20, pady=20)

# ------------------------------------------------------------------------- row 1
canvas = Canvas(width=200, height=200)
tomato_img = PhotoImage(file=file_dir + r"\logo.png")
canvas.create_image(100, 100, image=tomato_img)
canvas.grid(column=2, row=1)

# ------------------------------------------------------------------------- row 2
col1_label = Label(width=30)
col1_label.grid(column=1, row=2)

col3_label = Label(width=30)
col3_label.grid(column=3, row=2)

# ------------------------------------------------------------------------- row 3
website_label = Label(text="Website:", font=("Courier", 10), justify="right")
website_label.grid(sticky=E, column=1, row=3)

website_input = Entry(width=50)
website_input.grid(sticky=W, column=2, columnspan=2, row=3)

# ------------------------------------------------------------------------- row 4

Email_Username_label = Label(
    text="Email/Username:", font=("Courier", 10), justify="right"
)
Email_Username_label.grid(sticky=E, column=1, row=4)


Email_Username_input = Entry(width=50)
Email_Username_input.insert(0, "Rudy@email.com")
Email_Username_input.grid(sticky=W, column=2, columnspan=2, row=4)


# ------------------------------------------------------------------------- row 5

Password_label = Label(text="Password:", font=("Courier", 10), justify="right")
Password_label.grid(sticky=E, column=1, row=5)

Password_input = Entry(width=32)
Password_input.grid(sticky=W, column=2, row=5)

Generate_password_button = Button(text="Generate pass", width=13, command=Generate)
Generate_password_button.grid(sticky=W, column=3, row=5)

# ------------------------------------------------------------------------- row 6

Add_button = Button(text="Add", width=42, command=Save)
Add_button.grid(sticky=W, column=2, columnspan=2, row=6)


window.mainloop()
