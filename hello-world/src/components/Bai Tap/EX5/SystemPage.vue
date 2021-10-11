<template>
  <Home :isActive="isActive">
    <template #contentHeader>
      <b>Cài đặt hệ thống</b>
    </template>
    <template #contentMain>
      <h1>Đây là trang cài đặt hệ thống</h1>
    </template>
  </Home>
</template>

<script>
import Home from "./Home";
export default {
  name: "SystemPage",
  components: {Home},
  data(){
    return{
      isActive:'6'
    }
  }
}
</script>

<style scoped>
</style>