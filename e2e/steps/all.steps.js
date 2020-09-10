const { Before, After, Given, When, Then } = require('cucumber')
const { By, Builder } = require('selenium-webdriver')
const { expect } = require('chai')

let driver

Before(() => {
  driver = new Builder()
    .forBrowser("chrome")
    .usingServer("http://hub:4444/wd/hub")
    .build()
})

After(async () => {
  await driver.quit()
})

Given(`User fills required info`, async () => {
  await driver.get("http://app:3000")
  const input = await driver.findElement(
    By.xpath(`//*[@data-input='Name']`)
  )
  await input.sendKeys("Task Name")
})

When(`User saves the task`, async () => {
  const trigger = await driver.findElement(
    By.xpath(`//*[@data-trigger='Save']`)
  )
  await trigger.click()
})

Then(`Task has been added`, async () => {
  const components = await driver.findElements(
    By.xpath(`//*[@data-component='Alert']`)
  )
  expect(components.length).to.equal(1)
})
