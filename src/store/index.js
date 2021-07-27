import { createStore } from 'vuex'

import axios from 'axios'

const http = axios.create({
  baseURL: 'http://driverfury.altervista.org/api/fake'
})

export default createStore({
  state: {
    userLoggedIn: false,
    user: {},
    posts: [],
    post: {}
  },
  mutations: {
  },
  actions: {
    async getPost ({ commit, state }, id) {
      const response = await http.get('/posts/' + id)
      state.post = response.data
      return response.data
    },
    async fetchPosts ({ commit, state }) {
      const response = await http.get('/posts')
      state.posts = response.data
      return response.data
    }
  },
  modules: {
  }
})
