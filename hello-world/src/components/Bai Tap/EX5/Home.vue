<template>
  <el-container>
    <el-aside>
      <el-row>
        <el-menu
            :default-active="isActive"
            class="el-menu-vertical"
            background-color="#001529"
            text-color="#fff"
            active-text-color="#ffd04b">
          <el-menu-item index="1" @click="pushToProduct('')">
            <i class="el-icon-menu"></i>
            <span>Tổng quan</span>
          </el-menu-item>
          <el-menu-item index="2" @click="pushToProduct('product-management')">
            <i class="el-icon-box"></i>
            <span >Quản lý sản phẩm</span>
          </el-menu-item>
          <el-menu-item index="3" @click="pushToProduct('invoice-management')">
            <i class="el-icon-document"></i>
            <span>Quản lý hóa đơn</span>
          </el-menu-item>
          <el-menu-item index="4" @click="pushToProduct('statistic')">
            <i class="el-icon-s-data"></i>
            <span>Báo cáo thống kê</span>
          </el-menu-item>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>Quản lý chi nhánh</span>
            </template>
            <el-menu-item-group title="Hoạt động">
              <el-menu-item index="5-1" @click="pushToProduct('product')">Sản phẩm</el-menu-item>
              <el-menu-item index="5-2" @click="pushToProduct('order')">Đơn hàng</el-menu-item>
              <el-menu-item index="5-3" @click="pushToProduct('User')">Khách hàng</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Báo cáo">
              <el-menu-item index="5-4" @click="pushToProduct('revenue')">Doanh thu</el-menu-item>
              <el-menu-item index="5-5" @click="pushToProduct('inventory')">Tồn kho</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="6" @click="pushToProduct('system')">
            <i class="el-icon-s-tools"></i>
            <span>Cài đặt hệ thống</span>
          </el-menu-item>
        </el-menu>
      </el-row>
    </el-aside>
    <el-container>
      <el-header>
        <div class="header">
          <slot name="contentHeader">
            Trang Chủ
          </slot>
        </div>
        <div class="infoHeader">
          <el-badge :value="12" class="item">
            <i class="el-icon-bell"></i>
          </el-badge>
        </div>
        <div class="dropHeader">
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              <img :src="url" alt="">
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a">Thông tin tài khoản</el-dropdown-item>
              <el-dropdown-item command="b">Đổi mật khẩu</el-dropdown-item>
              <el-dropdown-item command="c">Cấu hình</el-dropdown-item>
              <el-dropdown-item command="e" divided> <b @click="pushToProduct('login')">Đăng xuất</b></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-main>
          <slot name="contentMain">
            Đây là trang chủ
            <router-view/>
          </slot>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  props:['isActive'],
  name: "Home",
  data(){
    return{
      url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvBQUKt6HkTzdA9ikaQwAvpHQEbA44KvMtOA&usqp=CAU",
    }
  },
  methods: {
    handleCommand(command) {
      this.$message('click on item ' + command);
    },
    pushToProduct(value){
      this.$router.push({ path: `/${value}`})
    }
  }
}
</script>

<style scoped lang="scss">
.el-header {
  background-color: #B3C0D1;
  color: #333;
  text-align: left;
  line-height: 60px;
  display: flex;
  .header{
    width: 50%;
  }
  .infoHeader{
    width: 40%;
    text-align: right;
  }
  .dropHeader{
    width: 10%;
    text-align: center;
    .el-dropdown{
      height: 60px;
      span{
        img{
          width: 40px;
          border-radius: 50%;
          margin-top: 10px;
        }
      }
    }
  }
}
.el-aside {
  background-color: #001529;
  color: #333;
  text-align: left;
  line-height: 200px;
  height: 700px;
}
.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: left;
}
body > .el-container {
  margin-bottom: 40px;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}
.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>