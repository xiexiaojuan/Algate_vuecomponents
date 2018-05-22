<template>
    <div id="app">
        <headerDiv/>
        <router-view/>
    </div>
</template>
<script>
import './assets/style/reset.css';
import './assets/style/default.css';
import './assets/style/iconfont.css';
import headerDiv from '@/components/header/header.vue';

export default {
    components: {
        headerDiv
    }
};
</script>
