<template>
  <div class="hello" v-loading="loading" element-loading-text="正在加载中，请稍后！" element-loading-spinner="el-icon-loading"
  element-loading-background="rgba(0, 0, 0, 0.8)">
    <el-container>
      <el-header>
        <div class="logo">
          <img src="../../assets/logo.png" class="logo" alt="" @click="collapseOpenClose">
          <span>管理中心</span>
        </div>
        <div class="admin-info">
          <el-badge is-dot class="item" :value="12">
            <i class="el-icon-bell" size="medium"></i>
          </el-badge>
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              admin<i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item class="clearfix">关于作者</el-dropdown-item>
              <el-dropdown-item class="clearfix" @click="loginOut">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
        <el-container>
          <el-aside width="200px">
              <!-- <el-row class="tac">
                  <el-col :span="24"> -->
            <el-menu
            default-active="1-4-1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
              <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航一</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>员工信息</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="2-1">
                    <router-link to="/baseInfo">基本信息</router-link>
                  </el-menu-item>
                  <el-menu-item index="2-2">
                    <router-link to="/dayInfo">日常信息</router-link>
                  </el-menu-item>
                  <el-menu-item index="2-3">选项3</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>导航三</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="3-1">选项1</el-menu-item>
                  <el-menu-item index="3-2">选项2</el-menu-item>
                  <el-menu-item index="3-3">选项3</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>导航四</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="4-1">选项1</el-menu-item>
                  <el-menu-item index="4-2">选项2</el-menu-item>
                  <el-menu-item index="4-3">选项3</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
                  <!-- </el-col>
              </el-row> -->
          </el-aside>
            <el-container>
              <el-main style="padding: 0;">
                  <!-- <el-tabs type="border-card">
                  <el-tab-pane>
                      <span slot="label"><i class="el-icon-date"></i> 我的行程</span>
                      我的行程
                  </el-tab-pane>
                  <el-tab-pane label="消息中心">消息中心</el-tab-pane>
                  <el-tab-pane label="角色管理">角色管理</el-tab-pane>
                  <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
                  </el-tabs> -->
                <router-view></router-view>
              </el-main>
              <el-footer>aside</el-footer>
            </el-container>
        </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'mainContent',
  components: {

  },
  data () {
    return {
      loading: false,
      isCollapse: false
    }
  },
  mounted () {
    setTimeout(this.closeLoading, 2000)
  },
  methods: {
    loginOut () {
        console.log(89)
      this.$router.push({name: 'login'})
      console.log(45)
    },
    closeLoading () {
      this.loading = false
    },
    handleOpen (key,keyPath) {
        // console.log(key,keyPath)
    },
    handleClose (key,keyPath) {
        // console.log(key,keyPath)
    },
    collapseOpenClose () {
        this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("//unpkg.com/element-ui@2.4.9/lib/theme-chalk/index.css");
.el-header, .el-footer {
    background-color: #242F42;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    overflow: hidden;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
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
.logo{
    float: left;
    width: 120px;
}
img.logo{
    display: inline-block;
    width: 32px;
    height: 32px;
    margin: 14px auto;
}
img.logo:hover{
    cursor: pointer;
}
.logo span{
    padding: 4px 4px;
    color: white;
}
.admin-info{
    float: right;
    color: red;
}
.el-icon-bell{
    color: #fff;
}
.el-dropdown-link{
    color: #fff;
}
.el-dropdown-menu{
    top: 40px !important;
}
.el-dropdown:hover{
    cursor: pointer;
}
.el-menu-vertical-demo:not(.el-menu--collapse){
    width: 200px;
    min-height: 400px;
}
</style>
