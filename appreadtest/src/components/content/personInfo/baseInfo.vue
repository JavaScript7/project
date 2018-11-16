<template>
  <div class="base-info">
    <div class="head">
      <el-autocomplete
        v-model="state" 
        :fetch-suggestions="querySearchAsync" 
        placeholder="请输入搜索内容"
        clearable
        @select="selectInfo"></el-autocomplete>
      <new-base-info :tableData="tableData"></new-base-info>
    </div>
    <!-- slot-scope="scope" -->
    <div class="table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="selection" align="center" width="40"></el-table-column><!-- 多选 -->
        <el-table-column prop="date" label="入职时间" align="center" sortable width="150"></el-table-column>
        <el-table-column prop="name" label="姓名" align="center" sortable width="100"></el-table-column>
        <el-table-column prop="age" label="年龄" align="center" sortable width="80"></el-table-column>
        <el-table-column prop="education" label="学历" align="center" sortable width="120"></el-table-column>
        <el-table-column prop="position" label="职位" align="center" width="120"></el-table-column>
        <el-table-column prop="phone" label="电话号码" align="center" sortable width="120"></el-table-column>
        <el-table-column prop="address" label="家庭地址" align="center" width="300"></el-table-column>
        <el-table-column label="操作" width="100" align="center">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="ideatDatas(scope.$index,scope.row)">编辑</el-button>
            <el-button @click.native.prevent="deleteData(scope.$index,scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    <el-dialog
      title="编辑"
      :visible.sync="dialog"
      width="30%"
      center>
      <el-form ref="form" label-width="80px">
        <el-form-item label="入职时间">
          <el-date-picker v-model="ideaData.date" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="ideaData.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="ideaData.age"></el-input>
        </el-form-item>
        <el-form-item label="学历">
          <el-input v-model="ideaData.education"></el-input>
        </el-form-item>
        <el-form-item label="职位">
          <el-input v-model="ideaData.position"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="ideaData.phone"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="ideaData.address"></el-input>
        </el-form-item>
        <!-- <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item> -->
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialog = false">取 消</el-button>
        <el-button type="primary" @click="confirmIdea">确 定</el-button>
      </span>
    </el-dialog>
    </div>
  </div>
</template>

<script>
import newBaseInfo from '@/components/content/personInfo/newBaseInfo'
import moment from 'moment'

export default {
  components: {
    newBaseInfo
  },
  data () {
    return {
      persons: [],
      state: '',
      timeout: null,
      infoUrl: '../../../../static/mock/employinfo.json',
      tableData: [],
      dialog: false,
      ideaData: {
        date: '',
        name: '',
        age: '',
        education: '',
        position: '',
        phone: '',
        address: ''
      },
      newShow: false,
      itemlist: {}
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
    this.$http.get(this.infoUrl).then((res)=>{
      // console.log(res.data.data.tableData)
      this.tableData = res.data.data.tableData
    }).catch((err)=>{
      console.log(err)
    })
  },
  methods: {
    init () {

    },
    loadAll () {
      return [
        { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
        { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
        { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
        { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
        { "value": "贡茶", "address": "上海市长宁区金钟路633号" }
      ]
    },
    querySearchAsync (queryString, cb) {
      let restaurants = this.restaurants;
      let results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return (state) => {
        return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    selectInfo(item) {
      console.log(item);
    },
    deleteData(index,rows) {// 删除员工信息
      // console.log(index+rows)
      this.$confirm('此操作将永久删除该文件, 是否继续？','编辑',{
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warn',
        center: true
      }).then((res) => {
        this.$message({
          type: 'success',
          message: '删除成功！'
        })
        this.tableData.splice(index,1)
        // console.log(res)confirm
      }).catch((err) => {
        this.$message({
          type: 'info',
          message: '已取消删除！'
        })
        // console.log(err)cancel
      })
    },
    ideatDatas(index,rows) {// 编辑员工信息
      this.dialog = true
      // console.log(index)序号
      let idea = this.ideaData
      let table = this.tableData
      for(let key in table[index]){
        idea[key] = table[index][key];
      }
      // idea.date = table[index].date
      // idea.name = table[index].name
      // idea.age = table[index].age
      // idea.education = table[index].education
      // idea.position = table[index].position
      // idea.phone = table[index].phone
      // idea.address = table[index].address
      this.itemlist = rows
      console.log(rows)
    },
    confirmIdea () {
      // debugger
      console.log(this.ideaData.date)
      for(let key in this.itemlist){
        for(let keys in this.ideaData){
          if(key == keys){
            key == 'date'? this.itemlist[key]=moment(this.ideaData[keys]).format('YYYY-MM-DD'):this.itemlist[key]=this.ideaData[keys];
          }
        }
      }
      this.dialog = false
    }
  }
}
</script>

<style scoped>

</style>


