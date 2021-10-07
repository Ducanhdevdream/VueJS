<template>
  <div id="app">
    <crud msg=""/>
    <!-- <lession2 msg=""/> -->
  </div>
</template>

<script>
// import lession2 from './components/lession2.vue'
// import lession4 from './components/lession4.vue'
// import lession4page2 from './components/ls4-page2.vue'
// import HW1 from './components/HW1.vue'
// import HW1 from './components/HW1-3.vue'
import crud from './components/Bai Tap/EX3/3.2/crud.vue'


export default {
  name: 'App',
  components: {
    // lession2,
    // lession4,
    // lession4page2
    crud
  }
}
</script>

<style>
#app {
  margin: 0 auto;
}
</style>
