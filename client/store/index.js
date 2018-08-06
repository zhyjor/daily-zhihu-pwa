import Vue from 'vue'
import Vuex from 'vuex'
import newsList from './modules/newsList'
import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    newsList
  }
})
