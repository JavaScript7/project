<template>
  <div class="new-base-info">
    <el-button type="primary" @click="newIdea">新建</el-button>
    <el-dialog title="提示"  width="30%" center :visible.sync="newDialog"><!-- :visible.sync="newDateList" -->
      <el-form ref="form" label-width="80px">
        <el-form-item label="入职时间">
          <el-date-picker type="date" placeholder="选择日期" v-model="tables.date"></el-date-picker>
        </el-form-item>
        <el-form-item label="姓名" v-model="tables.name">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="学历">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="职位">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input></el-input>
        </el-form-item>
        <!-- <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item> -->
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="newDateList">取 消</el-button>
        <el-button type="primary" @click="newDateList">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      newDialog: false,
      tables: {
        date: '',
        name: ''
      }
    }
  },
  methods: {
    newIdea () {
      // console.log(this.tableData)
      this.newDialog = true
    },
    newDateList () {
      this.newDialog = false
      // this.tableData.push({
      //   name: 
      // })
      console.log(this.tables.name)
    }
  }
}
</script>

<style scoped>

</style>

