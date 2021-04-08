<template>
    <div>
        <el-card class="box-card row-item">
            <div class="clearfix">
                <span>Ruffle 实验</span>
            </div>
        </el-card>
        <el-card class="box-card row-item">
            <div class="clearfix">
                <p>
                    目前Ruffle对Action
                    script 3支持完全不行，但是对1，2版本支持还行，超时空战士1已经是我上小学时的flash游戏了。
                </p>
                <p>
                    搞了一下Ruffle成功运行在页面上，并且移动端也能很好适配，但是Ruffle自身性能还不够好，快速移动屏幕范围时会屌卡
                </p>
                <p>
                    游戏大小7M，不过因为放在我的阿里云小水管上最多只有500k/s的下载速度，点开下面的演示可能会白屏20秒左右，包括Ruffle的启动
                </p>
            </div>
        </el-card>
        <el-card class="box-card row-item">
            <div class="clearfix">
                <span>演示页面：</span>

                <el-button
                    class="float-right"
                    size="mini"
                    round
                    v-if="showIframe"
                    @click="onClick(false)"
                    >点击关闭</el-button
                >
                <el-button
                    class="float-right"
                    size="mini"
                    round
                    v-if="!showIframe"
                    @click="onClick(true)"
                    >点击加载</el-button
                >
            </div>

            <div class="clearfix" v-if="showIframe">
                <br />
                <iframe
                    src="http://120.79.94.65:9000/files/Ruffle/index.html"
                    frameborder="0"
                ></iframe>
            </div>
        </el-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            showIframe: false,
        }
    },
    methods: {
        onClick(flag) {
            this.showIframe = flag;
        }
    }
}
</script>
<style lang="less" scoped>
p {
    line-height: 24px;
}
iframe {
    width: 100%;
    height: 100%;
    min-height: 720px;
    display: block;
}
.float-right {
    float: right;
}
</style>