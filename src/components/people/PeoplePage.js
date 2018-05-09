import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import apiClient from 'lib/apiClient'
import Person from './Person'
import './PeoplePage.css'

export class PeoplePage extends Component {
  state = {
    people: []
  }

  componentDidMount = () => {
    apiClient.people.getAll()
      .then(response => this.setState({people : response.data.data}))
  }

  renderPerson = (person, index) => {
    return (
      <Person key={index} {...person} />
    )
  }

  render = () => {
    return ( 
      <div className='people container' >
        {this.state.people.map((person, index) => {
          return this.renderPerson(person, index)
        })} 
      </div>
    )
  }
}

export default withRouter(PeoplePage)