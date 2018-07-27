/* global expect, describe, it */
const routes = require('../routes')
const stubs = require('./stubs')


jest.mock('../../services/repository', () => () => {
    const { fake } = require('./stubs')
    return {
/*    create: jest.fn(() => fake),
      getAll: jest.fn(() => fake),
      getByID: jest.fn(() => fake),
      purge: jest.fn(() => fake),
      remove: jest.fn(() => fake),
      update: jest.fn(() => fake), */

      post: jest.fn(() => fake),
      read: jest.fn(() => fake),
      getRegistry: jest.fn(() => fake),
      saveRegistry: jest.fn(() => fake)
      
    }
})

describe('operations routes', () => {
  it('should return hello world', async () => {
    const req = stubs.createReq()
    const res = stubs.createRes()

    await routes.hello(req, res)

    expect(res.send).toHaveBeenCalledWith('Hello world!')
  })

    //get all banana coins test
    it('return all banana coins', async () => {
      const req = stubs.createReq()
      const res = stubs.createRes()
      
      await routes.post(req, res)
  
      expect(res.send).toMatchSnapshot(stubs.createJSONAPI())
    })
    


    //create banana test
    it('creates a new banana coin', async () => {
      const req = stubs.createReq()
      const res = stubs.createRes()
      
      await routes.read(req, res)
  
      expect(res.send).toMatchSnapshot(stubs.createJSONAPI())
    })


})


