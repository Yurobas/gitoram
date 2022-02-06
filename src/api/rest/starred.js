import { makeRequest } from '../requests'

export const getStarredRepos = ({ limit }) => {
  const params = new URLSearchParams()

  if (limit) {
    params.append('per_page', limit)
  }

  return makeRequest({
    url: `/user/starred?${params}`
  })
}

export const starRepo = ({ repo, owner }) => makeRequest({
  url: `/user/starred/${owner}/${repo}`,
  method: 'put',
  data: null
})

export const unStarRepo = ({ repo, owner }) => makeRequest({
  url: `/user/starred/${owner}/${repo}`,
  method: 'delete'
})

export const getIssuesForRepo = ({ repo, owner }) => makeRequest({
  url: `/repos/${owner}/${repo}/issues`
})
