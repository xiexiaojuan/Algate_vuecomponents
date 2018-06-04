export default [
    {
        path: '/',
        redirect: '/welcome',
        component: resolve => require(['page/main.vue'], resolve),
        children: [
            {
                path: 'welcome',
                component: resolve => require(['page/welcome.vue'], resolve)
            },
            {
                path: 'components',
                component: resolve => require(['components/menu/menu.vue'], resolve),
                children: [
                    // elementUI
                    {
                        path: '/elementUI/upload',
                        component: resolve => require(['page/elementUI/eUI.upload.vue'], resolve)
                    },
                    {
                        path: '/elementUI/schedule',
                        component: resolve => require(['page/elementUI/eUI.schedule.vue'], resolve)
                    },
                    // customUI
                    {
                        path: '/customUI/icon',
                        component: resolve => require(['page/customUI/cUI.icon.vue'], resolve)
                    },
                    {
                        path: '/customUI/copyToClipboard',
                        component: resolve => require(['page/customUI/cUI.copyToClipboard.vue'], resolve)
                    }
                ]
            },
            // knowledge
            {
                path: 'knowledge',
                component: r => require.ensure([], () => r(require('page/knowledge.vue'))),
                // children: (r => {
                //     console.log(r.keys().map(key => {
                //         return {
                //             path: key.split('./')[1].split('.')[1],
                //             component: r(key)
                //         };
                //     }));
                //     return r.keys().map(key => {
                //         console.log(key, key.split('./')[1].split('.')[1], r(key));
                //         return {
                //             path: key.split('./')[1].split('.')[1],
                //             name: key.split('./')[1].split('.')[1],
                //             component: r(key)
                //         };
                //     });
                // })(require.context('page/knowledge', false, /\.vue$/))
                children: [
                    {
                        path: 'html5',
                        component: resolve => require(['page/knowledge/knowledge.html5.vue'], resolve)
                    }
                ]
            }
        ]
    }
];
