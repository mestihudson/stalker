const { expect } = require('chai')

const { readFrom, writeTo } = require('./Utils')

class Backdoor {
  constructor() {
    this.directory = '/ws/.backdoor'
    this.tasksFile = 'tasks.json'
  }

  async ensureThereIsNoTask() {
    const tasks = []
    await writeTo(tasks, this.directory, this.tasksFile)
  }

  async thereIsOneTask() {
    const tasks = await readFrom(this.directory, this.tasksFile)
    expect(tasks).to.have.length(1)
  }
}

module.exports = Backdoor
