# import colorgram
# colors = colorgram.extract(
#     "d:/[6] FILE_RUDY/02_100-days-of-code_Python_Pro/18/day-18-hist-painting/image.jpg",
#     30,
# )
# colors_rbg = []
# for c in colors:
#     r = c.rgb.r
#     g = c.rgb.g
#     b = c.rgb.b
#     newcolor = (r, g, b)
#     colors_rbg.append(newcolor)
# print(colors_rbg)

result = [
    (1, 13, 31),
    (52, 25, 17),
    (219, 127, 106),
    (9, 105, 160),
    (242, 214, 69),
    (150, 84, 39),
    (215, 87, 64),
    (164, 162, 32),
    (158, 6, 24),
    (157, 62, 102),
    (11, 63, 32),
    (97, 6, 19),
    (207, 74, 104),
    (10, 97, 58),
    (0, 63, 145),
    (173, 135, 162),
    (7, 172, 216),
    (158, 34, 24),
    (3, 213, 207),
    (8, 140, 85),
    (145, 227, 216),
    (122, 193, 148),
    (102, 220, 229),
    (221, 178, 216),
    (253, 197, 0),
    (80, 135, 179),
]

import turtle as tur
import random

tur.colormode(255)
tim = tur.Turtle()

tim.penup()
tim.backward(300)
tim.setheading(270)
tim.forward(200)
tim.setheading(0)


def darw_painting():
    for x in range(12):
        for y in range(15):
            tim.dot(20, random.choice(result))
            tim.forward(40)

        tim.dot(20, random.choice(result))
        tim.setheading(90)
        tim.forward(40)
        tim.setheading(180)
        tim.forward(40 * 15)
        tim.setheading(0)


darw_painting()

screen = tur.Screen()
screen.exitonclick()
