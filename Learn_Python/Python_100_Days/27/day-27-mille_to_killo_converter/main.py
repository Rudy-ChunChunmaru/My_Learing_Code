from tkinter import *

window = Tk()
window.title("Mille to Killo Converter")
window.minsize(width=300, height=150)
window.config(padx=20, pady=20)

# ---------------------------------------------------------- row 1

input = Entry(width=20)
input.focus()
input.grid(column=2, row=1)

mille_label = Label(text="milles", font=("arial", 18))
mille_label.grid(column=3, row=1)

# ---------------------------------------------------------- row 2

is_equl_to_label = Label(text="is equl to", font=("arial", 18))
is_equl_to_label.grid(column=1, row=2)


def cal():
    milles = float(input.get())
    result = round(milles * 1.60934, 3)
    result_label.config(text=f"{result}")


result_label = Label(text="0", font=("arial", 18))
result_label.grid(column=2, row=2)


Km_label = Label(text="Km", font=("arial", 18))
Km_label.grid(column=3, row=2)

# ---------------------------------------------------------- row 3

button = Button(text="Calculate", command=cal)
button.grid(column=2, row=3)

Button(window, text="Quit", command=window.destroy).grid(column=3, row=3)

window.mainloop()
