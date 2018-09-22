import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    login: (state, user) => {
      state.user = user
    }
  },
  getters: {
    user: state => {
      return state.user
    }
  }
})

export default store
