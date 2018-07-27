const repository = require('../../services/repository')(__dirname, '../db.json')
const { promisify } = require('../../services/router')




const newBanana = (status, value) => {
  return {
    id: Date.now(),
    status: status,
    value: value,
    date: Date.now()
  }
}

const getBananaId = (id) => {
  return bananas.find(ban => ban.id === id)
}


/**
 * hello
 * @return [String='Hello world!']
 */
module.exports.hello = promisify(async (req, res) => {
  return res.send('Hello world!')
})

module.exports.hello.verb = 'get'
module.exports.hello.path = '/'




//get all bananas
module.exports.read = promisify(async (req, res) => {
  const bananas = await repository.getRegistry();
  

  const jsonapi = {
    "links": {
      "self": "http://example.com/articles",
      "next": "http://example.com/articles?page[offset]=2",
      "last": "http://example.com/articles?page[offset]=10"
      }
  }
  return res.send(jsonapi)
})

module.exports.read.verb = 'get'
module.exports.read.path = '/read'



//create banana
module.exports.post = promisify(async (req, res) => {
  
  const banana = await newBanana(req.query.status, req.query.value)

  const bananas = await repository.getRegistry();

  bananas.logs.push(banana)

  const result = repository.saveRegistry(banana.id, bananas)

  return res.send(result)
})
module.exports.post.verb = 'post'
module.exports.post.path = '/createbanana'




//update banana
module.exports.patch = promisify(async (req, res) => {

  const banana = getBananaId(parseInt(req.query.id))

  banana.status = req.query.status
  banana.value = req.query.value
  bananas[bananas.findIndex(ban => ban.id === bananas.id)]
 
  return res.send(banana)
})

module.exports.patch.verb = 'patch'
module.exports.patch.path = '/patch'


//delete banana
module.exports.delete = promisify(async (req, res) => {
  const banana = getBananaId(parseInt(req.query.id))
  const idx = bananas.findIndex(ban => ban.id === banana.id)
  bananas.splice(idx, 1)

  return res.send(bananas)
})

module.exports.delete.verb = 'delete'
module.exports.delete.path = '/delete'


