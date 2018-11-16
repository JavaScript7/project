<template>
  <div id="app">
    <!-- <div class="box" v-text="title"></div>
    <input type="text" v-model="inputVal" placeholder="请输入内容！" @keyup.enter="addNew">
    <ul :class="[box1,box2]">
      <li v-for="(item,index) in items" :key="index" :class="{finish:item.isFinish}" @click="toggleFinish(item)">
        {{item.label}}
      </li>
    </ul>
    <component-a msgs="you" @child-tell-me-something="ListenToMyBoy"></component-a>
    <p>child tell me: {{childWord}}</p>
    <div class="table">
      <a v-link="{path: '/vue'}">tab1</a>
    </div>
    <router-view></router-view> -->
    <!-- <login></login> -->
    <router-view></router-view>
    <!-- <hello-world></hello-world> -->
  </div>
</template>

<script>
import Store from './store'
import login from './components/login/login'
import HelloWorld from './components/HelloWorld'
console.log(Store)
export default {
  data () {
    return {
      title: 'My first vue！'
    }
  },
  components: {
    login,
    HelloWorld
  },
  watch: {
    items: {
      handler (items) {
        Store.save(items)
      },
      deep: true
    }
  },
  methods: {
    toggleFinish (item) {}
  }
}
// document.addEventListener('DOMContentLoaded', () = > {
//   const html = document.querySelector('html')
//   let fontSize = window.innerWidth / 10
//   fontSize = fontSize > 50? 50 : fontSize
//   html.style.fontSize = fontSize + 'px'
// })
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
.finish{
  color: red;
}
</style>
