import axios from 'axios'

const baseURL = 'https://api.github.com'
const contentHeader = 'application/vnd.github.v3.html+json'

export const makeRequest = ({
  url, method = 'get', data = {}, headers = {}
}) => axios({
  url,
  method,
  data,
  baseURL,
  headers: {
    ...headers,
    authorization: `token ${localStorage.getItem('token')}`,
    accept: contentHeader
  }
})
