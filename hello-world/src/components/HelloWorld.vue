
<template>
   <div class="container">
    <!-- <hlw2 @onLogin="handleOnLogin" /> -->
    <hlw2/>
    <hlw1></hlw1>
  </div>
</template>

<script>
import hlw1 from './hlw1'
import hlw2 from './hlw2'
export default {
  components:{
    hlw1,
    hlw2
  },
  data() {
    return{
      
    }
  },
  methods: {
    
  },
  computed: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;
  }
</style>
