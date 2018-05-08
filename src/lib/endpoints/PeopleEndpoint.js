export default class PeopleEndpoint {
  constructor(axiosClient) {
    this.http = axiosClient
  }

  /**
   * Gets a list of SalesLoft People 
   * @return {Object}        
   */
  getAll = () => this.http.get('/people.json')
}