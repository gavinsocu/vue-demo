<template>
  <div class="main">
    <div class="mylogo">
      <span class="left"><img src="../assets/蔡男神.png" alt="" /></span>
      <span class="right">
        <span style="font-size: x-large; font-weight: 700">蔡男神</span>
        <span>信息管理与信息系统</span>
      </span>
    </div>
    <div class="body">
      <div class="myMassage" @click="navToMyMassage">
        <span>个人信息</span>
        <span>></span>
      </div>
      <div class="myMassage" @click="navToHistoryMassage">
        <span>浏览记录</span>
        <span>></span>
      </div>
      <div class="myMassage" @click="navToMoneyMassage">
        <span>账本</span>
        <span>></span>
      </div>
      <div class="myMassage">
        <span>设置</span>
      </div>
    </div>
  </div>
  <div class="foot"></div>
</template>
、

<script>
export default {
  name: 'user',
  components: {},
  data() {
    return {};
  },
  methods: {
    navToMyMassage() {
      this.$router.push('/user/myMassage');
    },
    navToHistoryMassage() {
      this.$router.push('/user/historyMassage');
    },
    navToMoneyMassage() {
      this.$router.push('/user/moneyMassage');
    },
  },
};
</script>

<style scoped>
.main {
  height: 93vh;
  overflow-y: auto;
  background-color: #f9f9f9;
}

.mylogo {
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* background-image: url("../assets/30.jpg"); */
  background-size: cover;
}
.mylogo img {
  width: 70px;
  height: 70px;
  border-radius: 10px;
}

.body {
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.myMassage {
  width: 95%;
  height: 50px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 50px;
  box-shadow: 0px 0px 5px #dcdfe6;
}
.myMassage span:nth-child(1) {
  text-align: left;
  margin-left: 20px;
  font-size: large;
  font-weight: 600;
  float: left;
}
.myMassage span:nth-child(2) {
  float: right;
  margin-right: 20px;
  bottom: 5px;
  margin-left: 20px;
  font-size: medium;
  font-weight: 400;
}

.left {
  position: absolute;
  float: left;
  left: 6%;
}
.right {
  /* 文字靠左显示 */
  text-align: left;
  font-size: large;
  font-weight: 400;

  position: absolute;
  float: left;
  left: 30%;
  display: flex;
  flex-direction: column;
}
</style>
