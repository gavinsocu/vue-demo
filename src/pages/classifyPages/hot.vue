<template>
    <div class="cll">
    <div class="remen" v-for="item in dietlist" :key="item.id">
        <div class="img">
            <img :src="item.img" alt="">
        </div>
        <div class="text">
            <div class="zt1">
                <div class="m"><h3>{{ item.name }}</h3></div>
                <div class="leibie"><el-tag :type="item.yanse" class="sss"> {{ item.leibie }}</el-tag></div>
            </div>
            <div class="zt2"><p>{{ item.gonxiao }}</p></div>
        </div>
    </div>
    </div>
</template>

<script>

export default {

    props:{
        dietlist:{
            type: Array,
            required: true,
        },
    }
}
</script>

<style>
.remen{
    width: 100%;
    height: 120px;
    border-bottom: 1px solid rgb(196, 191, 191);
    /* border-top: 1px solid black; */
    /* border-radius: 20px; */
    overflow: hidden;
}
.img{
    float: left;
    width: 120px;
    height: 120px;
    /* border: 2px solid #ccc; */
    display: flex;
    justify-content: center;
    align-items: center;
}
img{
    width: 100px;
    height: 100px;
    object-fit: cover;

}
.text{
    float: left;
    margin-left: 10px;
    height: 120px;
}
.zt1{
    height: 60px;
    line-height: 60px;
    display: flex;
}

.zt2{
    height: 60px;
    float: left;
}
.leibie{
    margin-left: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}
p{
    font-size: 13px;
    font-weight: 800;
    color: rgba(24, 21, 21, 0.822);
}
.cll{
    width: 100%;
    height: 78vh;
    overflow-y: auto;
    overflow-x: hidden;
}
</style>