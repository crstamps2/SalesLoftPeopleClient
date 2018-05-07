import axios from 'axios'
import {apiBaseUrl} from 'lib/config/RailsEnvironment'

//DONT REMOVE THESE. THEY ARE IMPLICITLY RELIED UPON!!!!!!!!!!!!!!!
import axiosDefaults from 'axios/lib/defaults'
import apiClient from '../apiClient'

jest.mock('axios', () => ({
  create: jest.fn((params) => {
    return {
      createParams: params,
      interceptors: {
        request: {
          use: jest.fn()
        },
        response: {
          use: jest.fn()
        }
      }
    }
  }),
}))

jest.mock('lib/config/RailsEnvironment', () => {
  return {
    apiBaseUrl: 'https://example.salesloft.com/'
  }
})

it('configures the axios client', () => {
  expect(axios.create.mock.calls.length).toEqual(1)
  expect(axios.create.mock.calls[0].length).toEqual(1)
  const createParams = axios.create.mock.calls[0][0]

  expect(createParams.baseURL).toEqual('https://example.salesloft.com/')
  expect(createParams.responseType).toEqual('json')
  expect(createParams.headers.PARAMETER_CASING).toEqual('camel')
})