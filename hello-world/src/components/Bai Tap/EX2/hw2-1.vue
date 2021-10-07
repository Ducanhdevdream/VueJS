<template>
  <div class="hello">
    <div class="container">
      <div class="main">
        <input v-model="keyword" type="text" @keydown.enter="search()" placeholder="Tìm kiếm sản phẩm theo tên">
        <span v-if="keyword.length > 0" class="clear" @click="clear()">X</span>
        <table cellspacing="1px #dbe2ec">
          <tr class="table-head">
            <td>STT</td>
            <td>Tên sản phẩm</td>
            <td>Giá</td>
            <td>Số lượng</td>
            <td>Trạng thái</td>
            <td>Hành động</td>
          </tr>
          <tr v-if="key.length > 0 && searchList.length == 0">
            <td colspan="6">Không có sản phẩm</td>
          </tr>
          <tr v-else-if="key.length == 0 && searchList.length == 0" v-for="(product, index) in products" :key="index">
            <td>{{ ++index }}</td>
            <td class="product-name" style="color: #2a9ae7">
              <img v-if="product.image.length > 0" :src="product.image" alt="">
              <img v-else src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShGhQ7lsbnaloT8MurRglRwb4TKM9F0b_MpA&usqp=CAU" alt="">
              {{ product.name}}
            </td>
            <td>{{ product.price.toString()}} đ</td>
            <td>{{ product.quantity}}</td>
            <td v-if="product.isAvailable" style="color: #41d2b5">
              Còn hàng
            </td>
            <td v-else style="color: red">
              Hết hàng
            </td>
            <td>
              <button @click="addToCart(product.name)">Thêm vào giỏ</button>
            </td>
          </tr>
          <tr v-else-if="key.length > 0 && searchList.length > 0" v-for="(product, index) in searchList" :key="index">
            <td>{{ ++index }}</td>
            <td class="product-name" style="color: #2a9ae7">
              <img v-if="product.image.length > 0" :src="product.image" alt="">
              <img v-else src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShGhQ7lsbnaloT8MurRglRwb4TKM9F0b_MpA&usqp=CAU" alt="">
              {{ product.name}}
            </td>
            <td>{{ product.price.toString()}} đ</td>
            <td>{{ product.quantity}}</td>
            <td v-if="product.isAvailable" style="color: #41d2b5">
              Còn hàng
            </td>
            <td v-else style="color: red">
              Hết hàng
            </td>
            <td>
              <button @click="addToCart(product.name)">Thêm vào giỏ</button>
            </td>
          </tr>
        </table>
      </div>
      <div class="cart">
        <h3>Giỏ hàng</h3>
        <div class="cart-item" v-for="(product, index) in cart" :key="index">
          <img v-if="product.image.length > 0" :src="product.image" alt="">
          <img v-else src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShGhQ7lsbnaloT8MurRglRwb4TKM9F0b_MpA&usqp=CAU" alt="">
          <div class="name-price">
            <h3>{{ product.name }}</h3>
            <span>{{ product.price.toString()}} đ</span>
          </div>
          <input type="number" :value="product.qty">
          <button class="cart-delete" @click="removeFromCart(product)">Xóa</button>
        </div>
        <h3 class="sum">Tổng tiền: {{ sum.toString() }} đ</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      keyword: '',
      key: '',
      products: [
        {
          name: 'iPhone 12 Pro Max Chính Hãng',
          image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/h/photo_2020-10-13_22-12-24.jpg_1_2.png',
          price: 32990000,
          quantity: 566,
          isAvailable: true
        },
        {
          name: 'iPhone 12 Chính Hãng (VN/A)',
          image: '',
          price: 21790000,
          quantity: 123,
          isAvailable: true
        },
        {
          name: 'iPhone 11 Chính hãng',
          image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/_/0/_0004_layer_5.jpg',
          price: 16690000,
          quantity: 0,
          isAvailable: false
        },
        {
          name: 'Apple iPhone XR 64GB Chính hãng(VN/A)',
          image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-xr_5_.jpg',
          price: 12190000,
          quantity: 1023,
          isAvailable: true
        },
        {
          name: 'iPhone 11 Pro Max Chính hãng(VN/A)',
          image: '',
          price: 26500000,
          quantity: 45,
          isAvailable: true
        }
      ],
      searchList: [],
      cart: [],
      sum: 0
    }
  },
  methods: {
    search() {
      this.key = this.keyword
      this.searchList = []
      this.products.forEach(product => {
        if (product.name.toLowerCase().includes(this.keyword.toLowerCase())) {
          this.searchList.push(product)
        }
      })
    },
    clear() {
      this.searchList = []
      this.keyword = ''
      this.key = ''
    },
    addToCart(name) {
      this.products.forEach(product => {
        if (product.name === name) {
          if (product.quantity == 0) alert('Sản phẩm đã hết hàng!')
          else if (this.cart.indexOf(product) == -1) {
            this.cart.push(product)
            product.quantity -=1
            this.sum += product.price
            product['qty'] = 1
          } else {
            product.quantity -=1
            product.qty += 1
            this.sum += product.price
          }
        }
      })
    },
    changeQty() {
    },
    removeFromCart(e) {
      if (this.cart.indexOf(e) > -1) {
        this.products.forEach(product => {
          if (product.name === e.name) {
            product.quantity += this.cart[this.cart.indexOf(e)].qty
          }
        })
        this.sum -= e.price *  this.cart[this.cart.indexOf(e)].qty
        this.cart.splice(this.cart.indexOf(e), 1);
      }
    },
  }
}
</script>

