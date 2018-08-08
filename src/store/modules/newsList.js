import { getSlideList } from '../../api/getSlideList'

const state = {
  upImgs: [],
  downArr: []
}

const mutations = {
  request(state, res) {
    state.upImgs = res.data.STORIES.top_stories
    state.downArr = res.data.STORIES.stories
  }
}

const actions = {
  getListNews: ({ commit }) => {
    getSlideList().then(res => {
      commit('request', res)
    })
  }
}

export default {
  state,
  actions,
  mutations
}
