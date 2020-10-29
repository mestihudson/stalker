const request = require('supertest')

const createTask = require('./createTask')

const server = require('./server')

jest.mock('./createTask')

describe(`server`, () => {
  describe(`/api/tasks`, () => {
    describe(`post`, () => {
      describe(`when successful`, () => {
        it(`should return 201 http code`, async () => {
          await request(server)
            .post(`/api/tasks`)
            .send({ name: 'Name of Task' })
            .expect(201)
        })
      })
    })
  })
})
