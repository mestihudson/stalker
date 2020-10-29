const request = require('supertest')

const createTask = require('./createTask')

const server = require('./server')

jest.mock('./createTask')

describe(`server`, () => {
  beforeEach(jest.resetAllMocks)

  describe(`/api/tasks`, () => {
    describe(`post`, () => {
      describe(`when successful`, () => {
        const endpoint = "/api/tasks"

        const task = { name: 'Name of Task' }

        const apiCreateTask = async ({ assertion }) => {
          await request(server)
            .post(endpoint)
            .send(task)
            .expect(assertion)
        }

        it(`should return 201 http code`, async () => {
          const assertion = (response) => expect(response.status).toBe(201)
          await apiCreateTask({ assertion })
        })

        it(`should call usecase with received task`, async () => {
          const assertion = (response) => expect(createTask)
            .toHaveBeenCalledWith(task)
          await apiCreateTask({ assertion })
        })
      })
    })
  })
})
