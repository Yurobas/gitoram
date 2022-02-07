import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    data: {}
  },
  getters: {
    getRepoById: (state) => (id) => state.data.find(item => item.id === id)
  },
  mutations: {
    SET_REPOS: (state, payload) => {
      state.data = payload.map(item => {
        item.issues = {
          loading: false,
          data: []
        }
        return item
      })
    },
    SET_ISSUES: (state, payload) => {
      state.data = state.data.map(item => {
        if (payload.id === item.id) {
          item.issues = {
            loading: false,
            data: payload
          }
        }
        return item
      })
    }
  },
  actions: {
    async fetchStarred ({ commit }) {
      try {
        const { data } = await api.starred.getStarredRepos(10)
        commit('SET_REPOS', data)
      } catch (e) {
        console.error(e)
        throw e
      }
    },
    async fetchIssues ({ commit, getters }, { id, owner, repo }) {
      const currentRepo = getters.getRepoById(id)
      if (currentRepo.issues.data.content?.length) return

      currentRepo.issues.loading = true

      try {
        const { data } = await api.starred.getIssuesForRepo({ owner, repo })
        commit('SET_ISSUES', { id, content: data })
      } catch (e) {
        console.error(e)
        throw e
      } finally {
        currentRepo.issues.loading = false
      }
    },
    async unStarRepo ({ commit, getters }, id) {
      const { name: repo, owner } = getters.getRepoById(id)

      try {
        await api.starred.unStarRepo({ owner: owner.login, repo })
        const { data } = await api.starred.getStarredRepos(10)
        commit('SET_REPOS', data)
      } catch (e) {
        console.error(e)
        throw e
      }
    }
  }
}
