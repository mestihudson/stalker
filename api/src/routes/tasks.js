import { Router } from 'express'

const router = Router()

router.post(`/`, (request, response) => {
  return response.status(201).json({})
})

export default router
