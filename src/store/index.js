import { createStore } from 'vuex'

/*
import axios from 'axios'
*/

export default createStore({
  state: {
    posts: []
  },
  mutations: {
  },
  actions: {
    fetchPosts ({ commit, state }) {
      /*
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(response => (state.posts = response.data))
      */
      state.posts = [
        {
          id: 1,
          title: 'How to make an ASCII game engine',
          description: 'ASCII art is a lot of fun, in this post you will learn how to make a text-based ASCII game',
          date: '2021-07-25',
          body: 'placeholder',
          image: 'https://gfascii.art/wp-content/uploads/2019/10/Mario-and-Yoshi-1024x617.png'
        },
        {
          id: 2,
          title: 'Do we really need CRT lib for small programs?',
          description: 'Using the C runtime library is not always a good idea, especially when you are developing a small application',
          date: '2021-07-26',
          body: 'placeholder',
          image: 'https://borncity.com/win/wp-content/uploads/sites/2/2017/06/MFVCR100-dll_thumb.jpg'
        }
      ]
    }
  },
  modules: {
  }
})
