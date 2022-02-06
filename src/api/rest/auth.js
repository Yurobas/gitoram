import { makeRequest } from '../requests'

export const getUser = () => {
  return makeRequest({
    url: '/user'
  })
}

export const getCode = (clientId, clientSecret, code) => {
  return makeRequest({
    url: 'https://webdev-api.loftschool.com/github',
    method: 'post',
    data: {
      clientId,
      clientSecret,
      code
    }
  })
}
