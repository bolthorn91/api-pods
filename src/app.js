const express = require('express')
const bodyParser = require('body-parser')

const bananaCoin = require('./banana-coin')

const PORT = 1337
const app = express()

/** First server middlewares */
app.use(bodyParser.json())

/** Current Routes */
app.use(bananaCoin.path, bananaCoin.current)

module.exports = function startup () {
  return app.listen(PORT, () => console.log(`
    Banana Coin 🍌

    Successful server startup
    Running at http://localhost:${PORT}
  `))
}
