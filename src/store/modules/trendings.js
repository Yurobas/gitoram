import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    data: null,
    loading: false,
    error: false
  },
  getters: {
    getRepoById: (state) => (id) => state.data.find(item => item.id === id)
  },
  mutations: {
    setData (state, payload) {
      state.data = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    setReadme (state, payload) {
      state.data = state.data.map(repo => {
        if (payload.id === repo.id) repo.readme = payload.content
        return repo
      })
    }
  },
  actions: {
    async fetchTrendings ({ commit }) {
      try {
        const { data } = await api.trandings.getTrendings()
        commit('setData', data.items)
      } catch (error) {
        commit('setError', 'Не удалось загрузить данные')
      }
    },
    async fetchReadme ({ commit, getters }, { id, owner, repo }) {
      const currentRepo = getters.getRepoById(id)
      if (currentRepo.readme !== undefined) return
      commit('setLoading', true)
      try {
        const { data } = await api.readme.getReadme({ owner, repo })
        commit('setReadme', { id, content: data })
      } catch (e) {
        console.error(e)
        throw e
      } finally {
        commit('setLoading', false)
      }
    }
  }
}
