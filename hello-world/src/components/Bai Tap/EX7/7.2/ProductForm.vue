<template>
  <div class="formDetail">
    <h2>Sản Phẩm</h2>
    <div class="formInput">
      <p><strong>Tên sản phẩm</strong></p>
      <input
        type="text"
        placeholder="Nhập tên sản phẩm"
        v-model="editProduct.name"
      />
      <input type="hidden" v-model="editProduct.id" />
      <span v-if="editProduct.name.length === 0">{{ errorName }}</span>
      <p><strong>Đơn giá</strong></p>
      <input
        type="number"
        placeholder="Nhập đơn giá"
        v-model="editProduct.unitPrice"
      />
      <span v-if="editProduct.unitPrice.length === 0">{{ errorPrice }}</span>
      <p><strong>Số lượng</strong></p>
      <input
        type="number"
        placeholder="Nhập số lượng"
        v-model="editProduct.quantity"
      />
      <span v-if="editProduct.quantity.length === 0">{{ errorQuantity }}</span>
      <div class="btnProduct">
        <button
          v-if="editProduct.id.length === 0"
          class="addProduct"
          @click="addProduct()"
        >
          Tạo mới
        </button>
        <button v-else class="addProduct" @click="addProduct()">
          Cập nhật
        </button>
        <button class="destroyItem" @click="destroyItem()">Huỷ</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "ProductForm",
  data() {
    return {
      errorName: "",
      errorPrice: "",
      errorQuantity: "",
    };
  },
  methods: {
    ...mapMutations(["addProductStore", "updateOldProduct"]),
    addProduct() {
      if (
        this.editProduct.name === "" ||
        this.editProduct.unitPrice === "" ||
        this.editProduct.quantity === ""
      ) {
        if (this.editProduct.name === "") {
          this.errorName = "Tên không được để trống";
        }
        if (this.editProduct.unitPrice === "") {
          this.errorPrice = "Giá không được để trống";
        }
        if (this.editProduct.quantity === "") {
          this.errorQuantity = "Số lượng không được để trống";
        }
      } else {
        let data = [];
        if (parseInt(this.editProduct.quantity) === 0) {
          data["isAvailable"] = false;
        } else {
          data["isAvailable"] = true;
        }
        if (this.editProduct.id === "") {
          data.id = new Date().getTime();
          data.name = this.editProduct.name;
          data.unitPrice = this.editProduct.unitPrice;
          data.quantity = this.editProduct.quantity;
          this.addProductStore(data);
        } else {
          data.code = this.editProduct.code;
          data.id = this.editProduct.id;
          data.name = this.editProduct.name;
          data.unitPrice = this.editProduct.unitPrice;
          data.quantity = this.editProduct.quantity;
          this.updateOldProduct(data);
          this.products.push([]);
          let last = this.products.length - 1;
          this.products.splice(last, 1);
        }
        return [
          (this.editProduct.id = ""),
          (this.editProduct.name = ""),
          (this.editProduct.isAvailable = false),
          (this.editProduct.unitPrice = ""),
          (this.editProduct.quantity = ""),
          (this.errorName = ""),
          (this.errorQuantity = ""),
          (this.errorPrice = ""),
        ];
      }
    },
    destroyItem() {
      return [
        (this.editProduct.id = ""),
        (this.editProduct.name = ""),
        (this.editProduct.isAvailable = false),
        (this.editProduct.unitPrice = ""),
        (this.editProduct.quantity = ""),
        (this.errorName = ""),
        (this.errorQuantity = ""),
        (this.errorPrice = ""),
      ];
    },
  },
  computed: {
    ...mapState(["editProduct", "products"]),
  },
};
</script>

<style scoped lang="scss">
h2{
  color: blue;
  margin-left:20px ;
}

.formDetail{
  text-align: left;
  border: 1px solid #a6a5a5;
  .formInput{
    padding: 20px;
    input{
      width: 500px;
      height: 32px;
    }
    
    .btnProduct{
      padding-top: 10px;
      text-align: right;
      .addProduct{
        width: 75px;
        padding: 8px;
        background-color: #50a5f5;
        color: white;
        border: none;
        border-radius: 6px;
        margin-right: 5px;
        cursor: pointer;
      }
      .destroyItem{
        width: 75px;
        padding: 8px;
        background-color: #e3e3e3;
        color: black;
        border: none;
        border-radius: 6px;
        cursor: pointer;
      }
      .addProduct:hover{
        background-color: #328fe7;
      }
      .destroyItem:hover{
        background-color: #b7b7b7;
      }
    }
  }
}
</style>