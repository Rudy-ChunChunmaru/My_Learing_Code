def turn_right():
    turn_left()
    turn_left()
    turn_left()


def turn_around():
    turn_left()
    turn_left()
    turn_left()
    turn_left()


def jump():
    turn_left()
    while True:
        if not wall_on_right():
            turn_right()
            move()
            turn_right()
            break
        else:
            move()
            continue
    while True:
        if not wall_in_front():
            move()
            continue
        else:
            turn_left()
            break


def keep_move_front():
    while True:
        if not at_goal():
            if not wall_in_front():
                move()
                continue
            else:
                jump()
                continue
        else:
            break


keep_move_front()
