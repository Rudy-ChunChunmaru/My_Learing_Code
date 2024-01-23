alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]


from art_ceasar_chipher import logo

print(logo)


def start():
    while True:
        try:
            direction = input("Type 'encode' to encrypt, type 'decode' to decrypt:\n")
            text = input("Type your message:\n").lower()
            shift = int(input("Type the shift number:\n"))
            break
        except:
            print("shift number need to be number xie2")

    if direction.lower() == "encode" or direction.lower() == "decode":
        ceasar(start_text=text, shift_amount=shift, cipher_direction=direction.lower())
    else:
        print("Invaild Input")
        start()


def ceasar(start_text, shift_amount, cipher_direction):
    cipher_text = ""
    for latter in start_text:
        if latter in alphabet:
            position = alphabet.index(latter)

            model_shift = int(shift_amount) % len(alphabet)

            if cipher_direction == "encode":
                new_position = int(position) + int(model_shift)

            elif cipher_direction == "decode":
                new_position = int(position) - int(model_shift)

            new_model_shift = int(new_position) % len(alphabet)
            new_latter = alphabet[new_model_shift]
            cipher_text += new_latter
        else:
            cipher_text += latter

    print(f"The {cipher_direction} text is {cipher_text}")


Begin = 0
while True:
    if Begin == 0:
        Begin = 1
        start()
    else:
        again_decode_encode = True
        while True:
            again = input("do encode and decode again ? y or n \n")
            if again.lower() == "y":
                again_decode_encode = True
                break
            elif again.lower() == "n":
                again_decode_encode = False
                break
            else:
                print("plz type y or n")
                continue

        if again_decode_encode:
            start()
            continue
        else:
            print("Good Bye !!!")
            break
