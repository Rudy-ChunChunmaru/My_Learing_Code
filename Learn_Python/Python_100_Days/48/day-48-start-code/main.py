from selenium import webdriver
from selenium.webdriver.common.by import By

chrome_options = webdriver.ChromeOptions()
chrome_options.add_experimental_option("detach",True)

driver = webdriver.Chrome(options=chrome_options)
driver.get("https://www.python.org/")

div = driver.find_element(By.CLASS_NAME, "shrubbery")

shrubbery = {}
count = 0
for value in div.find_elements(By.TAG_NAME, "li"):
    shrubbery[count] = {  
        "time" : value.find_element(By.TAG_NAME, "time").text,
        "name" : value.find_element(By.TAG_NAME, "a").text
     }
    count += 1

print(shrubbery)

driver.quit()