<template>
    <div class="head">
        <backHead :title="title"></backHead>
    </div>
    <div class="main"></div>
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
            title: '账本',
        };
        },
    };
    </script>
    