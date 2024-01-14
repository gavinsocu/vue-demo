<template>
    <div class="main">
        <router-view></router-view>
    </div>
    <div class="foot">
        <div class="footmenu">    
            <span  @click="goToHome"><Icon type="shouye" extraclass="icon" :class="{iconActive:isActive == 1}"/></span>
            <span  @click="goToClassify"><Icon type="fenlei1" extraclass="icon" :class="{iconActive:isActive == 2}"/></span>
            <span  @click="goToAbout"><Icon type="tuijian" extraclass="icon" :class="{iconActive:isActive == 3}"/></span>
            <span  @click="goToUser"><Icon type="user" extraclass="icon" :class="{iconActive:isActive == 4}"/></span>
        </div>
    </div>
</template>

<script>
import Icon from '../components/Icon.vue'
export default {
    name: 'Trunk',
    components: {
        Icon,
    },
    data(){
        return{
            isActive:1,
        }
    },
    methods: {
        goToUser(){
            this.$router.push('/user');
            this.isActive = 4;
        },
        goToHome(){
            this.$router.push('/home');
            this.isActive = 1;
        },
        goToClassify(){
            this.$router.push('/classify');
            this.isActive = 2;
        },
        goToAbout(){
            this.$router.push('/about');
            this.isActive = 3;
        },
    },
}

</script>

<style scoped>
.main{
    height: 93vh;
    width: 100vw;
}

.footmenu{
    box-shadow: 0px -1px 1px #DCDFE6;
    height: 20vh;
    width: 100vw;
    background-color: #FFF;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.icon{
    font-size: 30px;
    color: #000;
}

.iconActive{
    font-size: 30px;
    color: #409EFF;
}

span{
    width: 25%;
    height: 100%;
    line-height: 400%;
}
</style>