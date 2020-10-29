const repository = require('./taskRepository')

const createTask = (task) => {
  return repository.saveTask(task)
}

module.exports = createTask
