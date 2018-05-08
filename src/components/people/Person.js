import React, {Component} from 'react'
import {string, shape} from 'prop-types'

export default class Person extends Component {
  static propTypes = {
    person: shape({
      name: string.isRequired,
      email: string.isRequired,
      title: string.isRequired
    })
  }

  constructor(props) {
    super(props)
  }

  render = () =>{
    return (
      <div>
        <div className='person-name'>{this.props.person.name}</div>
        <div className='person-email'>{this.props.person.email}</div>
        <div className='person-title'>{this.props.person.title}</div>
      </div>
    )
  }
}