const server = require('./server')

server.listen(process.env.PORT, () => {
  console.log(`Listening at ${process.env.PORT}`)
})

