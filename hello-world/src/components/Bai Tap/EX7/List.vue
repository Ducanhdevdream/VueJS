<template>
  <div id="table-wrap1">
    <table>
      <tr>
        <th>STT</th>
        <th>Sản phẩm</th>
        <th>Giá</th>
        <th>Số lượng</th>
        <th>Trạng thái</th>
        <th>Hành động</th>
      </tr>
      <tr v-for="(product, index) in products" :key="index">
        <td>{{ index + 1 }}</td>
        <td>
          <div>
            <img :src="product.image" alt="" v-if="product.image !== ''" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShGhQ7lsbnaloT8MurRglRwb4TKM9F0b_MpA&usqp=CAU" alt="" v-else />
            <div>{{ product.name }}</div>
          </div>
        </td>
        <td>
          {{
            new Intl.NumberFormat("de-DE", {
              style: "currency",
              currency: "VND",
              minimumFractionDigits: 0,
            }).format(product.price)
          }}
        </td>
        <td>{{ product.quantity }}</td>
        <td>
          <span v-if="product.quantity > 0" class="greenColor">Còn hàng</span>
          <span v-else class="redColor">Hết hàng</span>
        </td>
        <td>
          <button @click="addToCart(product)">Thêm vào giỏ</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "product",
  data() {
    return {};
  },
  computed: {
    ...mapState(["products", "carts", "totalMoney"]),
  },
  methods: {
    ...mapMutations(["updateCart", "updateTotalMoney", "updateItemInCart"]),
    addToCart(value) {
      let flag = false;
      this.updateTotalMoney(0);
      if (value.quantity > 0) {
        if (this.carts.length > 0) {
          for (let i = 0; i < this.carts.length; i++) {
            if (value.id === this.carts[i].id) {
              this.carts[i].quantityCart =
                parseInt(this.carts[i].quantityCart) + 1;
              flag = false;
              break;
            } else {
              flag = true;
            }
          }
          if (flag) {
            value.quantityCart = 1;
            this.updateCart(value);
          }
        } else {
          value.quantityCart = 1;
          this.updateCart(value);
        }
      } else {
        alert("Sản phẩm hết hàng");
      }
      let total = this.totalMoney;
      for (let i = 0; i < this.carts.length; i++) {
        total += this.carts[i].quantityCart * this.carts[i].price;
      }
      this.updateTotalMoney(total);
    },
  },
};
</script>

<style scoped lang="scss">
</style>