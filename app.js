const express = require('express')
const app = express()
const port = 3045

app.get('/', (req, res) => {
  res.send('Hello World!Nurul Faizah')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
