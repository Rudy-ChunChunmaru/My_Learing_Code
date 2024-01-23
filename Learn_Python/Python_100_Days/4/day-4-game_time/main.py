# Write your code below this line 👇
import ascii_grafik
import random

print("PLAYER")
player_input = int(input("1:scissors, 2:paper, 3:rock"))
if player_input == 1:
    print(ascii_grafik.scissors)
elif player_input == 2:
    print(ascii_grafik.paper)
elif player_input == 3:
    print(ascii_grafik.rock)

print("COM")
random_int = random.randint(1, 3)
if random_int == 1:
    print(ascii_grafik.scissors)
elif random_int == 2:
    print(ascii_grafik.paper)
elif random_int == 3:
    print(ascii_grafik.rock)

if not player_input == random_int:
    if player_input == 1 and random_int == 3:
        print("YOU LOSE")
    elif player_input == 2 and random_int == 1:
        print("YOU LOSE")
    elif player_input == 3 and random_int == 2:
        print("YOU LOSE")
    else:
        print("YOU WIN")
else:
    print("draw !!!")
