<template>
    <div>
        <img class="avatar" @click="dropDownToggle" v-bind:src=user.avatar>
        <div class="drop-down-container" v-bind:style='{"display": (isActive? "block" : "none" )}'>
            <span id="user-name">{{user.firstname}} {{user.lastname}}</span>
            <span id="user-email">{{user.email}}</span>
            <span class="separator"></span>
            <span>
                <router-link to="/Browse">Browse</router-link>
            </span>
            <span class="separator"></span>
            <span>
                <router-link to="/Login">Log Out</router-link>
            </span>
        </div>
    </div>
</template>

<script>
export default {
  props: ['user'],
  name: 'Avatar',
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    dropDownToggle () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style>
.avatar{
    position: relative;
    float:right;
    bottom: 28%;
    cursor: pointer;
}
.drop-down-container {
  position: absolute;
  min-width: 150px;
  height: auto;
  background-color: #ffffff;
  padding: 10px;
  right: 0;
  top: 50px;
  text-align: center;
  display: none;
}
.drop-down-container span{
  display: block;
}
.drop-down-container span.separator{
  border-bottom: 1px solid #d7d7d7;
  margin: 10px -10px;
}

.profile {
  width: 45%;
  display: inline-block;
  border: 1px solid #dedede;
  border-radius: 5px;
  text-align: center;
  margin: 1%;
}
.profile img{
  width: 75px;
  height: 75px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top;
  margin: 5px;
}

.profile h2{
  font-size: 16px;
}
</style>
