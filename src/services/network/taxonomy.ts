import axios from '../api'

export const fetchAllTaxonomies = () => {
  return axios.get('/systems/taxonomies')
}
