import { Router } from 'express'

import save from '@/usecases/save-task'

const router = Router()

router.post(`/`, (request, response) => {
  return response.status(201).json(save())
})

export default router
