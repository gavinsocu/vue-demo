<template>
    <div class="home">
        <div class="homeHead">
            <Headersead/>
        </div>
        <div class="homeBody">
            <img alt="Vue logo" src="../assets/vue.svg" />
            <h1>Home</h1>
            <el-button type="primary" @click =" count++ ">你好x{{ count }}</el-button> 
        </div>
        <div class="homeFoot">
            <el-tabs v-model="activeName" class="demo-tabs"
            @tab-click="handleClick"
            :stretch="true"
            tab-position="top">
                <el-tab-pane label="首页" name="first"></el-tab-pane>
                <el-tab-pane label="圈子" name="second"></el-tab-pane>
                <el-tab-pane label="热门" name="third"></el-tab-pane>
                <el-tab-pane label="我的" name="fourth"></el-tab-pane>
             </el-tabs>
        </div>
    </div>
</template>

<script>
import Headersead from './header.vue'
export default {
    name: 'home',
    components: {
        Headersead,
    },
    data() {
        return {
            count: 0
        }
    },
}
</script>

<style scoped>
.home{
    height: 100vh;
    width: 100vw;
}

.homeHead{
    height: 7vh;
    width: 100vw;
    background-color: #409EFF;
    display: flex;
    align-items: center;
}

.homeBody{
    height: 88.4vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
