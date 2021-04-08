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
            children: [
                
            ]
        }, {
            path: '/manage',
            name: 'manage',
            redirect: '/manage/dashboard',
            meta: {
                title: 'manage',
                auth: false,
                roles: [],
            },
            component: () => import('@/view/page/manage/index.vue'),
            children: [
                {
                    path: 'test',
                    meta: {
                        title: 'test',
                        auth: false,
                        roles: [],
                    },
                    component: () => import('@/view/test/test.vue'),
                },
                {
                    name: "dashboard",
                    path: 'dashboard',
                    meta: {
                        title: '首页',
                        auth: false,
                        roles: [],
                    },
                    component: () => import('@/view/page/manage/dash-board/index.vue'),
                },
                {
                    name: "server",
                    path: 'server',
                    meta: {
                        title: '服务器上的项目',
                        auth: false,
                        roles: [],
                    },
                    component: () => import('@/view/page/manage/server/index.vue'),
                },
                {
                    name: "termux",
                    path: 'termux',
                    meta: {
                        title: 'termux',
                        auth: false,
                        roles: [],
                    },
                    component: () => import('@/view/page/manage/termux/list.vue'),
                },
                {
                    name: "mine",
                    path: 'mine',
                    meta: {
                        title: 'mine',
                        auth: false,
                        roles: [],
                    },
                    component: () => import('@/view/page/manage/mine/index.vue'),
                },
                {
                    name: "pb-css",
                    path: 'pb-css',
                    meta: {
                        title: 'pb-css',
                        auth: false,
                        roles: [],
                    },
                    component: () => import('@/view/page/manage/github/pb-css.vue'),
                },
                {
                    name: "doc",
                    path: 'doc',
                    meta: {
                        title: 'doc',
                        auth: false,
                        roles: [],
                    },
                    component: () => import('@/view/page/manage/doc/index.vue'),
                },
                {
                    name: "ruffle",
                    path: 'ruffle',
                    meta: {
                        title: 'ruffle',
                        auth: false,
                        roles: [],
                    },
                    component: () => import('@/view/page/manage/lab/ruffle.vue'),
                },
            ]
        },
    ]
})
