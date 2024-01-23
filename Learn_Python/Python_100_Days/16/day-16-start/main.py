# from turtle import Turtle, Screen

# timy = Turtle()
# print(timy)
# timy.shape("turtle")
# timy.color("Blue")

# timy.forward(100)


# my_screen = Screen()
# print(my_screen.canvheight)
# my_screen.exitonclick()


from prettytable import PrettyTable

table = PrettyTable()

table.add_column("Pokemon Name", ["pikacu", "charmamm"])
table.add_column("Type", ["electic", "water"])

table.align = "l"

print(table)
