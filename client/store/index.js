import Vuex from 'vuex'
import newsList from './modules/newsList'
import * as getters from './getters'

const isDev = process.env.NODE_ENV === 'development'

export default () => {
  const store = new Vuex.Store({
    strict: isDev,
    getters,
    modules: {
      newsList
    }
  })
  return store
}

