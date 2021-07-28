<template>
  <div class="footer">
    driverfury's blog
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
.footer {
  width: 100%;
  background-color: #000000;
  height: 5em;
  min-height: 5em;
  line-height: 5em;
  text-align: center;
  color: #cccccc;
  font-size: 1em;
}
</style>
