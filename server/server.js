const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => res.send('ok'))

app.listen(port, () => console.log(`spartify running on ${port}`))
