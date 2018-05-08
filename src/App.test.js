import React from 'react'
import {BrowserRouter, Route, Router} from 'react-router-dom'
import {shallow, mount} from 'enzyme'
import {difference} from 'lodash'
import App from './App'

let component

const renderComponent = (fullMount = false) => {
  const renderer = fullMount ? mount : shallow
  return component = renderer(<App />)
}

beforeEach(() => {
  renderComponent()
})

it('contains a router', () => {
  expect(component.find(BrowserRouter).length).toEqual(1)
})

describe('routes', () => {
  it('includes the expected routes', () => {
    renderComponent(false)
    const expectedRoutes = [
      // '/people',
    ]

    const routes = routesByPath()
    const paths = Object.keys(routes)

    expect(difference(expectedRoutes, paths).length).toEqual(0)
  })
})

const routesByPath = () => {
  const result = {}
  const routes = [
    ...component.find(Route),
  ]
  routes.forEach(route => {
    result[route.props['path']] = route
  })
  return result
}
