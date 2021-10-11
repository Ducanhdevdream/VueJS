<template>
  <Home :isActive="isActive">
    <template #contentHeader>
      <b>Sản phẩm</b>
    </template>
    <template #contentMain>
      <h1>Đây là trang sản phẩm</h1>
    </template>
  </Home>
</template>

<script>
import Home from "./Home";
export default {
  name: "Product",
  components: {Home},
  data(){
    return{
      isActive:'5-1'
    }
  }
}
</script>

<style scoped>
</style>