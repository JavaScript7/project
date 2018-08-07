<template>
  <div class="login">
    <div class="loginIn">
      <div>
        <div class="head">
          <img src="" alt="">
          <span>个人博客</span>
        </div>
        <div class="input">
          <img src="" alt=""><input type="text" class="user" placeholder="用户名" v-model="loginIofo[0].user" ref="users">
          <img src="" alt=""><input type="text" class="psw" placeholder="密码" v-model="loginIofo[1].password" ref="psws">
          <div><img src="" alt=""><span>记住密码</span></div>
          <input type="button" class="btn" @click.enter="loginIn" value="登录">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      loginIofo: [
        {'user': ''},
        {'password': ''}
      ]
    }
  },
  methods: {
    loginIn () {
      this.$http.get('/static/data/index.json').then(response => {
        let data = response.data.result.indexData.loginInfo
        // _this.loginIofo[0] = data[0];
        // console.log(data[0].user)
        // console.log(data[1].password)
        if (this.loginIofo[0].user === data[0].user && this.loginIofo[1].password === data[1].password) {
          console.log('登陆成功！')
        } else {
          console.log('登录失败！')
          this.loginIofo[0].user = ''
          this.loginIofo[1].password = ''
        }
      })
    }
  }
}
</script>
<style scoped>
.login{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: blue;
}
/* .login::before{
    content:'';
    display: block;
    width:100%;
    height:1px;
} */
.loginIn{
    width: 400px;
    height: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 0 30px gray;
}

input{
    width: 280px;
    height: 26px;
}
input[type="text"],input[type="password"]{
    text-indent: 30px;
}
.user{

}
.psw{
    margin-top: 10px;
}
.btn{
    background: #44ABF0;
    line-height: 22px;
    text-align: center;
    cursor: pointer;
}
</style>
