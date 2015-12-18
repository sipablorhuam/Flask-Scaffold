from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait

driver=webdriver.Chrome('selenium-tests/chromedriver')


driver.get("http://scaffold")

menu = driver.find_element_by_link_text('Devs')

menu.click()

wait = WebDriverWait(driver, 100)
wait.until(lambda driver: driver.current_url == "http://scaffold/#/dev")

print (driver.current_url)

driver.close()