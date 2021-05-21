import axios from '../api'

export const fetchAllCountries = () => {
  return axios.get('/systems/countries?IncludeStates=true')
}
