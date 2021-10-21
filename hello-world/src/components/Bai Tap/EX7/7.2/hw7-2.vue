<template>
  <div class="container">
    <div class="wrap-1">
      <ProductForm></ProductForm>
    </div>

    <div class="wrap-2">
      <ProductList></ProductList>
    </div>
  </div>
</template>

<script>
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
export default {
  name: "Exercise",
  components: {ProductList, ProductForm},
  data(){
    return{
    }
  },
  methods:{
  }
}
</script>

<style scoped lang="scss">
.container{
  display: flex;
  align-items: center;
  justify-content: center;
  .wrap-1{
    width: 30%;
    padding: 10px;
  }
  .wrap-2{
    width: 50%;
    padding: 10px;
    height: 400px;
  }
}
</style>