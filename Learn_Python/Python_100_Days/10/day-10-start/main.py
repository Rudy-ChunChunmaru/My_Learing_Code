def format_name(f_name, l_name):
    def format_last():
        return "hello"

    format_f_name = f_name.title()
    format_l_name = l_name.title()
    # return f"{format_f_name} {format_l_name}"
    return f""" 
    {format_last()}
    Ur name is {format_f_name} {format_l_name}
    """


print(format_name("rudy", "mu"))


def my_fuction(a):
    if a < 40:
        return
        print("T")
    if a < 80:
        return "pass"
    else:
        return "great"


print(my_fuction(25))
