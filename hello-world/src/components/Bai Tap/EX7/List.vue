<template>
  <div class="container">
    <div class="productList">
      <table>
        <tr>
          <th>STT</th>
          <th>Sản phẩm</th>
          <th>Giá</th>
          <th>Số lượng</th>
          <th>Trạng thái</th>
          <th>Hành động</th>
        </tr>
        <tr v-if="products.length === 0">
          <td colspan="6" class="textCenter">Không có dữ liệu</td>
        </tr>
        <tr v-for="(product, index) in products" :key="index">
          <td class="textCenter">{{index + 1}}</td>
          <td>
            <div class="productNameWrap">
              <img v-if="product.image" :src="product.image" alt="">
              <img v-else src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShGhQ7lsbnaloT8MurRglRwb4TKM9F0b_MpA&usqp=CAU" alt="">
              <div class="textMain">{{product.name}}</div>
            </div>
          </td>
          <td>{{product.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}} đ</td>
          <td class="textCenter">{{product.quantity}}</td>
          <td class="textCenter">
            <span v-if="product.quantity > 0" class="textGreen">Còn hàng</span>
            <span v-else class="textRed">Hết hàng</span>
          </td>
          <td>
            <button class="addToCartButton" @click="addToCart(product)">Thêm vào giỏ</button>
          </td>
        </tr>
      </table>
    </div>
    <Cart/>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import Cart from "@/components/Homeworks/Session7/Cart";
export default {
  name: 'Exercise',
  components: {
    Cart
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
        'products', 'cartProducts'
    ])
  },
  methods: {
    addToCart(product) {
      this.add(product)
    },
    ...mapMutations([
        'add'
    ])
  }
}
</script>

<style lang="scss" scoped>
$colorStroke: #d8e0ea;
$colorMain: #0080dd;
$colorDefault: #253036;
$colorGreen: #39cd74;
$colorRed: #f54b5e;
$colorTableHeader: #f2f6fe;
$colorWhite: #fff;
.container {
  height: 100vh;
  padding: 24px;
  color: $colorDefault;
  display: flex;
  align-items: flex-start;
  .productList {
    .textCenter {
      text-align: center;
    }
    .textGreen {
      color: $colorGreen;
    }
    .textRed {
      color: $colorRed;
    }
    .textMain {
      color: $colorMain;
    }
    table {
      border: 1px solid $colorStroke;
      border-spacing: 0;
      width: 900px;
      th {
        background: $colorTableHeader;
        padding: 14px;
        border-right: 1px solid $colorStroke;
        border-bottom: 1px solid $colorStroke;
      }
      td {
        text-align: left;
        padding: 12px;
        font-size: 14px;
        border-right: 1px solid $colorStroke;
      }
      .productNameWrap {
        display: flex;
        align-items: center;
        img {
          margin-right: 8px;
          width: 40px;
          height: 40px;
        }
      }
      .addToCartButton {
        background: $colorMain;
        border: unset;
        font-size: 14px;
        font-weight: bold;
        color: $colorWhite;
        width: 120px;
        height: 40px;
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
}
</style>