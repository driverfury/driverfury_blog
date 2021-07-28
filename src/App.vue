<template>
  <div class="app-content">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <a href="https://github.com/driverfury" target="_blank">GitHub</a>
      <span v-if="$store.state.userLoggedIn">
        | <a href="" @click="logout">Logout</a>
      </span>
      <span v-else>
        | <router-link to="/login">Login</router-link>
      </span>
      <span v-if="$store.state.userLoggedIn && $store.state.user.isAdmin">
        | <router-link to="/create-post">Create New Post</router-link>
      </span>
    </div>
    <router-view/>
  </div>
  <Footer />
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer
  },
  methods: {
    async logout () {
      await this.$store.dispatch('logout')
      this.$router.push({ path: '/' })
    }
  },
  async created () {
    const loggedIn = await this.$store.dispatch('automaticLogin')
    if (!loggedIn) {
      this.$router.push({ path: '/login' })
    }

    console.log(this.$store.state.userLoggedIn)
    console.log(this.$store.state.user)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: darkgoldenrod;
}

.app-content {
  min-height: calc(100vh - 5em);
}
</style>
