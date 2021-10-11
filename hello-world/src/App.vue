<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/Survey">Survey</router-link> |
      <router-link :to="`/users/${userid}`">User</router-link> |
      <button @click="btprofile()">Profile</button>
      <button @click="btpost()">Post</button>
      <hw2/>
    </div>
    <router-view/> -->
    <hw5/>
  </div>
</template>
<script>
import hw5 from './components/Bai Tap/EX5/Home.vue'
export default ({
  name: "app",
  components:{
    hw5
  },
  data(){
    return{
      userid : 12,
    }
  },
  // methods:{
  //   btprofile(){
  //     this.$router.push({path: '/users/12/profile'})
  //   },
  //   btpost(){
  //     this.$router.push({path: '/users/12/posts'})
  //   }
  // }
  
})
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
