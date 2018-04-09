/* global expect, describe, it */
const repositoryService = require('./')

jest.mock('util', () => {
  const fixture = require('./fixture')
  return { promisify: jest.fn(() => () => fixture) }
})

describe('service repository', () => {
  const dirname = 'dirname'
  const dbname = 'dbname'
  const repository = repositoryService(dirname, dbname)

  it('can be build', async () => {
    expect(repository).toMatchSnapshot()
  })
})
