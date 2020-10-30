const { Before, After, Given, When, Then } = require('cucumber')

let backdoor, application

Before(() => {
  backdoor = new Backdoor()
  application = new Application()
})

After(async () => {
  await application.close()
})

Given(`User fills required info`, async () => {
  await backdoor.ensureThereIsNoTask()
  await application.open()
  await application.fillTask()
})

When(`User saves the task`, async () => {
  await application.saveTask()
})

Then(`Task has been added`, async () => {
  await application.hasShowedSuccessfulMessage()
  await backdoor.thereIsOneTask()
})
