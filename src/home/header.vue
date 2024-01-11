<template>
    <el-page-header :icon="null" title=" " style="width: 100vw;">
      <template #icon>
        <Icon type="fenlei" extraclass="icon" @click="makeDrawer"/>
      </template>
      <template #content>
        <Drawer :isDrawer="isDraw"/>
      </template>
      <template #extra>
        <div class="flex items-center admin">
            <el-avatar
            :size="32"
            class="mr-3"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
        </div>
      </template>
    </el-page-header>
  </template>

<script>
import Icon from '../components/Icon.vue'
import Drawer from './Drawer.vue'
export default {
    name: 'Headersead',
    components: {
        Icon,Drawer
    },
    data() {
        return {
            isDraw: false,
        }
    },
    methods: {
        makeDrawer(){
            this.isDraw ++;
            while(this.isDraw > 2){
                this.isDraw = 1;
            }
            console.log(this.isDraw)
        }
    },
}
</script>

<style scoped>
.icon{
    font-size: 15px;
    color: #fff;
    margin-left:3vw
}
.admin{
    margin-right: 3vw;
    margin-top: 17%;
}
</style>