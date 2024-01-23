def add(n1, n2):
    return n1 + n2


def sub(n1, n2):
    return n1 - n2


def mul(n1, n2):
    return n1 * n2


def div(n1, n2):
    return n1 / n2


opration = {"+": add, "-": sub, "*": mul, "/": div}

from art import logo

print(logo)

while True:
    try:
        n1 = float(input("what's first number ?"))
        n2 = float(input("what's second number ?"))
        break
    except:
        print("plz number only")

for key in opration:
    print(key)
while True:
    operation_symbol = input("pick an operation form the line above:")
    if operation_symbol in opration:
        break

cal_fuc = opration[operation_symbol]
result = cal_fuc(n1, n2)


print(f"{n1}{operation_symbol}{n2}={result}")

loopprosess = True
finalresult = result
while loopprosess:
    while True:
        ask_loop = input(
            f"continue calculasi with {finalresult}, type y to continue or n to exit"
        ).lower()
        if ask_loop == "y":
            loopprosess = True
            break
        elif ask_loop == "n":
            loopprosess = False
            print("Good Bye !!!")
            break

    if loopprosess:
        while True:
            try:
                n1 = float(finalresult)
                n2 = float(input("what's second number ?"))
                break
            except:
                print("plz number only")

        for key in opration:
            print(key)
        while True:
            operation_symbol = input("pick an operation form the line above:")
            if operation_symbol in opration:
                break

        cal_fuc = opration[operation_symbol]
        result = cal_fuc(n1, n2)

        print(f"{n1}{operation_symbol}{n2}={result}")
        finalresult = result
