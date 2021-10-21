<template>
  <table>
    <tr class="headerList">
      <th>Mã sản phẩm</th>
      <th>Tên sản phẩm</th>
      <th>Giá</th>
      <th>Số lượng</th>
      <th>Trạng thái</th>
      <th>Hành động</th>
    </tr>
    <tr v-for="(item, index) in products" :key="index">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>
        {{
          new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "VND",
            minimumFractionDigits: 0,
          }).format(item.unitPrice)
        }}
      </td>
      <td>{{ item.quantity }}</td>
      <td>
        <span v-if="item.isAvailable">Còn Hàng</span>
        <span v-else>Hết Hàng</span>
      </td>
      <td>
        <button class="editProduct" @click="editItem(item, index)">Sửa</button>
        <button class="destroyProduct" @click="destroyItem(index)">Xóa</button>
      </td>
    </tr>
    <tr v-if="products.length === 0">
      <td colspan="6">Không có dữ liệu</td>
    </tr>
  </table>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      i: 0,
    };
  },
  name: "ProductList",
  methods: {
    ...mapMutations(["updateDragProduct", "destroyProduct"]),
    destroyItem(id) {
      this.destroyProduct(id);
    },
    editItem(data, index) {
      let dataDrag = {
        code: index,
        id: data.id,
        name: data.name,
        isAvailable: false,
        quantity: data.quantity,
        unitPrice: data.unitPrice,
      };
      this.updateDragProduct(dataDrag);
    },
  },
  computed: {
    ...mapState(["products"]),
  },
};
</script>

<style scoped lang="scss">
table {
  border: 1px solid #0000000d;
  width: 100%;
  .headerList {
    height: 45px;
    background-color: #e9e9e9;
  }
  tr {
    td {
      height: 30px;
      border-left: 1px solid #0000000d;
      button {
        width: 42px;
        padding: 4px;
        border: none;
        color: white;
        border-radius: 4px;
        cursor: pointer;
      }
      .editProduct {
        margin-right: 3px;
        background-color: #f49e3f;
      }
      .destroyProduct {
        background-color: #f74c4c;
      }
      .editProduct:hover {
        background-color: #ea8924;
      }
      .destroyProduct:hover {
        background-color: #e53333;
      }
    }
  }
}
</style>