<template>
  <div class="hello"></div>
</template>

<script>
export default {
  name: 'componenta',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props: ['msgs'],
  methods: {
    onClickMe () {
      console.log(this.msgs)
      this.$emit('child-tell-me-something', this.msgs)
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
</style>
