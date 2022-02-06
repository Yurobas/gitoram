export default {
  namespaced: true,
  state: {},
  actions: {
    logout () {
      localStorage.removeItem('token')
      window.location.reload()
    }
  }
}
