import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    posts: [],
    user: [],
    profiles: []
  },
  mutations: {
    SET_POSTS (state, posts) {
      state.posts = posts
    },
    SET_USER (state, user) {
      state.user = user
    },
    SET_PROFILES (state, profiles) {
      state.profiles = profiles
    }
  },
  actions: {
    getUser ({ commit }) {
      axios.get('https://private-anon-6481a5472a-wad20postit.apiary-mock.com/users/1').then(response => {
        commit('SET_USER', response.data)
      })
    },
    getPosts ({ commit }) {
      axios.get('https://private-anon-6481a5472a-wad20postit.apiary-mock.com/posts').then(response => {
        commit('SET_POSTS', response.data)
      })
    },
    getProfiles ({ commit }) {
      axios.get('https://private-anon-951bb9da32-wad20postit.apiary-mock.com/profiles').then(response => {
        commit('SET_PROFILES', response.data)
      })
    }
  },
  modules: {
  }
})
