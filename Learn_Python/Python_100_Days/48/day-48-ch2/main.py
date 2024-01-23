from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

# Keep Chrome browser open after program finishes
chrome_options = webdriver.ChromeOptions()
chrome_options.add_experimental_option("detach", True)

# Create and configure the Chrome webdriver
driver = webdriver.Chrome(options=chrome_options)

# Navigate to Wikipedia
driver.get("https://secure-retreat-92358.herokuapp.com/")

fname = driver.find_element(By.NAME, value="fName")
fname.send_keys("rudy")

lname = driver.find_element(By.NAME, value="lName")
lname.send_keys("mu")

email = driver.find_element(By.NAME, value="email")
email.send_keys("test@email.com")

btn = driver.find_element(By.CSS_SELECTOR, value="button")
btn.click()
