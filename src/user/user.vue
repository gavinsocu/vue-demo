<template>
    <div class="mylogoclass">
        <div class="logo" @click="goLogin"></div>
    </div>
    <div class="text">
        <span>个人信息</span>
        <span>消息通知</span>
        <span>客服反馈</span>
        <span>更多设置</span>
    </div>
</template>

<script>
export default {
    components:{
        List
    },
    methods:{
        goLogin(){
            this.$router.push('/login');
        },
    }
}
</script>

<style scoped>
.mylogoclass{
    width: 100vw;
    height: 40vh;
    background-image: radial-gradient(circle, #e9eef4, #cfdef6, #baccf7, #acb8f6, #a6a3f2);
    position: relative;
}
.logo{
    width: 100px;
    height: 100px;
    background:url(./蔡女神.png);
    background-size: cover;
    border-radius: 50%;
    left: 40vw;
    position: absolute;
    top: 18vh;
}
span{
    display: block;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: start;
    padding-left: 10px;
    font-size: 16x;
    color: #000;
    font-weight: bold;
    border-bottom: .5px solid rgb(216, 215, 215);
    
}
</style>