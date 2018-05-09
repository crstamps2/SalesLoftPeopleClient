import React from 'react'
import {PeoplePage} from '../PeoplePage'
import {mount} from 'enzyme'
import apiClient from 'lib/apiClient'
import Person from '../Person'

jest.mock('lib/apiClient', () => {
  return {}
})

let component
let instance
let people
let person

const renderComponent = () => {
  component = mount(
    <PeoplePage/>
  )
  instance = component.instance()
}

beforeEach(() => {

  people = [
    {
      id: 1,
      displayName: 'Bob Saget',
      emailAddress: 'bob@example.com',
      title: 'Comedian Dad'
    }, {
      id: 2,
      displayName: 'Fred Flinstone',
      emailAddress: 'fred@example.com',
      title: 'Cave Man'
    }
  ]
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