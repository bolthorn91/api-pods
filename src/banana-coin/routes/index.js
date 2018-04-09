const repository = require('../../services/repository')(__dirname, '../db.json')
const { promisify } = require('../../services/router')

/**
 * hello
 * @return [String='Hello world!']
 */
module.exports.hello = promisify(async (req, res) => {
  return res.send('Hello world!')
})

module.exports.hello.verb = 'get'
module.exports.hello.path = '/'
