const fs = require('fs')
const { expect } = require('chai')

class Backdoor {
  constructor() {
    this.directory = '/ws/.backdoor'
    this.tasksFile = 'tasks.json'
  }

  async ensureThereIsNoTask() {
    const tasks = []
    const content = JSON.stringify(tasks)
    if (!fs.existsSync(this.directory)) {
      fs.mkdirSync(this.directory, { recursive: true })
    }
    await fs
      .writeFileSync(`${this.directory}/${this.tasksFile}`, content, 'utf8')
  }

  async thereIsOneTask() {
    const content = await fs.readFileSync(`${this.directory}/${this.tasksFile}`)
    const tasks = JSON.parse(content)
    expect(tasks).to.have.length(1)
  }
}

module.exports = Backdoor
