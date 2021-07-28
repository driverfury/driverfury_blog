import { createStore } from 'vuex'

import axios from 'axios'

const HTTP_PORT = 8000

const http = axios.create({
  baseURL: 'http://localhost:' + HTTP_PORT + '/api',
  timeout: 3000
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
    async automaticLogin ({ commit, state }) {
      var token = localStorage.getItem('token')
      if (token === null) {
        state.userLoggedIn = false
        state.user = {}
        return false
      } else {
        // Check token validity
        try {
          const response = await http.post('/check-token', { token: token })
          state.userLoggedIn = true
          state.user = response.data.data
          return true
        } catch (error) {
          state.userLoggedIn = false
          state.user = {}
          return false
        }
      }
    },
    async login ({ commit, state }, { username, password }) {
      // Login with username and password
      try {
        const response = await http.post('/login', { username, password })
        localStorage.setItem('token', response.data.token)
        return true
      } catch (error) {
        return false
      }
    },
    async logout ({ commit, state }) {
      state.userLoggedIn = false
      state.user = {}
      localStorage.setItem('token', null)
    },
    async getPost ({ commit, state }, id) {
      const response = await http.get('/posts/' + id)
      state.post = response.data.data
      return response.data.data
    },
    async fetchPosts ({ commit, state }) {
      const response = await http.get('/posts')
      state.posts = response.data.data
      return response.data.data
    }
  },
  modules: {
  }
})
