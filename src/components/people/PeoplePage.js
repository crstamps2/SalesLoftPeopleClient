import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import apiClient from 'lib/apiClient'

export class PeoplePage extends Component {
  constructor() {
    super()

    this.state = {}
  }

  componentWillMount = () => {
    this.setState({
      people: apiClient.people.getAll()
    })
  }

  render = () => {
    return ( 
      <div className = 'people-page' >
        <div className = 'left-column full-width' >  
        </div> 
      </div>
    )
  }
}

export default withRouter(PeoplePage)