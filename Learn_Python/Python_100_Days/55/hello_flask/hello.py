from flask import Flask
from markupsafe import escape
import random

random_number = random.randint(0, 9)
print(random_number)

def make_bold(function):
    def wrapper(*args,**kwargs):
        function()
    return wrapper


app = Flask(__name__)

@app.route("/")
def hello_world():
    return '<h1>hello</h1>'

@app.route("/guess")
def guess():
    return '<h1>Guess a number between 0 and 9</h1>'\
            '<img src="https://media.giphy.com/media/3o7aCSPqXE5C6T8tBC/giphy.gif" alt="1-7">'


@app.route("/guess/<int:number>")
def guess_number(number):
    input = 'error !!!'
    if(number == random_number):
        input= '<h1 style="color:blue">You Win !!!</h1>'\
            '<img src="https://media.giphy.com/media/4T7e4DmcrP9du/giphy.gif" alt="win">'
    elif(number > random_number):
        input= '<h1 style="color:red">too high !!</h1>'\
            '<img src="https://media.giphy.com/media/3o6ZtaO9BZHcOjmErm/giphy.gif" alt="too high">'
    elif(number < random_number):
        input= '<h1 style="color:red">too low !!</h1>'\
            '<img src="https://media.giphy.com/media/jD4DwBtqPXRXa/giphy.gif" alt="too low">'
    

    return input

@make_bold
@app.route("/bye")
def say_bye():
    return "byeee"

@app.route("/<name>")
def greet1(name):
    return f"<p>heloo there {escape(name)}</p>"


@app.route("/<name>/<int:number>")
def greet2(name, number):
    return f'<p>heloo there {escape(name)} , you are {escape(number)} years old</p>'

if __name__ == "__main__":
    app.run(debug=True)