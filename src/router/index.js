import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'main',
            meta: {
                title: 'main',
                auth: false,
                roles: [],
            },
            component: () => import('@/view/main/index.vue'),
        },
        {
            path: '/test',
            name: 'test',
            meta: {
                title: 'test',
                auth: false,
                roles: [],
            },
            component: () => import('@/view/test.vue'),
        }, {
            path: '/index',
            name: 'index',
            meta: {
                title: 'index',
                auth: false,
                roles: [],
            },
            component: () => import('@/view/index.vue'),
            children: [
                {
                    path: 'test',
                    meta: {
                        title: 'test',
                        auth: false,
                        roles: [],
                    },
                    component: () => import('@/view/test/test.vue'),
                }
            ]
        },
    ]
})
