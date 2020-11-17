<template>
  <div>
    <NavBar/>
    <section class="main-container">
      <Post v-for="post in posts" v-bind:key="post.id" v-bind:post="post"/>
    </section>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Post from '@/components/Post.vue'

export default {
  name: 'Feed',
  components: {
    NavBar,
    Post
  },
  computed: {
    posts () {
      return this.$store.state.posts
    }
  },
  mounted () {
    this.$store.dispatch('getPosts')
  }
}
</script>

<style>
body {
    background-color: #0277bd;
    color: #263238;
}
.main-container {
    width: 50%;
    min-height: 90vh;
    margin: auto auto;
    padding: 40px 15px 15px 15px;
    background-color: #ffffff;
}
</style>
