<template>
  <div class="login">
    <h1>Login</h1>
    <div>
      <input class="login-form-input" type="text" v-model="username" placeholder="username" @keydown.enter="login">
    </div>
    <div>
      <input class="login-form-input" type="password" v-model="password" placeholder="password" @keydown.enter="login">
    </div>
    <div v-if="error !== ''">
      <span class="login-error-message">{{ error }}</span>
    </div>
    <div>
      <button @click="login">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async login () {
      const loggedIn = await this.$store.dispatch('login', {
        username: this.username,
        password: this.password
      })
      if (loggedIn) {
        await this.$store.dispatch('automaticLogin')
        this.$router.push({ path: '/' })
      } else {
        this.error = 'Invalid credentials'
      }
    }
  }
}
</script>

<style scoped>
.login {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.login-form-input {
  margin-bottom: 1em;
  width: 60%;
  height: 2em;
}

@media only screen and (min-width: 600px) {
  .login-form-input {
    width: 30%;
  }
}

.login-error-message {
  color: #aa2233;
}
</style>
