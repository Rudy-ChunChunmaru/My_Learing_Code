import os
import pandas
import random
from tkinter import *

BACKGROUND_COLOR = "#B1DDC6"
full_path = os.path.realpath(__file__)
file_dir = str(os.path.dirname(full_path))
# ---------------------------- data ------------------------------- #
try:
    data = pandas.read_csv(file_dir + r"\data\words_to_learn.csv")
except FileNotFoundError:
    data = pandas.read_csv(file_dir + r"\data\french_words.csv")
finally:
    data_learn = data.to_dict(orient="records")
    if(len(data_learn) == 0):
        data = pandas.read_csv(file_dir + r"\data\french_words.csv")
        data_learn = data.to_dict(orient="records")
    

guess_card = {}


# ---------------------------- FUNC ------------------------------- #
def main():
    NextCard()

def NextCard():
    global guess_card,revealtimer
    window.after_cancel(revealtimer)
    guess_card = random.choice(data_learn)
    canvas.itemconfig(image_card, image=card_front_img)
    canvas.itemconfig(title, text="French", fill="black")
    canvas.itemconfig(word, text=f"{guess_card["French"]}", fill="black")
    revealtimer = window.after(3000, func=RevealCard)
    
def RevealCard():
    canvas.itemconfig(image_card, image=card_back_img)
    canvas.itemconfig(title, text="English", fill="white")
    canvas.itemconfig(word, text=f"{guess_card["English"]}", fill="white")

def IsKnow():
    data_learn.remove(guess_card)
    print(len(data_learn))
    data = pandas.DataFrame(data_learn)
    data.to_csv(file_dir + r"\data\words_to_learn.csv",index=False)
    NextCard()

# ---------------------------- UI SETUP ------------------------------- #
window = Tk()
window.title("Flash Card")
window.config(padx=30, pady=30, bg=BACKGROUND_COLOR)
revealtimer = window.after(3000, func=RevealCard)
# ------------------------------------------------------------------------- row 0
canvas = Canvas(width=800, height=526, highlightthickness=0,bg=BACKGROUND_COLOR)
card_front_img = PhotoImage(file=file_dir + r"\images\card_front.png")
card_back_img = PhotoImage(file=file_dir + r"\images\card_back.png")
image_card = canvas.create_image(400, 263, image=card_front_img)
title = canvas.create_text(400, 150, text="title", font=("Ariel", 40, "italic"), fill="black")
word = canvas.create_text(400, 263, text="word", font=("Ariel", 60, "bold"), fill="black")
canvas.grid(column=0, columnspan=2, row=0)

# ------------------------------------------------------------------------- row 1
cross_image = PhotoImage(file=file_dir + r"\images\wrong.png")
unknown_button = Button(image=cross_image, highlightthickness=0, command=NextCard)
unknown_button.grid(column=0, row=1)

right_image = PhotoImage(file=file_dir + r"\images\right.png")
known_button = Button(image=right_image, highlightthickness=0, command=IsKnow)
known_button.grid(column=1, row=1)

main()
window.mainloop()
