import createApp from './create-app'

export default context => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp()

    if (context.user) {
      store.state.user = context.user
    }

    // 给路由推一条记录，必须主动的调用这一部分
    router.push(context.url)

    router.onReady(() => {
      // 如果我们异步请求，匹配组件
      const matchedComponents = router.getMatchedComponents()
      if (!matchedComponents.length) {
        return reject(new Error('no component matched'))
      }
      resolve(app)
      // Promise.all(matchedComponents.map(Component => {
      //   if (Component.asyncData) {
      //     return Component.asyncData({
      //       route: router.currentRoute,
      //       router,
      //       store
      //     })
      //   }
      // })).then(data => {
      //   context.meta = app.$meta()
      //   context.state = store.state
      //   context.router = router
      //   resolve(app)
      // })
    })
  })
}
