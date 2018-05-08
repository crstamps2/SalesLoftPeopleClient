import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import apiClient from 'lib/apiClient'

export class PeoplePage extends Component {
  state = {
    people: {}
  }

  componentWillMount = () => {
    apiClient.people.getAll()
      .then(response => this.setState({people : response.data.data}))
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