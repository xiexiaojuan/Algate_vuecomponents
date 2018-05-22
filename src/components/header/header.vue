<style>
    @import 'header.postcss';
</style>
<template>
    <header>
        <div class="c_logo">
            <li class="logo f_l"><router-link to="/welcome"><img src="../../assets/images/logo.png"></router-link></li>
            <span>{{message}}</span>
            <el-button class="f_r" type="primary" size="small" @click="J_components">依赖</el-button>
        </div>
    </header>
</template>
<script>
export default {
    data () {
        return {
            message: 'Welcome to ALGate vue-components!',
            navs: []
        };
    },
    methods: {
        J_components() {
            this.$notify({
                title: '依赖',
                dangerouslyUseHTMLString: true,
                message: `<ul>
                    <li><tag class="el-tag el-tag--small" size="small">Js动画</tag> -- animejs <a href="https://github.com/juliangarnier/anime" target="_blank">@地址</a></li>
                </ul>`,
                duration: 0
            });
        }
    }
};
</script>
