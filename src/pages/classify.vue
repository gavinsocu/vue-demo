<template>
  <div class="about">
    <div class="head">
      <Headersead></Headersead>
    </div>
    <div class="main">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" stretch="true">
        <el-tab-pane label="热门" name="first">
          <hot />
        </el-tab-pane>
        <el-tab-pane label="分类" name="second">
          <fenlei />
        </el-tab-pane>
        <el-tab-pane label="排行榜" name="third">
          <paihanban />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Headersead from '../components/header.vue';
import hot from './classifyPages/hot.vue';
import fenlei from './classifyPages/fenlei.vue';
import paihanban from './classifyPages/paihanban.vue';
export default {
  name: 'about',
  components: {
    Headersead,
    hot,
    fenlei,
    paihanban,
  },
  data() {
    return {
      activeName: 'first', // 设置默认显示的选项卡
    };
  },
};
</script>

<style scoped>
.about {
  height: 100%;
  width: 100vw;
}

.main {
  height: 88.4vh;
  width: 100vw;
}
</style>
