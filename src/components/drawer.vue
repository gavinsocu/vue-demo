<template>
    <el-drawer v-model="drawer" title="I am the title" :with-header="false" direction="ltr">
      <span>Hi there!</span>
    </el-drawer>
  </template>
  
  <script>
  import { ref } from 'vue'
  const drawer = ref(false)
  export default {
    setup() {
      return {
        drawer
      }
    },
    props: {
      isDrawer: {
        type: Boolean,
        default: false
      }
    },
    watch:{
        isDrawer(val){
            this.drawer = val;
        }
    }
  }
  </script>