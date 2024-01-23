import requests
from bs4 import BeautifulSoup

URL = "https://web.archive.org/web/20200518073855/https://www.empireonline.com/movies/features/best-movies-2/"

# Write your code below this line 👇

response = requests.get(URL)
yc_web_page = response.text

soup = BeautifulSoup(yc_web_page, "html.parser")



tags = soup.select(".article-title-description__text .title")

movie_titles = [
    tag.getText() for tag in tags
]

moives = movie_titles[::-1]

with open ("./45/day-45-starting_code/moive_list.txt",mode="w") as file:
    for title in moives:
        file.write(f"{title}\n")

