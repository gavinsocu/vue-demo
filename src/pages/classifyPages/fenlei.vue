<template>
  <div class="demo-collapse">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="&nbsp学校招聘" name="1">
        <div>
          <massageCard :dietlist="schoolSall"></massageCard>
        </div>
      </el-collapse-item>
      <el-collapse-item title="&nbsp企业招聘" name="2">
        <div>
          <massageCard :dietlist="bussinessSall"></massageCard>
        </div>
      </el-collapse-item>
      <el-collapse-item title="&nbsp个人招聘" name="3">
        <div>
          <massageCard :dietlist="onerSall"></massageCard>
        </div>
      </el-collapse-item>
      <el-collapse-item title="&nbsp组织招聘" name="4">
        <div>
          <massageCard :dietlist="teamSall"></massageCard>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import massageCard from '../../components/massageCard.vue';
export default {
  data() {
    return {
      schoolSall: [
        { id: 1, name: '网协拖地小组', gonxiao: '1k-2k！', img: './na.jpg', leibie: '学校招聘', yanse: 'success' },
        { id: 2, name: '饭堂服务员', gonxiao: '快来体验', img: './mnk.jpg', leibie: '学校招聘', yanse: 'success' },
        { id: 3, name: '档案管理', gonxiao: '300', img: './luan.jpg', leibie: '学校招聘', yanse: 'success' },
      ],
      bussinessSall: [
        { id: 1, name: '校园外卖', gonxiao: '1k不到', img: './wm.jpg', leibie: '企业招聘', yanse: 'primary' },
        { id: 2, name: '联通销售', gonxiao: '赚翻了！！！', img: './lt.jpg', leibie: '企业招聘', yanse: 'primary' },
        { id: 3, name: '联通销售', gonxiao: '赚翻了！！！', img: './lt.jpg', leibie: '企业招聘', yanse: 'primary' },
        { id: 4, name: '联通销售', gonxiao: '赚翻了！！！', img: './lt.jpg', leibie: '企业招聘', yanse: 'primary' },
      ],
      onerSall: [{ id: 1, name: '情侣写真', gonxiao: '2k', img: './ql.jpg', leibie: '个人招聘', yanse: 'danger' }],
      teamSall: [{ id: 1, name: '网协拖地小组', gonxiao: '1k-2k！', img: './na.jpg', leibie: '学校招聘', yanse: 'success' }],
    };
  },
  components: {
    massageCard,
  },
};
</script>
