const request = require('supertest')

const app = require('../src/server')

describe(`tasks`, () => {
  describe(`post`, () => {
    it(`should return a 201 http code when successful creation`, async () => {
      await request(app).post(`/api/tasks`)
        .send({ name: 'Name of Task' })
        .expect(201)
    })
  })
})
