import React from 'react'
import {shallow, mount} from 'enzyme'
import Person from '../Person'

jest.mock('lib/apiClient')

let props
let component

beforeEach(() => {
  props = {
    person: {
      name:'Cody',
      email:'test@example.com',
      title:'Some Guy'
    }
  }
  mountComponent()
})

const shallowRenderComponent = () => {
  return component = shallow(
    <Person {...props} />
  )
}

const mountComponent = () => {
  return component = mount(
    <Person {...props} />
  )
}

it('displays the persons name', () => {
  const name = component.find('.person-name').first()
  expect(name.text()).toEqual(props.person.name)
})

it('displays the persons email', () => {
  const email = component.find('.person-email').first()
  expect(email.text()).toEqual(props.person.email)
})

it('displays the persons title', () => {
  const title = component.find('.person-title').first()
  expect(title.text()).toEqual(props.person.title)
})