<template>
  <Home :isActive="isActive">
    <template #contentHeader>
      <b>Tồn kho</b>
    </template>
    <template #contentMain>
      <h1>Đây là trang tồn kho</h1>
    </template>
  </Home>
</template>

<script>
import Home from "./Home";
export default {
  name: "Inventory",
  components: {Home},
  data(){
    return{
      isActive:'5-5'
    }
  }
}
</script>

<style scoped>
</style>