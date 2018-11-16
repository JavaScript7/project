import { loaders } from '../../build/vue-loader.conf';
<template>
  <div class="hello" v-loading="loading" element-loading-text="正在加载中，请稍后！" element-loading-spinner="el-icon-loading"
  element-loading-background="rgba(0, 0, 0, 0.8)">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="(item,index) in picLunbos" :key="index">
        <img class="imgLunbo" :src="item.lunbo">
      </el-carousel-item>
    </el-carousel>
    <button @click="onClickMe">click me!</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      loading: true,
      picLunbos: [
        {lunbo: 'https://p.ssl.qhimg.com/sdm/336_209_80/t01a370feb59f45dc9c.jpg'},
        {lunbo: 'https://p.ssl.qhimg.com/t01e71047087d858c8f.jpg'},
        {lunbo: 'https://p.ssl.qhimg.com/t01e96f9e1d9727e293.png'},
        {lunbo: 'https://p.ssl.qhimg.com/t01736cd63f06fa5d96.png'},
        {lunbo: 'https://p.ssl.qhimg.com/t01ec0d7825589efd6c.jpg'}
      ]
    }
  },
  mounted () {
    setTimeout(this.closeLoading, 3000)
  },
  methods: {
    onClickMe () {
      this.$router.push({name: 'login'})
    },
    closeLoading () {
      this.loading = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.imgLunbo{
  display: inline-block;
  width: 100%;
  height: 100%;
}
</style>
