<template>
  <div class="main">
    <router-view></router-view>
  </div>
  <div class="foot" v-show="!$route.meta.childrenPage">
    <div class="footmenu">
      <span @click="goToHome"><Icon type="shouye" extraclass="icon" :class="{ iconActive: isActive == 1 }" /></span>
      <span @click="goToClassify"><Icon type="fenlei1" extraclass="icon" :class="{ iconActive: isActive == 2 }" /></span>
      <span @click="goToAbout"><Icon type="tuijian" extraclass="icon" :class="{ iconActive: isActive == 3 }" /></span>
      <span @click="goToUser"><Icon type="user" extraclass="icon" :class="{ iconActive: isActive == 4 }" /></span>
    </div>
  </div>
</template>

<script>
import Icon from '../components/Icon.vue';
export default {
  name: 'Trunk',
  components: {
    Icon,
  },
  data() {
    return {
      isActive: 1,
    };
  },
  methods: {
    goToUser() {
      this.$router.push('/user'); 
    },
    goToHome() {
      this.$router.push('/home');
    },
    goToClassify() {
      this.$router.push('/classify');
    },
    goToAbout() {
      this.$router.push('/about');
    },
  },
  created() {
    // 在组件创建时，监听路由变化
    this.$router.beforeEach((to, from, next) => {
      // 根据不同的路由来更新isActive变量
      if (to.path === '/user') {
        this.isActive = 4;
      } else if (to.path === '/home') {
        this.isActive = 1;
      } else if (to.path === '/classify') {
        this.isActive = 2;
      } else if (to.path === '/about') {
        this.isActive = 3;
      }
      next(); // 必须调用 next() 才能继续路由导航
    });
  },
};
</script>

<style scoped>
.main {
  height: 93vh;
  width: 100vw;
}

.footmenu {
  box-shadow: 0px -1px 1px #dcdfe6;
  height: 7vh;
  width: 100vw;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.icon {
  font-size: 30px;
  color: #000;
}

.iconActive {
  font-size: 30px;
  color: #409eff;
}

span {
  width: 25%;
  height: 100%;
  line-height: 400%;
}
</style>
