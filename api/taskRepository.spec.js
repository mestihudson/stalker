const utils = require('./utils')

const repository = require('./taskRepository')

describe(`taskRepository`, () => {
  describe(`saveTask`, () => {
    const directory = '/ws/.backdoor'
    const file = 'tasks.json'

    const ensureThereIsNoTask = async () => await utils
      .writeTo([], directory, file)

    const thereIsOneTask = async () => {
      const tasks = await utils.readFrom(directory, file)
      expect(tasks).toHaveLength(1)
    }

    it(`should persist received task getting id for it`, async () => {
      await ensureThereIsNoTask()
      const task = { name: 'Name of Task to Persist' }
      const result = await repository.saveTask(task)
      expect(result).toMatchObject({ id: expect.any(Number) })
      await thereIsOneTask()
    })
  })
})
