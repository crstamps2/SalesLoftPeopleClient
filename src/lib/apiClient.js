import axios from 'axios'
import axiosDefaults from 'axios/lib/defaults'
import {railsBaseUrl} from 'lib/config/RailsEnvironment'
import PeopleEndpoint from './endpoints/PeopleEndpoint'

const http = axios.create({
  baseURL: railsBaseUrl,
  responseType: 'json',
  // Header to tell server to convert payloads to camelCase instead of Ruby's snake_case
  headers: {'PARAMETER_CASING': 'camel'},
  transformRequest: [...axiosDefaults.transformRequest],
})

export default {
  people: new PeopleEndpoint(http),
}
