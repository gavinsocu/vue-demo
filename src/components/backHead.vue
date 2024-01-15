<template>
  <div class="body">
    <el-page-header @click="navToUser" title="<" :icon="null">
      <template #content>
        <span class="text-large font-600 mr-3">{{ title }}</span>
      </template>
    </el-page-header>
  </div>
</template>
<script lang="js">
  export default {
    name: 'backHead',
    components: {},
    data() {
        return {}
    },
    props: {
        title: {
            type: String,
            default: 'Title'
        }
    },
    methods: {
        navToUser() {
            this.$router.push('/user');
        },
    }
}
</script>

<style scoped>
.body {
  background-color: #409eff;
  height: 8vh;
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 20px;
  font-size: x-large;
}
.text-large {
  font-size: 20px;
}
.font-600 {
  font-weight: 600;
}
</style>
