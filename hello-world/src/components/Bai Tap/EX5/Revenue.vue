<template>
  <Home :isActive="isActive">
    <template #contentHeader>
      <b>Doanh thu</b>
    </template>
    <template #contentMain>
      <h1>Đây là trang doanh thu</h1>
    </template>
  </Home>
</template>

<script>
import Home from "./Home";
export default {
  name: "Revenue",
  components: {Home},
  data(){
    return{
      isActive:'5-4'
    }
  }
}
</script>

<style scoped>
</style>