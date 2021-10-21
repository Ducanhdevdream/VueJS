import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // // Ex 7-1
    // products: [
    //   {
    //     id: 1,
    //     name: 'iPhone 12 Pro Max Chính Hãng',
    //     image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/h/photo_2020-10-13_22-12-24.jpg_1_2.png',
    //     price: 32990000,
    //     quantity: 566,
    //   },
    //   {
    //     id: 2,
    //     name: 'iPhone 12 Chính Hãng (VN/A)',
    //     image: '',
    //     price: 21790000,
    //     quantity: 123,
    //   },
    //   {
    //     id: 3,
    //     name: 'iPhone 11 Chính hãng',
    //     image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/_/0/_0004_layer_5.jpg',
    //     price: 16690000,
    //     quantity: 0,
    //   },
    //   {
    //     id: 4,
    //     name: 'Apple iPhone XR 64GB Chính hãng(VN/A)',
    //     image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-xr_5_.jpg',
    //     price: 12190000,
    //     quantity: 1023,
    //   },
    //   {
    //     id: 5,
    //     name: 'iPhone 11 Pro Max Chính hãng(VN/A)',
    //     image: '',
    //     price: 26500000,
    //     quantity: 6,
    //   }
    // ],
    // carts: [],
    // totalMoney: 0,

    

    editProduct: {
      code: '',
      id: '',
      name: '',
      isAvailable: false,
      quantity: '',
      unitPrice: ''
    },
    products: [],

  },
  getters: {

  },
  mutations: {

    // //Ex 7-1
    // updateCart: (state, value) => {
    //   state.carts.push(value)
    // },
    // spliceCart: (state, value) => {
    //   state.carts.splice(value, 1)
    // },
    // updateItemInCart: (state, value) => {
    //   state.carts[value.index].quantityCart = value.quantity
    // },
    // updateTotalMoney: (state, value) => {
    //   state.totalMoney = value
    // },

    


    addProductStore(state, value) {
      state.products.push(value)
    },
    updateDragProduct(state, value) {
      state.editProduct = value
    },
    updateOldProduct(state, value) {
      state.products[value.code].name = value.name
      state.products[value.code].quantity = value.quantity
      state.products[value.code].unitPrice = value.unitPrice
      state.products[value.code].isAvailable = value.isAvailable
    },
    destroyProduct(state, value) {
      state.products.splice(value, 1)
    }
  }
})

export default store