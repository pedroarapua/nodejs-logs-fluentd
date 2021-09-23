const os = require("os")
const pkg = require('./package.json')
const express = require('express')
const app = express()

const port = process.env.PORT || 8080
const hostname = os.hostname()

app.use(require('express-bunyan-logger')({
  name: pkg.name,
  format: ":remote-address - :user-agent[major] custom logger",
  streams: [{
      level: 'info',
      stream: process.stdout
  }]
}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://${hostname}:${port}`)
})