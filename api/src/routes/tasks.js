const { Router } = require('express')

const router = Router()

router.post(`/`, (request, response) => {
  return response.status(201).json({})
})

module.exports = router

