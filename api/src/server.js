const app = require('express')()

const tasks = require('./routes/tasks')

app.use(`/api/tasks`, tasks)

module.exports = app

