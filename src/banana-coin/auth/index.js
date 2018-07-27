const repository = require('../../services/repository')(__dirname, '../db.json')
const { promisify } = require('../../services/router')


module.exports.createToken = createToken;

createToken = () => {
    
    

}

module.exports.auth = promisify(async (req, res) => {
    const token = req.headers['x-acces-token']
    if (!token) {
      return res.status(401).send({message: 'no token provided'})
    }
    else{
     
    }
  })
  
  module.exports.auth.verb = 'get'
  module.exports.auth.path = '/auth'