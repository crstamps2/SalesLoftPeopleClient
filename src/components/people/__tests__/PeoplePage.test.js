import React from 'react'
import {PeoplePage} from '../PeoplePage'
import {shallow} from 'enzyme'
import apiClient from 'lib/apiClient'

jest.mock('lib/apiClient', () => {
  return {}
})

let component
let instance
let people

const renderComponent = () => {
  component = shallow(
    <PeoplePage/>
  )
  instance = component.instance()
}

beforeEach(() => {

  people = {mockFor: 'people'}
  apiClient.people = {
    getAll: jest.fn(() => Promise.resolve({data:{data:people}})),
  }

  renderComponent()
})

describe('#loadStateFromApi', () => {
  it('loads people data from api', () => {
    const state = component.state()
    expect(state.people).toBe(people)
  })
})