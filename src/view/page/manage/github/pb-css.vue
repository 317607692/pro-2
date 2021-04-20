<template>
    <div>
        <el-card class="box-card row-item">
            <div class="clearfix">
                <span>Plazma Burst 官网样式（pb-css）</span>
            </div>
        </el-card>
        <el-card class="box-card row-item">
            <div class="clearfix">
                <p>
                    怎么讲呢，早期Eric写官网的时候我还是个初中生呢，他不用写代码转而用一些网站生成工具弄官网，虽然不怎么乱，但是代码看起来真的头疼
                </p>
                <p>
                    所以我仿照官网整了一套不太全的官网样式，持续更新中，显得蛋疼的时候我就拿这个复习CSS
                </p>
            </div>
        </el-card>
        <el-card class="box-card row-item">
            <div class="clearfix">
                <p>
                    官网地址：
                    <a href="http://www.plazmaburst2.com/?s=2&a=">
                        http://www.plazmaburst2.com/?s=2&a=
                    </a>
                </p>
                <p>
                    演示地址：
                    <a href="http://1.15.133.68:9000/files/pb-css/">
                        http://1.15.133.68:9000/files/pb-css/
                    </a>
                </p>
                <p>
                    Github地址：
                    <a
                        href="https://github.com/317607692/plazma-burst-2-website-css-rebuild.git"
                    >
                        https://github.com/317607692/plazma-burst-2-website-css-rebuild.git
                    </a>
                </p>
            </div>
        </el-card>
        <el-card class="box-card row-item">
            <div  class="clearfix">
                <span>演示页面：</span>
                
                <el-button class="float-right" size="mini" round v-if="showIframe" @click="onClick(false)">点击关闭</el-button>
                <el-button class="float-right" size="mini" round v-if="!showIframe" @click="onClick(true)">点击加载</el-button>
            </div>
            
            <div class="clearfix" v-if="showIframe">
                <br/>
                <iframe
                    src="http://1.15.133.68:9000/files/pb-css/"
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
    methods:{
        onClick(flag){
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
.float-right{
    float: right;
}
</style>