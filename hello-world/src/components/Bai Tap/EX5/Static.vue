<template>
  <Home :isActive="isActive">
    <template #contentHeader>
      <b>Báo cáo thống kê</b>
    </template>
    <template #contentMain>
      <h1>Đây là báo cáo thống kê</h1>
    </template>
  </Home>
</template>

<script>
import Home from "./Home";
export default {
  name: "Static",
  components: {Home},
  data(){
    return{
      isActive:'4'
    }
  }
}
</script>

<style scoped>
</style>