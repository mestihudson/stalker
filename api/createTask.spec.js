const repository = require('./taskRepository')

const createTask = require('./createTask')

jest.mock('./taskRepository')

describe(`createTask`, () => {
  beforeEach(jest.resetAllMocks)

  it(`should call repository with received task`, async () => {
    const task = { name: 'Name of Task' }
    await createTask(task)
    expect(repository.saveTask).toHaveBeenCalledWith(task)
  })
})
