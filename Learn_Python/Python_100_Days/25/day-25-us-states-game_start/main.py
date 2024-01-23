import os
import turtle
import pandas

full_path = os.path.realpath(__file__)
file_dir = str(os.path.dirname(full_path))

screen = turtle.Screen()
screen.title("U.S. State Game")
image = file_dir + r"\blank_states_img.gif"
screen.addshape(image)

turtle.shape(image)
# ----------------------------------------------------------
# def get_mouse_click_color(x, y):
#     print(x, y)

# turtle.onscreenclick(get_mouse_click_color)
# ----------------------------------------------------------

states = file_dir + r"\50_states.csv"
data = pandas.read_csv(states)
all_states = data.state.to_list()
guessed_states = []


def states_to_learn():
    # missing_states = []
    # for states in all_states:
    #     if not states in guessed_states:
    #         missing_states.append(states)
    missing_states = [states for states in all_states if not states in guessed_states]
    # print(missing_states)
    new_data = pandas.DataFrame(missing_states)
    states_to_learn = file_dir + r"\statesto_learn.csv"
    new_data.to_csv(states_to_learn)


while len(guessed_states) < 50:
    answer_state = screen.textinput(
        title=f"{len(guessed_states)}/50 States Correct",
        prompt="what's another state's name?r ",
    )

    if answer_state == None or answer_state.title() == "Exit":
        states_to_learn()
        screen.bye()
        break
    else:
        if answer_state.title() in all_states:
            guessed_states.append(answer_state)
            t = turtle.Turtle()
            t.hideturtle()
            t.penup()
            states_data = data[data.state == answer_state]
            t.goto(int(states_data.x), int(states_data.y))
            t.write(
                states_data.state.item(), align="center", font=("arial", 8, "normal")
            )


# turtle.mainloop()
# screen.exitonclick()
