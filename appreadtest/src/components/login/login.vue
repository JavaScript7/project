<template>
  <div class="login" v-loading="loading">
    <div class="main">
      <img src="../../assets/logo.png" class="logo" /><h3>客户端信息管理</h3>
        <form action="">
          <input type="text" placeholder="请输入账号：admin！" v-model="username">
          <input type="password" placeholder="请输入密码：123！" v-model="password">
          <div class="remenber">
              <input type="checkbox" v-model="isCheck">
              <label for="">下次记住密码</label>
          </div>
          <input type="button" value="登录" @click="loginIn">
        </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      loginApiUrl: '../../../static/mock/login.json',
      username: '',
      password: '',
      auth: '',
      loading: false,
      isCheck: false
    }
  },
  props: ['12'],
  mounted () {
    this.$http.get(this.loginApiUrl)
      .then((res) => {
        this.auth = res.data.data.auth
      })
      .catch((err) => {
        console.log(err)
      })
    this.isChecked()
  },
  methods: {
    loginIn () {
    //   console.log(this.auth.addmin)
    this.isCheckKeep()
      if (this.username === this.auth.addmin) {
        if (this.password === this.auth.password) {
          this.$message({
            message: '登陆成功！',
            type: 'success',
            duration: 1000
          })
          this.loading = true
          this.$router.push({name: 'mainContent', params: {id: this.auth.addmin}})
        } else {
          this.$message({
            message: '密码错误！',
            type: 'error',
            duration: 1000
          })
        }
      } else {
        this.$message({
          message: '账号错误！',
          type: 'error',
          duration: 1000
        })
      }
    },
    isChecked () {
      let localUser = localStorage.getItem('name') || ''
      let localPass = localStorage.getItem('pass') || ''
      this.username = localUser
      this.password = localPass
      if (localUser !== '' && localPass !== '') {
        this.isChecks = true
      }
    },
    isCheckKeep () {
      if (this.isCheck) {
        localStorage.setItem('name', this.username)
        localStorage.setItem('pass', this.password)
      } else {
        localStorage.setItem('name', '')
        localStorage.setItem('pass', '')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,body{
  width: 100%;
  height: 100%;
}
.login{
  position: relative;
  width: 100%;
  height: 100%;
  background: #0DBC79;
}
.main{
  position: absolute;
  top: 50%;
  left: 50%;
  width: 402px;
  height: 308px;
  padding: 20px 20px 0;
  border-radius: 10px;
  box-shadow: 0 0 20px 4px gray;
  background: #fff;
  transform: translate(-50%,-50%);
}
.logo{
  display: inline-block;
  width: 32px;
  height: 32px;
  margin-top: 8px;
  margin-left: 50px;
}
h3{
  display: inline-block;
  height: 46px;
  margin-left: 40px;
  line-height: 46px;
}
form{
  padding: 10px 50px;
}
input[type="text"],input[type="password"],input[type="button"]{
  display: block;
  width: 296px;
  height: 34px;
}
input[type="text"],input[type="password"]{
  text-indent: 20px;
}
input[type="password"],input[type="button"]{
  margin-top: 20px;
}
.remenber{
  width: 248px;
  margin-top: 20px;
  font-size: 14px;
}
input[type="checkbox"]{
  vertical-align: middle;
}
input[type="button"]{
  background: #44ACF1;
  color: #fff;
  font-size: 16px;
  border: none;
}
input[type="button"]:hover{
  cursor: pointer;
}
</style>
