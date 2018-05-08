import PeopleEndpoint from '../PeopleEndpoint'

let mockResponse
let mockAxios
let endpoint

beforeEach(() => {
  mockResponse = {
    data: [
        {person: 1}
    ],
  }
  mockAxios = {
    get: jest.fn(() => Promise.resolve(mockResponse)),
    post: jest.fn(() => Promise.resolve(mockResponse)),
  }
  endpoint = new PeopleEndpoint(mockAxios)
})

describe('#get', () => {
  it('performs a GET request to the /people endpoint', () => {
    return endpoint.getAll().then(response => {
      expect(mockAxios.get.mock.calls.length).toEqual(1)
      expect(mockAxios.get.mock.calls[0][0]).toEqual(`/people.json`)
    })
  })
})