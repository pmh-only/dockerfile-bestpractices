const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

app.listen(8080, () => {
  console.log('Server is now on :8080')
})

process.on('SIGINT', () => {
  process.exit(0)
})
