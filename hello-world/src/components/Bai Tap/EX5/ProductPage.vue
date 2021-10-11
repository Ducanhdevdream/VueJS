<template>
  <Home :isActive="isActive">
    <template #contentHeader>
      <b>Quản lý sản phẩm</b>
    </template>
    <template #contentMain>
      <el-table
          :data="tableData"
          border
          style="width: 100%">
        <el-table-column
            prop="date"
            label="Date"
            width="180">
        </el-table-column>
        <el-table-column
            prop="name"
            label="Name"
            width="180">
        </el-table-column>
        <el-table-column
            prop="address"
            label="Address">
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
            background
            :current-page.sync="currentPage"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, prev, pager, next, jumper"
            :total="400">
        </el-pagination>
      </div>
    </template>
  </Home>
</template>

<script>
import Home from "./Home";
export default {
  name: "ProductPage",
  components: {Home},
  data(){
    return {
      tableData: [{
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }
      ],
      currentPage: 4,
      isActive:'2'
    }
  },
}
</script>

<style scoped lang="scss">
.pagination {
  margin-top: 20px;
  float: right;
}
</style>