const server = require('./src/server')

server.listen(process.env.PORT, () => {
  console.log(`Listening at ${process.env.PORT}`)
})

