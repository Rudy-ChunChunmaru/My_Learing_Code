def turn_right():
    turn_left()
    turn_left()
    turn_left()


def keep_move_front():
    movechek = 0
    while not at_goal():
        if right_is_clear() and movechek == 1:
            movechek = 0
            turn_right()

        elif front_is_clear():
            while True:
                if front_is_clear():
                    movechek = 1
                    move()
                else:
                    break

        else:
            movechek = 0
            turn_left()


keep_move_front()
