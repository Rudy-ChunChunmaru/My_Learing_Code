import random
from art import logo


def clue(number, guess_number):
    if guess_number > number:
        return "high"
    elif guess_number < number:
        return "low"


def play_game():
    print(logo)
    game_mode = input(
        "u want play it hard way or easy way ? H : hard or E : easy"
    ).lower()

    if game_mode == "h":
        print("lest play hard way !!!")
        live_point = 5
    elif game_mode == "e":
        print("lest play easy way !!!")
        live_point = 10
    else:
        print("lest play verry hard hard way !!! hahaha idiot")
        live_point = 3

    print(f"You have {live_point} lives to guess the number right !!!")
    print("You have to guess the numbers from 1 to 100")

    number = random.randint(1, 100)
    win_parameter = False

    while not win_parameter:
        while True:
            try:
                guess_number = int(input("enter your guessed number \n"))
                break
            except:
                print("it's not a number idiots I'll take your life.")
                live_point -= 1
                print(f"You have {live_point} lives to guess the number right !!!")
                if live_point > 0:
                    continue
                else:
                    break

        if live_point > 0:
            if number == guess_number:
                win_parameter = True
                print(f"you win !!!")
            else:
                live_point -= 1
                if live_point > 0:
                    print(f"You have {live_point} lives to guess the number right !!!")
                    print(f"ur number to {clue(number,guess_number)}")
                else:
                    print(f"you lose !!!")


while True:
    if input("Do u want play guess number ? y or n ").lower() == "y":
        play_game()
    else:
        print("Good Bye !!!")
        break
