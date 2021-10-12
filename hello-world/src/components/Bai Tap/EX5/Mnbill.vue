<template>
  <Home :isActive="isActive">
    <template #contentHeader>
      <b>Quản lý hóa đơn</b>
    </template>
    <template #contentMain>
      <h1>Đây là trang quản lý hóa đơn</h1>
    </template>
  </Home>
</template>

<script>
import Home from "./Home";
export default {
  name: "Mnbill",
  components: {Home},
  data(){
    return{
      isActive:'3'
    }
  }
}
</script>

<style scoped>
</style>