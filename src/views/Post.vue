<template>
  <div class="post">
    <h1>{{ post.title }}</h1>
    <div>
      <img class="post-image" :src="post.image" />
    </div>
    <div class="post-body" v-html="post.body">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  data () {
    return {
      post_id: 0,
      post: {}
    }
  },
  async created () {
    this.post_id = this.$route.params.id
    this.post = await this.$store.dispatch('getPost', this.post_id)
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
