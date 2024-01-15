<template>
  <div class="hot">
    <massageCardlist :dietlist="diet"></massageCardlist>
  </div>
</template>

<script>
import massageCardlist from '../../components/massageCard.vue';
export default {
  components: {
    massageCardlist,
  },
  data() {
    return {
      diet: [
        { id: 1, name: '网协拖地小组', gonxiao: '1k-2k！', img: './na.jpg', leibie: '学校招聘', yanse: 'success' },
        { id: 2, name: '情侣写真', gonxiao: '2k', img: './ql.jpg', leibie: '个人招聘', yanse: 'danger' },
        { id: 3, name: '饭堂服务员', gonxiao: '快来体验', img: './mnk.jpg', leibie: '学校招聘', yanse: 'success' },
        { id: 4, name: '校园外卖', gonxiao: '1k不到', img: './wm.jpg', leibie: '企业招聘', yanse: 'primary' },
        { id: 5, name: '档案管理', gonxiao: '300', img: './luan.jpg', leibie: '学校招聘', yanse: 'success' },
        { id: 7, name: '联通销售', gonxiao: '赚翻了！！！', img: './lt.jpg', leibie: '企业招聘', yanse: 'primary' },
        { id: 6, name: '联通销售', gonxiao: '赚翻了！！！', img: './lt.jpg', leibie: '企业招聘', yanse: 'primary' },
        { id: 6, name: '联通销售', gonxiao: '赚翻了！！！', img: './lt.jpg', leibie: '企业招聘', yanse: 'primary' },
      ],
    };
  },
};
</script>

<style>
.hot {
  width: 100%;
  height: 78vh;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
