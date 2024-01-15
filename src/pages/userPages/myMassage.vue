<template>
  <div class="head">
    <backHead :title="title"></backHead>
  </div>
  <div class="main">
    <div class="myMassage">
      <span>姓名</span>
      <span>></span>
    </div>
    <div class="myMassage">
      <span>学号</span>
      <span>></span>
    </div>
    <div class="myMassage">
      <span>性别</span>
      <span>></span>
    </div>
    <div class="myMassage">
      <span>学院</span>
      <span>></span>
    </div>
    <div class="myMassage">
      <span>专业</span>
      <span>></span>
    </div>
    <div class="myMassage">
      <span>班级</span>
      <span>></span>
    </div>
    <div class="myMassage">
      <span>手机号</span>
      <span>></span>
    </div>
    <div class="myMassage">
      <span>邮箱</span>
      <span>></span>
    </div>
    <div class="myMassage">
      <span>密码</span>
      <span>></span>
    </div>
  </div>
</template>

<script>
import backHead from '../../components/backHead.vue';
export default {
  name: 'myMassage',
  components: {
    backHead,
  },
  data() {
    return {
      title: '个人信息',
    };
  },
};
</script>

<style>
.head{
  height: 8vh;
  background-color: #409eff;
  width: 100%;
}
.main{
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

</style>