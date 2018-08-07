import Router from 'vue-router'
const main = () => import('../views/main')

export default () => {
  return new Router({
    routes: [
      {
        path: '/',
        name: 'main',
        component: main
      }
    ],
    mode: 'history',
    // base: '/base/',
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    }
  })
}

