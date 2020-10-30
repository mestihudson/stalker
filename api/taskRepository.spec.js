const Backdoor = require('/ws/e2e/support/Backdoor')

const repository = require('./taskRepository')

describe(`taskRepository`, () => {
  describe(`saveTask`, () => {
    it(`should persist received task getting id for it`, async () => {
      const backdoor = new Backdoor()
      await backdoor.ensureThereIsNoTask()
      const task = { name: 'Name of Task to Persist' }
      const result = await repository.saveTask(task)
      expect(result).toMatchObject({ id: expect.any(Number) })
      await backdoor.thereIsOneTask()
    })
  })
})
