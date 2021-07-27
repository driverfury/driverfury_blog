<template>
  <div class="post-preview">
    <div>
      <img class="post-image" :src="post.image" />
    </div>
    <router-link :to="'/posts/' + post.id" class="post-title">
      <h1>{{ post.title }}</h1>
    </router-link>
    <h3>{{ post.description }}</h3>
    <span class="post-date">Date: {{ post.date }}</span>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'PostPreview',
  props: {
    post: Object
  }
}
</script>

<style scoped>
.post-preview {
  margin-left: auto;
  margin-right: auto;
  width: 70%;
}
.post-image {
  max-width: 100%;
  max-height: 20em;
}
.post-title {
  color: #666666;
}
.post-date {
  color: #888888;
}

hr {
  margin-top: 2em;
  margin-bottom: 2em;
}
</style>
