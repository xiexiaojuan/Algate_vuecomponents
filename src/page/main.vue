<template>
    <div>
        <headerDiv/>
        <router-view/>
    </div>
</template>
<script>
import headerDiv from 'components/header/header.vue';

export default {
    components: {
        headerDiv
    }
};
</script>
