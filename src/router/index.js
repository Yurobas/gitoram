import { createRouter, createWebHashHistory } from 'vue-router'
import * as api from '../api'
import routes from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, form, next) => {
  const authRoute = to.name === 'auth'

  try {
    await api.auth.getUser()
    next(authRoute ? { name: 'main' } : null)
  } catch (e) {
    if (e.response.status === 401) {
      next(authRoute ? null : { name: 'auth' })
    }
  }
})

export default router
