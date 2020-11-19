<template>
    <div class="profile-container">
        <div class="profile">
            <img v-bind:src=profile.avatar alt="avatar">
            <p class = "name">{{ profile.firstname }} {{ profile.lastname }}</p>
            <button @click="follow" class="follow-button" v-bind:id=profile.id v-bind:class='{"followed": isActive}'>{{ isActive? "Followed" : "Follow" }}</button>
        </div>
    </div>
</template>

<script>
export default {
  props: ['profile'],
  name: 'Profile',
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    follow () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style>
.profile-container{
    margin: auto;
}
.profile {
  width: 250px;
  height: 250px;
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
  padding-top:10px;
  object-fit: cover;
  object-position: top;
  margin: 5px;
}

.profile h2{
  font-size: 16px;
}

.follow-button{
  background-color: #82008f;
  margin-top: 40px;
}

.follow-button.followed{
    background-color: #ffffff;
    border: 1px solid #82008f;
    color: #82008f;
}
</style>
