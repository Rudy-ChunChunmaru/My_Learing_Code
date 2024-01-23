from tkinter import *
import os

full_path = os.path.realpath(__file__)
file_dir = str(os.path.dirname(full_path))
# ---------------------------- CONSTANTS ------------------------------- #
PINK = "#e2979c"
RED = "#e7305b"
GREEN = "#9bdeac"
YELLOW = "#f7f5dd"
FONT_NAME = "Courier"
CHECK_MARK = "✔"
WORK_MIN = 25
SHORT_BREAK_MIN = 5
LONG_BREAK_MIN = 20
check_str = ""
reps = 0
reset = False


# ---------------------------- TIMER RESET ------------------------------- #
def RESTART():
    global reps
    global check_str
    global reset
    reset = True
    reps = 0
    check_str = ""
    label_title.config(text="TIMER", fg=GREEN)
    canvas.itemconfig(time_text, text="00:00")
    check_label.config(text=check_str, fg=GREEN)


# ---------------------------- TIMER MECHANISM ------------------------------- #


def START():
    global reps
    reps += 1

    global reset
    reset = False

    WORK_in_SEC = WORK_MIN * 60
    # WORK_in_SEC = 1 * 5
    SHORT_BREAK_in_SEC = SHORT_BREAK_MIN * 60
    # SHORT_BREAK_in_SEC = 1 * 3
    LONG_BREAK_in_SEC = LONG_BREAK_MIN * 60
    # LONG_BREAK_in_SEC = 1 * 6

    def add_check():
        global check_str
        check_str += CHECK_MARK
        check_label.config(text=check_str, fg=GREEN)

    if reps > 8:
        RESTART()
        return
    else:
        if reps == 8:
            add_check()
            label_title.config(text="LONG BREAK", fg=RED)
            count_down(LONG_BREAK_in_SEC)
        elif reps % 2 == 0:
            add_check()
            label_title.config(text="BREAK", fg=PINK)
            count_down(SHORT_BREAK_in_SEC)
        else:
            label_title.config(text="WORK", fg=GREEN)
            count_down(WORK_in_SEC)


# ---------------------------- COUNTDOWN MECHANISM ------------------------------- #
import math


def count_down(count):
    global reset
    if not reset:
        min = math.floor(count / 60)
        sec = count % 60

        if min < 10:
            str_min = f"0{min}"
        else:
            str_min = f"{min}"

        if sec < 10:
            str_sec = f"0{sec}"
        else:
            str_sec = f"{sec}"

        canvas.itemconfig(time_text, text=f"{str_min}:{str_sec}")
        if count > 0:
            window.after(1000, count_down, count - 1)
        else:
            START()
    else:
        return


# ---------------------------- UI SETUP ------------------------------- #
window = Tk()
window.title("pomodoro")
window.minsize(width=150, height=100)
window.config(padx=120, pady=120, bg=YELLOW)

# -------------------------------------------------------------------- row 1
label_title = Label(text="TIMER", font=(FONT_NAME, 35, "bold"), bg=YELLOW)
label_title.grid(column=2, row=1)


# -------------------------------------------------------------------- row 2
canvas = Canvas(width=200, height=224, bg=YELLOW, highlightthickness=0)
tomato_img = PhotoImage(file=file_dir + r"\tomato.png")
canvas.create_image(100, 112, image=tomato_img)
time_text = canvas.create_text(
    100, 130, text="00:00", fill="white", font=(FONT_NAME, 35, "bold")
)
canvas.grid(column=2, row=2)


# -------------------------------------------------------------------- row 3
button1 = Button(text="START", command=START, highlightthickness=0)
button1.grid(column=1, row=3)

button2 = Button(text="RESTART", command=RESTART, highlightthickness=0)
button2.grid(column=3, row=3)

# -------------------------------------------------------------------- row 4
check_label = Label(text=check_str, fg=GREEN, font=(FONT_NAME, 18, "bold"), bg=YELLOW)
check_label.grid(column=2, row=4)

window.mainloop()
