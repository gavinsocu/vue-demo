<template>
  <i class="iconfont" :class="[iconclass, extraclass]"></i>
</template>

<script>
var map = {
  fenlei: 'icon-fenlei2',
  fenlei1: 'icon-fenlei',
  arrowup: 'icon-xiangshang',
  arrowdown: 'icon-xiangxia',
  searh: 'icon-sousuo',
  user: 'icon-wode',
  shouye: 'icon-shouye',
  tuijian: 'icon-tuijian2',
};
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    extraclass: {
      type: String,
      default: '',
    },
  },
  computed: {
    iconclass() {
      return map[this.type];
    },
  },
};
</script>

<style scoped>
@import '//at.alicdn.com/t/c/font_4183937_p4ocxwr1udb.css';
</style>
```
