<template>
  <div>
      <NavBar/>
    <section class="main-container">
      <Profile v-for="profile in profiles" v-bind:key="profile.id" v-bind:profile="profile"/>
    </section>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Profile from '@/components/Profile.vue'

export default {
  name: 'Browse',
  components: {
    NavBar,
    Profile
  },
  computed: {
    profiles () {
      return this.$store.state.profiles
    }
  },
  mounted () {
    this.$store.dispatch('getProfiles')
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
    display: flex;
    flex-wrap: wrap;
}
</style>
