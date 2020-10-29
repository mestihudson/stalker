const { By, Builder } = require('selenium-webdriver')
const { expect } = require('chai')

class Application {
  constructor() {
    this.driver = new Builder()
      .forBrowser("chrome")
      .usingServer("http://hub:4444/wd/hub")
      .build()
  }

  async open() {
    await this.driver.get("http://19.19.19.5:3000")
  }

  async fillTask() {
    const input = await this.driver.findElement(
      By.xpath(`//*[@data-input='Name']`)
    )
    await input.sendKeys("Task name")
  }

  async saveTask() {
    const trigger = await this.driver.findElement(
      By.xpath(`//*[@data-trigger='Save']`)
    )
    await trigger.click()
  }

  async hasShowedSuccessfulMessage() {
    const components = await this.driver.findElements(
      By.xpath(`//*[@data-component='Alert']`)
    )
    expect(components.length).to.equal(1)
  }
}

module.exports = Application
