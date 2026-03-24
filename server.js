const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json({ message: 'Hello from my CI/CD app!' })
})

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' })
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})
