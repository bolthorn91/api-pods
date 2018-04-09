const { createRouter } = require('../services/router')

module.exports.path = '/banana-coin'
module.exports.current = createRouter(require('./routes'))
