const express = require('express')

const createTask = require('./createTask')

const server = express()

server.use(express.json())

server.post(`/api/tasks`, async (request, response) => {
  return response.status(201).json(await createTask(request.body))
})

module.exports = server

