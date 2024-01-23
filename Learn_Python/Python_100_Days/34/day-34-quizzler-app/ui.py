import os
from tkinter import *
from quiz_brain import QuizBrain

full_path = os.path.realpath(__file__)
file_dir = str(os.path.dirname(full_path))
THEME_COLOR = "#375362"


class QuizzInterface:
    def __init__(self, quiz_brain: QuizBrain):
        self.quiz = quiz_brain
        self.window = Tk()
        self.window.title("Quizzler")
        self.window.config(padx=20, pady=20, bg=THEME_COLOR)
        # _______________________________________________________________ row 0
        self.score_label = Label(
            text="Your current score is: 0/10", fg="white", background=THEME_COLOR
        )
        self.score_label.grid(column=1, row=0)

        # _______________________________________________________________ row 1
        self.canvas = Canvas(width=300, height=250, background="white")
        self.question_text = self.canvas.create_text(
            150,
            125,
            width=280,
            text="Question text",
            fill=THEME_COLOR,
            font=("arial", 18, "italic"),
        )
        self.canvas.grid(column=0, columnspan=2, row=1, pady=50)

        # _______________________________________________________________ row 2

        file_photo_ture = PhotoImage(file=file_dir + r"/images/true.png")
        self.true_button = Button(
            image=file_photo_ture, highlightthickness=0, command=self.true_button_func
        )
        self.true_button.grid(column=0, row=2)

        file_photo_false = PhotoImage(file=file_dir + r"/images/false.png")
        self.false_button = Button(
            image=file_photo_false, highlightthickness=0, command=self.false_button_func
        )
        self.false_button.grid(column=1, row=2)
        # ___________________________________________________________________________________________
        self.get_next_question()
        self.window.mainloop()

    def get_next_question(self):
        q_text = self.quiz.next_question()
        self.canvas.itemconfig(self.question_text, text=q_text)

    def true_button_func(self):
        check_result = self.quiz.check_answer("True")
        self.give_feedback(check_result)

    def false_button_func(self):
        check_result = self.quiz.check_answer("False")
        self.give_feedback(check_result)

    def give_feedback(self, score_result):
        if score_result["result"]:
            self.canvas.config(bg="green")
        else:
            self.canvas.config(bg="red")
        self.window.after(1000, self.update_score, score_result)

    def update_score(self, score_result):
        self.canvas.config(bg="white")
        self.score_label.config(text=score_result["score"])
        if self.quiz.still_has_questions():
            self.get_next_question()
        else:
            self.canvas.itemconfig(
                self.question_text, text=f"You've completed the quiz\n{score_result["score"]}"
            )
            self.true_button["state"] = "disabled"
            self.false_button["state"] = "disabled"
