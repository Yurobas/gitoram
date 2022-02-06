import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    data: {}
  },
  getters: {
    
  },
  mutations: {
    SET_USER: (state, payload) => {
      state.data = payload
    }
  },
  actions: {
    async fetchUser ({ commit }) {
      try {
        const { data } = await api.auth.getUser()
        commit('SET_USER', data)
      } catch (e) {
        console.error(e)
        throw e
      }
    }
  }
}
