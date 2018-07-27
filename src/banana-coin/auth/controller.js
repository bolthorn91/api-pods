const repository = require ('./../services/repository')(__dirname, './db.json')
const hsa = require('js-sha256')
const jwt = require('jsonwebtoken');

const users = [{username: 'paquito', password:'8234u8298243j98as89fhia09'}]

const setToken = function {
    var token = jwt.sign({ users.username }, 'secret', {expiresIn: 86400});
  }

