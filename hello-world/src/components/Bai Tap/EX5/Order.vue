<template>
  <Home :isActive="isActive">
    <template #contentHeader>
      <b>Đơn hàng</b>
    </template>
    <template #contentMain>
      <h1>Đây là trang đơn hàng</h1>
    </template>
  </Home>
</template>

<script>
import Home from "./Home";
export default {
  name: "Order ",
  components: {Home},
  data(){
    return{
      isActive:'5-2'
    }
  }
}
</script>

<style scoped>
</style>