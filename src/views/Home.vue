<template>
  <div class="home">
    <div class="logo-container">
        <img class="logo" alt="Logo" src="../assets/img/logo.jpg">
    </div>
    <PostPreview :key="post.id" v-for="post in posts" :post="post" />
  </div>
</template>

<script>
import PostPreview from '@/components/PostPreview.vue'

export default {
  name: 'Home',
  components: {
    PostPreview
  },
  data () {
    return {
      posts: []
    }
  },
  async created () {
    this.posts = await this.$store.dispatch('fetchPosts')
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

.logo-container {
  width: 100%;
  margin: 0;
  padding: 0;
  padding-top: 1em;
  padding-bottom: 0.5em;
  background-color: #000000;
  margin-bottom: 2em;
}

@media only screen and (max-width: 599px) {
  .logo {
    width: 50%;
  }
}

@media only screen and (min-width: 600px) {
  .logo {
    max-height: 10em;
  }
}
</style>
