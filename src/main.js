// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import 'babel-polyfill';
import App from './App';
import router from './router';

// 按需引入
import {
    Button,
    Col,
    Menu,
    Submenu,
    MenuItem,
    Notification,
    Tag,
    Loading
} from 'element-ui';

Vue.component(Button.name, Button);
/* or */
Vue.use(Col);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Notification);
Vue.use(Tag);

Vue.use(Loading.directive);

Vue.prototype.$notify = Notification;
Vue.prototype.$loading = Loading.service;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
});
