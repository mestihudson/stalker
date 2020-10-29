const request = require('supertest')

const createTask = require('./createTask')

const server = require('./server')

jest.mock('./createTask')

describe(`server`, () => {
  beforeEach(jest.resetAllMocks)

  describe(`/api/tasks`, () => {
    describe(`post`, () => {
      describe(`when successful`, () => {
        it(`should return 201 http code`, async () => {
          await request(server)
            .post(`/api/tasks`)
            .send({ name: 'Name of Task' })
            .expect((response) => expect(response.status).toBe(201))
        })

        it(`should call usecase with received task`, async () => {
          const task = { name: 'Name of Task' }
          await request(server)
            .post(`/api/tasks`)
            .send(task)
            .expect((response) => {
              expect(createTask).toHaveBeenCalledWith(task)
            })
        })
      })
    })
  })
})