<style lang="scss" scoped>
  .container {
    width: 1700px;
    height: auto;
    overflow: hidden;
    margin: auto;
    .main {
      width: 1000px;
      float: left;
      input {
        float: left;
        width: 300px;
        height: 30px;
        background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnwD9A6g8PSNT7fyMuZsywBgDSqWUPKgQWpA&usqp=CAU");
        background-repeat: no-repeat;
        background-size: 30px 30px;
        padding-left: 35px;
        margin-bottom: 30px;
      }
      .clear {
        position: absolute;
        left: 420px;
        top: 70px;
        cursor: pointer;
      }
      table {
        width: 90%;
        float: left;
        height: auto;
        border: 1px #dbe2ec solid;
        border-spacing: 0px;
        padding: 0;
        color: #000000;
        .table-head {
          background-color: #f2f6fe;
          font-weight: bold;
        }
        tr {
          td {
            border-left: 1px #dbe2ec solid;
            border-right: 1px #dbe2ec solid;
            height: 50px;
            img {
              width: 30px;
              height: 30px;
              padding: 0 15px;
            }
            button {
              background-color: #0080dd;
              color: #ffffff;
              padding: 10px;
              border: 0;
              border-radius: 10px;
              cursor: pointer;
            }
          }
          .product-name {
            text-align: left;
          }
        }
      }
    }
    .cart {
      float: left;
      width: 585px;
      height: 600px;
      text-align: left;
      padding: 20px;
      margin-top: 65px;
      border: 1px #dbe2ec solid;
      position: relative;
      .cart-item {
        float: left;
        border-bottom: 1px #dbe2ec solid;
        padding-bottom: 15px;
        margin-bottom: 15px;
        img {
          width: 50px;
          float: left;
          margin-right: 10px;
        }
        .name-price {
          float: left;
          width: 350px;
          h3 {
            margin-top: 0;
            margin-bottom: 10px;
          }
        }
        input {
          width: 80px;
          height: 40px;
          float: left;
        }
        .cart-delete {
          background-color: red;
          border: 0;
          border-radius: 5px;
          color: #ffffff;
          padding: 10px 15px;
          margin: 5px 0 5px 10px;
        }
      }
      .sum {
        position: absolute;
        bottom: 20px;
        right: 30px;
        color: red;
      }
    }
  }
</style>