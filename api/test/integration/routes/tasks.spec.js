import request from 'supertest'

import app from '@/server'

describe(`tasks`, () => {
  describe(`post`, () => {
    it(`should return a 201 http code when successful creation`, async () => {
      await request(app).post(`/api/tasks`)
        .send({ name: 'Name of Task' })
        .expect(201)
    })
  })
})
