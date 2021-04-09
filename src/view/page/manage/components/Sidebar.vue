<template>
    <div class="sidebar">
        <el-menu
            class="sidebar-el-menu"
            :default-active="onRoutes"
            :collapse="collapse"
            background-color="#324157"
            text-color="#bfcbd9"
            active-text-color="#20a0ff"
            unique-opened
            router
        >
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu
                                v-if="subItem.subs"
                                :index="subItem.index"
                                :key="subItem.index"
                            >
                                <template slot="title">{{
                                    subItem.title
                                }}</template>
                                <el-menu-item
                                    v-for="(threeItem, i) in subItem.subs"
                                    :key="i"
                                    :index="threeItem.index"
                                    >{{ threeItem.title }}</el-menu-item
                                >
                            </el-submenu>
                            <el-menu-item
                                v-else
                                :index="subItem.index"
                                :key="subItem.index"
                                >{{ subItem.title }}</el-menu-item
                            >
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
import bus from './bus';
export default {
    data() {
        return {
            collapse: false,
            items: [
                {
                    icon: 'fa fa-home',
                    index: 'dashboard',
                    title: '乱七八糟 の 首页'
                },
                {
                    icon: 'fa fa-server',
                    index: 'server',
                    title: '服务器 の 破事'
                },
                {
                    icon: 'fa fa-terminal',
                    index: 'termux',
                    title: '安卓 の Termux'
                },
                {
                    icon: 'fa fa-bitcoin',
                    index: 'mine',
                    title: '矿老板 の 自觉'
                },
                {
                    icon: 'fa fa-github',
                    index: '#github',
                    title: 'Github の Repository',
                    subs: [
                        {
                            icon: 'fa fa-github',
                            index: 'pb-css',
                            title: 'pb-css',
                        },
                    ]
                },
                {
                    icon: 'fa fa-hourglass-2',
                    index: 'doc',
                    title: '总之就是有用 の 东西'
                },
                {
                    icon: 'fa fa-bomb',
                    index: '#lab',
                    title: '实验 の 室',
                    subs: [
                        {
                            index: 'ruffle',
                            title: 'ruffle',
                        },
                        {
                            index: 'editor',
                            title: 'editor',
                        },
                    ]
                },
                {
                    icon: 'fa fa-cog',
                    index: '#admin',
                    title: '鹳狸猿 の 后台',
                    subs: [
                        {
                            index: 'admin',
                            title: 'index',
                        },
                    ]
                },
            ]
        };
    },
    computed: {
        onRoutes() {
            return this.$route.path.replace('/', '');
        }
    },
    created() {
        // 通过 Event Bus 进行组件间通信，来折叠侧边栏
        bus.$on('collapse', msg => {
            this.collapse = msg;
            bus.$emit('collapse-content', msg);
        });
    }
};
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}
.sidebar > ul {
    height: 100%;
}
.el-submenu__title > i,
.el-menu-item > i {
    display: inline-block;
    margin-right: 5px;
    width: 24px;
    text-align: center;
    font-size: 18px;
    vertical-align: middle;
}
</style>
