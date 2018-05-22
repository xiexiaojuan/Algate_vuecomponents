import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/welcome',
            component: resolve => require(['components/menu/menu.vue'], resolve),
            children: [
                {
                    path: '/welcome',
                    component: resolve => require(['page/welcome.vue'], resolve)
                },
                // elementUI
                {
                    path: '/elementUI/upload',
                    component: resolve => require(['page/elementUI/eUI.upload.vue'], resolve)
                },
                {
                    path: '/elementUI/schedule',
                    component: resolve => require(['page/elementUI/eUI.schedule.vue'], resolve)
                },
                // customeUI
                {
                    path: '/customUI/icon',
                    component: resolve => require(['page/customUI/cUI.icon.vue'], resolve)
                }
            ]
        }
    ]
});
