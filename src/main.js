// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import 'babel-polyfill';
import App from './App';
import routers from './router';
import Router from 'vue-router';

// 按需引入
import {
    Button,
    Row,
    Col,
    Menu,
    Submenu,
    MenuItem,
    Notification,
    Tag,
    Card,
    Loading
} from 'element-ui';

Vue.component(Button.name, Button);
/* or */
Vue.use(Row);
Vue.use(Col);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Notification);
Vue.use(Tag);
Vue.use(Card);

Vue.use(Loading.directive);

Vue.prototype.$notify = Notification;
Vue.prototype.$loading = Loading.service;

Vue.config.productionTip = false;

Vue.use(Router);
// 使用配置文件规则
const router = new Router({
    // mode: 'history',
    routes: routers
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
});
