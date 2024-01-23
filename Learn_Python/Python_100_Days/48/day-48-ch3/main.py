from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

# Keep Chrome browser open after program finishes
chrome_options = webdriver.ChromeOptions()
chrome_options.add_experimental_option("detach", True)

# Create and configure the Chrome webdriver
driver = webdriver.Chrome(options=chrome_options)

# Navigate to Wikipedia
driver.get("https://orteil.dashnet.org/cookieclicker/")
time.sleep(10)
btnlen = driver.find_element(By.CSS_SELECTOR, value="#langSelect-EN")
btnlen.click()
time.sleep(3)
while True:
    btn = driver.find_element(By.CSS_SELECTOR, value="#bigCookie")
    btn.click()
    time.sleep(0.1)

