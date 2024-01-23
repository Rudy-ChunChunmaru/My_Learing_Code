def add(*arg):
    result = 0
    for n in arg:
        if isinstance(n, float) or isinstance(n, int):
            result += n
    return result


print(add(1, 2, 3, 4, 5, 6.45, "d"))


def calculate(n, **kwargs):
    n += kwargs["add"]
    n *= kwargs["multiply"]
    print(n)


calculate(3, add=3, multiply=5)


class Car:
    def __init__(self, **kw):
        self.make = kw.get("make")
        self.model = kw.get("model")


# my_car = Car(make="nissan", model="Gt-r")
my_car = Car(make="nissan")
print(my_car.model)
