# Write your code below this line 👇
def prime_checker(number):
    prime = True
    for pembagi in range(2, number):
        hasil_pembagi = number % pembagi
        if hasil_pembagi == 0:
            prime = False
            break
    if prime:
        print("It's a prime number.")
    else:
        print("It's not a prime number.")


# Write your code above this line 👆

# Do NOT change any of the code below👇
n = int(input())  # Check this number
prime_checker(number=n)
