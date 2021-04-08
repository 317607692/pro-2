<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content-box" :class="{ 'content-collapse': collapse }">
            <v-tags></v-tags>
            <div class="content">
                <transition name="move" mode="out-in">
                    <keep-alive :include="tagsList">
                        <router-view></router-view>
                    </keep-alive>
                </transition>
                <el-backtop target=".content"></el-backtop>
                <!-- <router-view></router-view> -->
            </div>
        </div>
    </div>
</template>
<script>
import vHead from "@/view/page/manage/components/Header"
import vSidebar from "@/view/page/manage/components/Sidebar"
import vTags from '@/view/page/manage/components/Tags.vue';
import bus from './components/bus';
export default {
    data() {
        return {
            tagsList: [],
            collapse: false
        };
    },
    components: {
        vHead,
        vSidebar,
        vTags
    },
    created() {
        bus.$on('collapse-content', msg => {
            this.collapse = msg;
        });

        // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
        bus.$on('tags', msg => {
            let arr = [];
            for (let i = 0, len = msg.length; i < len; i++) {
                msg[i].name && arr.push(msg[i].name);
            }
            this.tagsList = arr;
        });
    }
};
</script>
<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
/deep/.el-scrollbar__wrap {
    // overflow-x: hidden;
}
.main {
    width: 100%;
    height: 100%;
    position: relative;
    .left {
        // width: 201px;
        float: left;
    }
    .sidebar {
    }
    .content {
    }
}
.main-content {
    height: 100%;
}
/deep/.row-item {
    margin-top: 10px;
    &:first-child {
        margin-top: 0px;
    }
}
</style>
<style>
</style>