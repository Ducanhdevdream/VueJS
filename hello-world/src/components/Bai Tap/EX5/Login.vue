<template>
<div class="login-wrap">
  <div class="login-form">
    <img v-if="hideLogin" src="../../../../src/assets/logo-login.2d516aef.png" alt="">
    <div v-else>
      <div class="titleForgot">
        <p class="headForgot">LẤY LẠI MẬT KHẨU</p>
        <p class="contentForgot">
          Bạn vui lòng nhập email đăng nhập vào ô bên dưới để nhận email hướng dẫn lấy lại mật khẩu.
        </p>
      </div>
    </div>
    <div class="form-wrap">
      <div class="email-wrap">
        <input type="text" placeholder=" Email" v-model="email">
        <span class="error">{{errorEmail}}</span>
      </div>
      <div v-if="hideLogin" class="password-wrap">
        <input type="password" placeholder=" Mật khẩu" v-model="password">
        <span class="error">{{errorPass}}</span>
        <div class="forgot-pass">
          <button v-if="hideLogin" @click="hideForm()">Quên mật khẩu ?</button>
        </div>
      </div>
      <el-button v-if="hideLogin" class="login" @click="loginDs()" type="primary">ĐĂNG NHẬP</el-button>
      <el-button v-else class="login" @click="successForgot()" type="primary">GỬI EMAIL</el-button>
      <div class="goHomeLogin">
        <button v-if="!hideLogin" @click="goHome()">Trở về trang đăng nhập</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      email:'',
      password:'',
      errorEmail:'',
      errorPass :'',
      hideLogin : true
    }
  },
  methods:{
    loginDs(){
      let check = true
      if (this.email === ''){
        this.errorEmail = "Email không được để trống"
        check = false
      }else if (!this.validEmail(this.email)){
        check = false
        this.errorEmail = "Email sai định dạng, vui lòng nhập lại"
      }
      if (this.password === ''){
        check = false
        this.errorPass = "Mật khẩu không được để trống"
      }else if(this.password.length < 6){
        check = false
        this.errorPass = "Mật khẩu phải lớn hơn 6 ký tự"
      }
      if(check){
        this.$router.push({ path: `/`})
      }
    },
    validEmail: function (email) {
      let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    hideForm(){
      this.hideLogin = false
    },
    goHome(){
      this.hideLogin = true
    },
    successForgot(){
      if (this.email === ''){
        this.errorEmail = "Email không được để trống"
      }else if (!this.validEmail(this.email)){
        this.errorEmail = "Email sai định dạng, vui lòng nhập lại"
      }else{
        this.$message({
          message: 'Congrats, this is a success message.',
          type: 'success'
        });
        this.hideLogin = true
        this.email = ''
      }
    }
  },
  watch:{
    email(value){
      if (value.length>0){
        this.errorEmail = ''
      }
    },
    password(value){
      if (value.length>0){
        this.errorPass = ''
      }
    }
  }
}
</script>

<style scoped lang="scss">
.login-wrap{
  height: 100vh;
  overflow: auto;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0093e9;
  background-image: linear-gradient(160deg,#0093e9,#80d0c7);
  .login-form{
    max-width : 444px;
    height: max-content;
    background-color: white;
    padding: 24px;
    border-radius: 10px;
    img{
      width: 200px;
      margin-bottom: 24px;
    }
    .form-wrap{
      div{
        margin-bottom: 24px;
        text-align: left;
        input{
          width: 390px;
          height: 50px;
          border: 1px solid #d9d9d9;
          display: block;
          outline: none ;
        }
        input:focus,input:hover{
          outline: 1px solid #6cccff;
        }
        span{
          padding-top: 5px;
          font-size: 13px;
          color: red;
        }
      }
      .forgot-pass{
        margin-top:8px;
        text-align: right;
        button{
          background: transparent;
          color: #0080dd;
          font-size: 14px ;
          border: none;
          cursor: pointer;
          padding: 6px 8px;
        }
      }
      .goHomeLogin{
        margin-top: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 24px;
        margin-bottom: 0px;
        button{
          background: transparent;
          color: #0080dd;
          font-size: 14px ;
          border: none;
          cursor: pointer;
          padding: 6px 8px;
        }
      }
    }
    .titleForgot{
      max-width: 396px;
      .headForgot{
        margin: 0px;
        margin-bottom: 40px;
        font-size: 20px;
        font-weight: 700;
      }
      .contentForgot{
        text-align: left;
      }
    }
    .login{
      width: 100%;
    }
  }
}
</style>