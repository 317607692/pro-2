<template>
    <div class="skill">
        <div class="item" v-for="(item, index) in data" :key="index">
            <h3>{{ item.title }}</h3>
            <div class="text">
                <p
                    v-for="(contentItem, contentIndex) in item.content"
                    :key="contentIndex"
                    v-html="contentItem.text"
                ></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            data: [
                {
                    title: "安卓息屏保持CPU唤醒（需要Root）",
                    content: [
                        {
                            text: "启动唤醒：echo aaa > /sys/power/wake_lock"
                        }, {
                            text: "关闭唤醒：echo aaa > /sys/power/wake_unlock"
                        }, {
                            text: "原理是通过给wake_lock加入事件，当安卓系统没有处理完事件时cpu是不会睡眠的"
                        }
                    ]
                },
                {
                    title: "清华大学镜像源更换",
                    content: [{
                        text: "<a href='https://mirrors.tuna.tsinghua.edu.cn/help/termux/'>Termux 镜像源地址</a>"
                    }, 
                    // {
                    //     text: "apt update && apt upgrade"
                    // }, {
                    //     text: "或者直接修改以下文件："
                    // }, {
                    //     text: "$PREFIX/etc/apt/sources.list"
                    // }, {
                    //     text: "deb https://mirrors.tuna.tsinghua.edu.cn/termux/termux-packages-24 stable main"
                    // }, {
                    //     text: "$PREFIX/etc/apt/sources.list.d/science.list"
                    // }, {
                    //     text: "deb https://mirrors.tuna.tsinghua.edu.cn/termux/science-packages-24 science stable"
                    // }, {
                    //     text: "$PREFIX/etc/apt/sources.list.d/game.list"
                    // }, {
                    //     text: "deb https://mirrors.tuna.tsinghua.edu.cn/termux/game-packages-24 games stable"
                    // }
                    ]
                }
            ]
        }
    }
}
</script>
<style lang="less" scoped>
.item {
    h3 {
        @line-height: 40px;
        margin-bottom: 10px;
        line-height: @line-height;
    }
    .text {
        margin-left: 48px;
        p {
            line-height: 40px;
        }
    }
}
</style>