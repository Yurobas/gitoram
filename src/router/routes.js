import { auth } from '../pages/auth/'
import { feeds } from '../pages/feeds/'
import { stories } from '../pages/stories/'
import { notFound } from '../pages/notFound/'

export default [
  {
    path: '/',
    component: feeds,
    name: 'main'
  },
  {
    path: '/stories',
    component: stories,
    name: 'stories'
  },
  {
    path: '/auth',
    component: auth,
    name: 'auth'
  },
  {
    path: '/:pathMatch(.*)*',
    component: notFound,
    name: 'notFound'
  }
]
