from flask import Flask, render_template
import random
import datetime
import requests

app = Flask(__name__)

@app.route("/")
def index():
    random_number = random.randint(1,10)
    currnet_year = datetime.datetime.now().year
    return render_template("index.html", num=random_number, year=currnet_year)


@app.route("/guess/<name>")
def guess(name):
    gender_url = f'https://api.genderize.io/?name={name}'
    age_url = f'https://api.agify.io/?name={name}'

    get_gender_data = requests.get(gender_url)
    gender_data = get_gender_data.json()

    get_age_data = requests.get(age_url)
    age_data = get_age_data.json()

    return render_template("guess.html",name=name, gender=gender_data['gender'], age = age_data['age'])

@app.route("/blog")
def blog():
    blog_url = "https://api.npoint.io/c790b4d5cab58020d391"
    response = requests.get(blog_url)
    all_post = response.json()
    return render_template("blog.html", posts=all_post)


@app.route("/blog/<num>")
def get_blog(num):
    blog_url = "https://api.npoint.io/c790b4d5cab58020d391"
    response = requests.get(blog_url)
    all_post = response.json()
    return render_template("blog.html", posts=all_post, num=num)

if __name__ == '__main__':
    app.run(debug=True)