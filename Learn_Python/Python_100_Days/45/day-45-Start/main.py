from bs4 import BeautifulSoup
import lxml
import requests

response = requests.get("https://news.ycombinator.com/news")
yc_web_page = response.text

soup = BeautifulSoup(yc_web_page, "html.parser")
print(soup.title)

tag1 = soup.select(".titleline a")
tag2 = soup.select(".score")
# print(tag1)

texts = []
links = []
scores = []

for tag in tag1 :
    text = tag.getText()
    texts.append(text)
    url = tag.get("href")
    links.append(url)

for tag in tag2 :
    score = tag.getText().split()[0]
    scores.append(score)

top_score = max(scores)

top_index = scores.index(top_score)

top_text = texts[top_index]
top_link = links[top_index]

print(top_text)
print(top_link)
print(top_score)




           
     







# import lxml


# with open("./index.html") as file:
#     contente = file.read()


# soup = BeautifulSoup(contente, "html.parser")

# # print(soup.title)

# # print(soup.prettify())

# all_anchor_tags = soup.find_all(name="a")

# # print(all_anchor_tags)

# # for tag in all_anchor_tags:
#     # print(tag.getText())
#     # print(tag.get("href"))

# heading = soup.find(name="h1", id="h1")
# print(heading)

# section_heading = soup.find(id="asd3", class_="asd")
# print(section_heading)

# url = soup.select_one(selector="body a")
# print(url)

# test = soup.select_one("#h1")
# print(test)
