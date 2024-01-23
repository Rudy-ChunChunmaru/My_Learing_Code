import turtle as t
import random

# from turtle import Turtle, Screen

# import heroes
# from turtle import *

tim = t.Turtle()
t.colormode(255)
tim.shape("turtle")
tim.color("black")


# tom = Turtle()
# tom.shape("turtle")
# tom.color("blue")

# for n in range(4):
#     tim.forward(100)
#     tim.left(90)

# for _ in range(15):
#     tim.forward(10)
#     tim.penup()
#     tim.forward(10)
#     tim.pendown()


def random_color():
    r = random.randint(0, 255)
    g = random.randint(0, 255)
    b = random.randint(0, 255)
    random_color = (r, g, b)
    return random_color


def draw_shape(num):
    for n in range(3, num):
        angel = 360 / n
        tim.color(random_color())

        for time_move in range(0, n):
            tim.forward(100)
            tim.right(angel)


# draw_shape(10)


def draw_random_walk(stap):
    for _ in range(stap):
        angel = 90 * random.randint(0, 5)
        tim.speed(10)
        tim.pensize(5)
        tim.color(random_color())
        tim.forward(15)
        tim.right(angel)


# draw_random_walk(300)


def draw_spiograph(size_of_gap):
    tim.pensize(2)
    tim.speed(15)
    r = 100
    for angel in range(int(360 / size_of_gap)):
        tim.color(random_color())
        tim.circle(r)
        tim.setheading(tim.heading() + size_of_gap)


# draw_spiograph(5)


screen = t.Screen()
screen.exitonclick()
