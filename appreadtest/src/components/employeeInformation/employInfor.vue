<template>
  <div class="employInfor">
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
            prop="date"
            label="入职时间"
            width="150">
        </el-table-column>
        <el-table-column
            prop="name"
            label="姓名"
            width="120">
        </el-table-column>
        <el-table-column
            prop="age"
            label="年龄"
            width="120">
        </el-table-column>
        <el-table-column
            prop="education"
            label="学历"
            width="120">
        </el-table-column>
        <el-table-column
            prop="position"
            label="职位"
            width="120">
        </el-table-column>
        <el-table-column
            prop="phone"
            label="电话号码"
            width="120">
        </el-table-column>
        <el-table-column
            prop="address"
            label="家庭地址"
            width="300">
        </el-table-column>
        <el-table-column label="操作" width="100">
        <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
        </template>
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'employInfor',
  data () {
    return {
      
    }
  },
  props: [''],
  methods: {
    onClickMe () {
      console.log(this.msgs)
    }
  }
}
</script>

<style scoped>

</style>
