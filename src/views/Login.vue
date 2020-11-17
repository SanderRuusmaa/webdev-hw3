<template>
  <div class = "login">
    <LoginBox/>
  </div>
</template>

<script>
import LoginBox from '@/components/LoginBox.vue'
export default {
  name: 'Login',
  components: {
    LoginBox
  }
}
</script>

<style>
body {
    background-color: #0277bd;
    color: #263238;
}
</style>
