import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    posts: [],
    user: []
  },
  mutations: {
    SET_POSTS (state, posts) {
      state.posts = posts
    },
    SET_USER (state, user) {
      state.user = user
    }
  },
  actions: {
    getUser ({ commit }) {
      axios.get('https://private-anon-6481a5472a-wad20postit.apiary-mock.com/users/1').then(response => {
        console.log(response.data)
        commit('SET_USER', response.data)
      })
    },
    getPosts ({ commit }) {
      axios.get('https://private-anon-6481a5472a-wad20postit.apiary-mock.com/posts').then(response => {
        commit('SET_POSTS', response.data)
      })
    }
  },
  modules: {
  }
})
