const { writeTo, current } = require('./utils')

const taskRepository = {
  async saveTask (task) {
    const directory = '/ws/.backdoor'
    const file = 'tasks.json'
    const before = await current(directory, file)
    const id = before.length + 1
    const newTask = { ...task, id }
    const after = [ ...before, newTask ]
    await writeTo(after, directory, file)
    return newTask
  }
}

module.exports = taskRepository
