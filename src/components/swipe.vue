<template>
    <el-carousel :interval="2000"   height="200px">
      <el-carousel-item v-for="item in imageList" :key="item">
        <img :src="item" class="image" />
      </el-carousel-item>
    </el-carousel>
  </template>

<script>
export default {
    props:{
        imageList:{
            type:Array,
            default:()=>[]
        }
    }
}
</script>

  <style scoped>
  .el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
  }

  .image{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
  </style>
  