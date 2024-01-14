<template>
    <div class="home">
        <div class="homeHead">
            <Headersead/>
        </div>
        <div class="homeBody">
            <div class="card">
                <swipe :imageList="imgList"/>
            </div>
            <img alt="Vue logo" src="../assets/vue.svg" />
            <h1>Home</h1>
            <el-button type="primary" @click =" count++ ">你好x{{ count }}</el-button> 
        </div>
    </div>
</template>

<script>
import Headersead from '../components/header.vue'
import swipe from '../components/swipe.vue'
export default {
    name: 'home',
    components: {
        Headersead,swipe,
    },
    data() {
        return {
            count: 0,
            imgList:[
                "./4.jpg","./22.jpg","./11.jpg","./55.jpg"
            ]
        }
    },
}
</script>

<style scoped>
.home{
    height: 100%;
    width: 100vw;
}

.homeBody{
    height: 88.4%;
    width: 100vw;

}

.card{
    width: 100vw;
    height: 40vh;
}
</style>
