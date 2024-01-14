<template>
    <div class="header">
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
    </div>
  </template>

<script>
import Icon from '../components/Icon.vue'
import Drawer from './drawer.vue'
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
            debugger
            this.isDraw ++;
            while(this.isDraw > 2){
                this.isDraw = 1;
            }
        }
    },
}
</script>

<style scoped>
.icon{
    font-size: 20px;
    color: #fff;
    margin-left:3vw
}
.icon::after{
  /*其他样式*/
  opacity: 0;
  box-shadow: 0 0 0 6px var(--primary-color);
  transition: .3s;
}
/*点击*/
.icon:active::after{
  box-shadow: none;
  opacity: 0.4;
  transition: 0s; /*取消过渡*/
}

.admin{
    margin-right: 3vw;
    margin-top: 17%;
}
.header{
    height: 8vh;
    width: 100vw;
    background-color: #409EFF;
    display: flex;
    align-items: center;
}
</style>