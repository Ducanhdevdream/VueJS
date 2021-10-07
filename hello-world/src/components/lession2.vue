<template>
   <div class="container">
    <div v-for="(product,index) in products" :key="index">
      {{product.name}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      products: [   
        {
        name: 'iphone13',
        price: 340000,
        stock: true
        },
        {
        name: 'iphone13',
        price: 340000,
        stock: false
        },
        {
        name: 'iphone13',
        price: 340000,
        stock: true
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
    display:inline ;
    align-items: center;
    justify-content: center;
    height: 500px;

    
  }
</style>
