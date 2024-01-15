<template>
    <div class="head">
        <backHead :title="title"></backHead>
    </div>
    <div class="main">
        <redCard/>
    </div>
    </template>
    
<script>
import backHead from '../../components/backHead.vue';
import redCard from '../../components/redCard.vue';
export default {
    name: 'myMassage',
    components: {
    backHead,redCard
    },
    data() {
    return {
        title: '浏览记录',
    };
    },
};
</script>
