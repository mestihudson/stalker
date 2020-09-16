import express from 'express'

import tasks from '@/routes/tasks'

const app = express()

app.use(`/api/tasks`, tasks)

export default app
