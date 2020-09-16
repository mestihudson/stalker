import server from '@/server'

server.listen(process.env.PORT, () => {
  console.log(`Listening at ${process.env.PORT}`)
})

