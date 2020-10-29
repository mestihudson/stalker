const express = require('express')

const createTask = require('./createTask')

const server = express()

server.post(`/api/tasks`, (request, response) => {
  return response.status(201).json(createTask())
})

module.exports = server

