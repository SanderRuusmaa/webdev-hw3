<template>
    <div class="post">
        <div class="post-author">
            <span class="post-author-info">
            <img v-bind:src=post.author.avatar alt="Post author">
            <small>{{ post.author.firstname }}  {{ post.author.lastname }}</small>
            </span>
            <small>{{ post.createTime }}</small>
        </div>
            <div v-if="post.media != null">
                <div class="post-image" v-if="post.media.type == 'image'">
                    <img v-bind:src=post.media.url alt="Post image">
                </div>
                <div class="post-video" v-if="post.media.type == 'video'">
                    <video width="100%" height="100%" controls>
                        <source v-bind:src=post.media.url type="video/mp4">
                    </video>
                </div>
            </div>
            <div v-if="post.text != null" class="post-title">
                <h3>{{ post.text }}</h3>
            </div>
            <div class="post-actions">
                <button  @click = "liked" type="button" name="like" class="like-button" v-bind:class='{"liked": isActive}'> <img src="../assets/like.png" alt=""> {{ post.likes }} </button>
            </div>
    </div>
</template>

<script>
export default {
  props: ['post'],
  name: 'Post',
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    liked () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style>
.post {
  width: 80%;
  margin: 15px auto;
  box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
  border-radius: 5px;
  overflow: hidden;
}

.post .post-author {
  padding: 10px;
}

.post .post-author::after {
  content: "";
  display: block;
  clear: both;
}

.post .post-author .post-author-info {
  float: left;
  position: relative;
  width: 50%;
}

.post .post-author .post-author-info img {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top;
  margin: 5px;
}

.post .post-author .post-author-info small {
  position: absolute;
  top: 13px;
  left: 40px;
}

.post .post-author .post-author-info + small {
  float: right;
  color: grey;
  padding: 10px;
}

.post .post-image img {
  width: 100%;
  min-height: 150px;
  max-height: 350px;
  object-fit: cover;
  object-position: top center;
}

.post .post-title {
  padding: 10px;
}

.post .post-title h3 {
  display: inline;
}

.post .post-title ~ .post-actions {
  padding: 10px;
}

.like-button{
    position: relative;
    float:left;
    background-color: grey;
}

.like-button.liked {
    background-color: #0077ff;
}

video{
  width: 100%;
  height:100%;
}

button img{
  position: relative;
  width: 15px;
  top: 50%;
  transform: translateY(10%);
}

</style>
