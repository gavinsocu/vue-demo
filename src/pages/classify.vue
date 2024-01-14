<template>
    <div class="about">
        <div class="head">
            <Headersead></Headersead>
        </div>
        <div class="main">
            <h1>啥也没有</h1>
        </div>
    </div>

</template>

<script>
import Headersead from '../components/header.vue'
export default {
    name: 'about',
    components: {
        Headersead,
    },
}

</script>

<style scoped>
.about{
    height: 100%;
    width: 100vw;
}

.main{
    height: 88.4%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>