<template>
  <Home :isActive="isActive">
    <template #contentHeader>
      <b>Khách hàng</b>
    </template>
    <template #contentMain>
      <h1>Đây là trang khách hàng</h1>
    </template>
  </Home>
</template>

<script>
import Home from "./Home";
export default {
  name: "User",
  components: {Home},
  data(){
    return{
      isActive:'5-3'
    }
  }
}
</script>

<style scoped>
</style>