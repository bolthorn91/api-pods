const express = require('express')
const bodyParser = require('body-parser')
const jwt = require ('jsonwebtoken')
const helmet = require ('helmet')
const bananaCoin = require('./banana-coin')
const auth = require('./banana-coin/auth')
const PORT = 1337
const app = express()


//set content type for headers



/** First server middlewares */
app.use(bodyParser.json())
app.use(helmet())






/** Current Routes */
app.use(bananaCoin.path, bananaCoin.current)
app.use('/api', auth)






module.exports = function startup () {
  return app.listen(PORT, () => console.log(`
    Banana Coin 🍌

    Successful server startup
    Running at http://localhost:${PORT}
  `))
}
