import React from 'react'
import {mount} from 'enzyme'
import Person from '../Person'

jest.mock('lib/apiClient')

let props
let component

beforeEach(() => {
  props = {
    id: 123,
    displayName:'Cody',
    emailAddress:'test@example.com',
    title:'Some Guy'
  }
  mountComponent()
})

const mountComponent = () => {
  return component = mount(
    <Person {...props} />
  )
}

it('displays the persons displayName', () => {
  const displayName = component.find('.person-displayName').first()
  expect(displayName.text()).toEqual(props.displayName)
})

it('displays the persons emailAddress', () => {
  const emailAddress = component.find('.person-emailAddress').first()
  expect(emailAddress.text()).toEqual(props.emailAddress)
})

it('displays the persons title', () => {
  const title = component.find('.person-title').first()
  expect(title.text()).toEqual(props.title)
})