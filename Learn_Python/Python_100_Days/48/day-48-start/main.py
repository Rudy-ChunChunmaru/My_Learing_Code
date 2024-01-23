from selenium import webdriver
from selenium.webdriver.common.by import By

chrome_options = webdriver.ChromeOptions()
chrome_options.add_experimental_option("detach",True)

driver = webdriver.Chrome(options=chrome_options)
driver.get("https://www.tokopedia.com/nci-official/granite-merah-putih-60x60-cm-mpb6000-middle-black?src=topads")

price = driver.find_element(By.CLASS_NAME, value="price")

# print(f"harga barang {price.text}")

# search_bar = driver.find_element(By.NAME, value="page-type")
# print(search_bar.get_attribute("content"))
# button = driver.find_element(By.ID, value="pdpBtnNormalPrimary")
# print(button.get_attribute("content"))
# document_link = driver.find_element(By.CSS_SELECTOR, value=".css-zaoyri .css-mbgq8e-unf-heading")
# print(document_link.text)

# bug_link = driver.find_element(By.XPATH,value='/html/body/div[1]/div/div[2]/div[1]/nav/ol/li[4]/a')
# print(bug_link.text)

driver.find_elements()


# driver.close()
driver.quit()