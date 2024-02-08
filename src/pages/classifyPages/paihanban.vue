<template>
  <h1>这里存放html代码:{{ msg }}</h1>
</template>

<script>
// 这里存放js代码
export default {
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
/* 这里存放css代码 */
h1{
  color: red;
}
</style>