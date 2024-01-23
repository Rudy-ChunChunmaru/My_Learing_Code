from tkinter import *

window = Tk()
window.title("My GUI Program")
window.minsize(width=500, height=300)
window.config(padx=20, pady=20)

# label
mylabel = Label(text="helo world !!!", font=("arial", 24, "bold"))
# mylabel.pack(side="left")
# mylabel.place(x=100, y=200)
mylabel.config(padx=10, pady=10)
mylabel.grid(column=0, row=0)

mylabel["text"] = "koni ciwa !!!"
mylabel.config(text="hoho ho !!!")


# button
def button_clikcked():
    # print("hohoho !!!")
    # mylabel.config(text="button got click")
    mylabel.config(text=input.get())


button = Button(text="Click me", command=button_clikcked)
# button.pack(side="left")
button.grid(column=1, row=1)


# button1
button1 = Button(text="new Button", command=button_clikcked)
# button.pack(side="left")
button1.grid(column=3, row=0)

# Entry

input = Entry(width=20)
# input.pack(side="left")
input.grid(column=4, row=2)


window.mainloop()
