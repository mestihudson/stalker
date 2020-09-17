import request from 'supertest'

import app from '@/server'
import repository from '@/repositories/task'

jest.mock('@/repositories/task', () => {
  return {
    save: jest.fn()
  }
})

describe(`tasks`, () => {
  describe(`post`, () => {
    beforeEach(jest.resetAllMocks)

    it(`should return a 201 http code when successful creation`, async () => {
			repository.save.mockImplementation(() => ({}))
      await request(app)
				.post(`/api/tasks`)
        .send({ name: 'Name of Task' })
        .expect(201)
			  .expect({})
    })
  })
})
