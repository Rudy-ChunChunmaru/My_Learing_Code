from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>aaaaaaaa</p><p>Hello, World!</p>"

@app.route("/bye")
def say_bye():
    return "<p>bye</p>"

if __name__ == "__main__":
    app.run()