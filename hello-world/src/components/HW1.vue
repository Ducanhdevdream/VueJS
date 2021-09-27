<template>
  <div class="container">
    <div class="loginWrap">
      <div class="inputWrap">
        <div class="inputLabel">Nhập tiêu đề</div>
        <input type="text" v-model= "title">
      </div>
      <div class="inputWrap">
        <div class="inputLabel">Nhập nội dung</div>
        <textarea class="inputarea" v-model="areaValue"></textarea><br>
      </div>
    </div>
    <div class="infoWrap">

        <div class="infoLabel"> {{ title }}</div>
        <div class="infoarea">
          <span v-html="areaValue"></span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Xin Chao",
      areaValue: ''
    };
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;

  .loginWrap {
    background: #f5f5f5;
    border: 1px solid #6e6e6e;
    padding: 24px;
    height: 250px;
    width: 300px;

    .inputWrap {
      margin-bottom: 12px;

      .inputLabel {
        font-weight: bold;
        margin-bottom: 8px;
        text-align: left;
      }

      input {
        width: 292px;
        height: 30px;
      }

      .inputarea {
        width: 292px;
        height: 130px;
      }
    }
  }

  .infoWrap {
    display: inline;
    background: #f5f5f5;
    border: 1px solid #6e6e6e;
    padding: 24px;
    height: 250px;
    width: 300px;
    .infoLabel{
       font-weight: bold;
        margin-bottom: 8px;
        text-align: left; 
    }
    .infoarea{
        width: 292px;
        height: 130px;
    }
    
  }
}
</style>