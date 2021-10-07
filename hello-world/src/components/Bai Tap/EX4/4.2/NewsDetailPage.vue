<template>
  <base-layout>
    <template v-slot:banner>
      <el-carousel ind icator-position="outside">
        <el-carousel-item v-for="item in banners" :key="item">
          <img :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
    </template>
    <template v-slot:ad1>
      <img src="https://images.hcmcpv.org.vn/res/news/2021/06/17-06-2021-khoi-dau-moi-cho-bong-da-viet-nam-86D36A38.jpg" alt="">
    </template>
    <template v-slot:ad2>
      <img src="https://image.thanhnien.vn/660x370/Uploaded/2021/jopoplb/2021_10_07/ho-tro-dan-ve-que-gap-mua-2-9202-5241.jpeg" alt="">
    </template>
  </base-layout>
</template>

<script>
  import BaseLayout from "./BaseLayout.vue";
  export default {
    components: {
      BaseLayout
    },
    data() {
      return {
        banners: [
            'https://image.thanhnien.vn/660x370/Uploaded/2021/bozngu/2021_10_07/hoi-nghi-tu-4-16-2745-1654.jpeg',
            'https://image.thanhnien.vn/660x370/Uploaded/2021/wsxrxqeiod/2021_09_30/hanh-trinh-ket-noi_uzgb.jpg',
            'https://image.thanhnien.vn/150x100/Uploaded/2021/pwivoviu/2021_10_06/1633458520715-3880.jpeg'
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  img {
    width: 100%;
  }
  .main {
    padding: 15px;
    .main-img {
      border-radius: 10px;
      margin: 20px 0;
    }
    .description {
      font-size: 14px;
      text-align: justify;
    }
  }
</style>