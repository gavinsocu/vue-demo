<template>
    <div class="about">
        <div class="head">
            <Headersead></Headersead>
        </div>
        <div class="main">
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" stretch="true">
                <el-tab-pane label="热门·" name="first">
                    <hot :dietlist="diet"/>
                </el-tab-pane>
                <el-tab-pane label="分类" name="second">
                    <fenlei/>
                </el-tab-pane>
                <el-tab-pane label="排行榜" name="third">
                    <paihanban/>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>

</template>

<script>
import Headersead from '../components/header.vue'
import hot from './classifyPages/hot.vue'
import fenlei from './classifyPages/fenlei.vue'
import paihanban from './classifyPages/paihanban.vue'
export default {
    name: 'about',
    components: {
        Headersead,hot,fenlei,paihanban
    },
    data() {
        return {
            activeName: 'first', // 设置默认显示的选项卡
            diet:[
                {id:1,name:'网协拖地小组',gonxiao:'1k-2k！',img:'./na.jpg',leibie:'学校招聘',yanse:'success'},
                {id:2,name:'情侣写真',gonxiao:'2k',img:'./ql.jpg',leibie:'个人招聘',yanse:'danger'},
                {id:3,name:'饭堂服务员',gonxiao:'快来体验',img:'./mnk.jpg',leibie:'学校招聘',yanse:'success'},
                {id:4,name:'校园外卖',gonxiao:'感受不一样的你',img:'./wm.jpg',leibie:'企业招聘',yanse:'primary'},
                {id:5,name:'档案管理',gonxiao:'300',img:'./luan.jpg',leibie:'学校招聘',yanse:'success'},
                {id:6,name:'联通销售',gonxiao:'是护士，也是摄影师',img:'./lt.jpg',leibie:'企业招聘',yanse:'primary'},
            ]
        }
    },
}

</script>

<style scoped>
.about{
    height: 100%;
    width: 100vw;
}

.main{
    height: 88.4%;
    width: 100vw;
}
</style>