import Router from 'vue-router'

export default () => {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'main',
        component: () => import('../views/main')
      }
    ]
  })
}

