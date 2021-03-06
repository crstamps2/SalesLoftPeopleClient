import React, {Component} from 'react'
import {string, number} from 'prop-types'
import './Person.css'

export default class Person extends Component {
  static propTypes = {
    id: number.isRequired,
    displayName: string.isRequired,
    emailAddress: string.isRequired,
    title: string
  }

  render = () =>{
    return (
      <div className='Person'>
        <div className='person-displayName'>{this.props.displayName}</div>
        <div className='person-emailAddress'>{this.props.emailAddress}</div>
        <div className='person-title'>{this.props.title}</div>
      </div>
    )
  }
}