<template>
  <div class="post">
    <h1>{{ $store.state.post.title }}</h1>
    <div>
      <img class="post-image" :src="$store.state.post.image" />
    </div>
    <div class="post-body" v-html="$store.state.post.body">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  data () {
    return {
      post_id: 0
    }
  },
  created () {
    this.$store.dispatch('getPost', 1)
    /*
    this.post_id = parseInt(this.$route.params.id)
    for (let i = 0; i < this.$store.state.posts.length; ++i) {
      console.log(this.$store.state.posts[i].title)
      const post = this.$store.state.posts[i]
      if (post.id === this.post_id) {
        this.post = post
        break
      }
    }
    console.log(this.post)
    */
    /* this.$store.state. */
  }
}
</script>

<style scoped>
.post {
  margin-left: auto;
  margin-right: auto;
  width: 70%;
}

@media only screen and (max-width: 600px) {
  .post {
    width: 90%;
  }
}

.post-image {
  max-width: 100%;
  max-height: 20em;
}

.post-body {
  margin-top: 2em;
  text-align: justify;
}
</style>
