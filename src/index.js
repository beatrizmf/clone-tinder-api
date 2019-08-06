const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

mongoose.connect('mongodb://beatrizf13:beatrizf13@ds119772.mlab.com:19772/tindev-api', {
  useNewUrlParser: true
})

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)
