<template>
  <div class="create-post">
    <h1>Create a new post</h1>
    <div v-if="error !== ''">
      <span class="create-post-error-message">{{ error }}</span>
    </div>
    <div>
      <input class="create-post-form-input" type="text" v-model="title" placeholder="title">
    </div>
    <div>
      <input class="create-post-form-input" type="text" v-model="description" placeholder="description">
    </div>
    <div>
      <input class="create-post-form-input" type="text" v-model="image" placeholder="image URL">
    </div>
    <div>
      <textarea placeholder="Post body, HTML is welcome ;)" class="create-post-form-input" v-model="body"></textarea>
    </div>
    <div>
      <button @click="createPost">Create Post</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      error: '',
      title: '',
      description: '',
      image: '',
      body: ''
    }
  },
  methods: {
    async createPost () {
      const postCreated = await this.$store.dispatch('createPost', {
        title: this.title,
        description: this.description,
        image: this.image,
        body: this.body
      })
      if (postCreated) {
        this.$router.push({ path: '/' })
      } else {
        this.error = 'Invalid post'
      }
    }
  }
}
</script>

<style scoped>
.create-post {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.create-post-form-input {
  margin-bottom: 1em;
  width: 60%;
  height: 2em;
}

@media only screen and (max-width: 600px) {
  .create-post-form-input {
    width: 100%;
  }
}

.create-post-error-message {
  color: #aa2233;
}

textarea {
  min-height: 18em;
}

button {
  margin-bottom: 2em;
}
</style>
