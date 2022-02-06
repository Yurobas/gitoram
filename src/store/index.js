import { createStore } from 'vuex'
import trendings from './modules/trendings'
import starred from './modules/starred'
import user from './modules/user'
import auth from './modules/auth'

export default createStore({
  modules: {
    trendings,
    starred,
    user,
    auth
  }
})
