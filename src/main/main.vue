<template>
    <div class="main">
        <div class="mainHead">
            <Headersead/>
        </div>
        <div class="mainBody">
            <home/>
        </div>
    </div>
</template>

<script>
import Headersead from './header.vue'
import home from '../home/home.vue'

export default {
    name: 'home',
    components: {
        Headersead,home
    },
}
</script>

<style scoped>
.main{
    height: 100vh;
    width: 100vw;
}

.mainHead{
    height: 7vh;
    width: 100vw;
    background-color: #409EFF;
    display: flex;
    align-items: center;
}

.mainBody{
   height: 93vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
