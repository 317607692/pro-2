<template>
    <div class="main-content">
        <el-card class="box-card main">
            <div slot="header" class="clearfix">
                <span>乱七八糟 の 首页</span>
            </div>
            <div>
                首页啥也木有
                <i class="fa fa-terminal"></i>
            </div>
            <div>
                <s-chart
                    class="schart"
                    canvasId="bar"
                    :options="options1"
                ></s-chart>
            </div>
        </el-card>
        <el-card shadow="hover" style="height: 252px">
            <div slot="header" class="clearfix">
                <span>语言详情</span>
            </div>
            Vue
            <el-progress :percentage="71.3" color="#42b983"></el-progress
            >JavaScript
            <el-progress :percentage="24.1" color="#f1e05a"></el-progress>CSS
            <el-progress :percentage="13.7"></el-progress>HTML
            <el-progress :percentage="5.9" color="#f56c6c"></el-progress>
        </el-card>
    </div>
</template>
<script>
import SChart from "vue-schart"
export default {
    data() {
        return {
            options1: {
                type: 'bar',
                title: {
                    text: '最近一周各品类销售图'
                },
                bgColor: '#fbfbfb',
                labels: ['周一', '周二', '周三', '周四', '周五'],
                datasets: [
                    {
                        label: '家电',
                        fillColor: 'rgba(241, 49, 74, 0.5)',
                        data: [234, 278, 270, 190, 230]
                    },
                    {
                        label: '百货',
                        data: [164, 178, 190, 135, 160]
                    },
                    {
                        label: '食品',
                        data: [144, 198, 150, 235, 120]
                    }
                ]
            },
        }
    },
    components: {
        SChart
    }
}
</script>
<style lang="less" scoped>
@top-height: 70px;
@tab-height: 30px;
@content-padding: 10px;

.main {
    position: relative;
    min-height: 100%;
    box-sizing: border-box;
    // min-height: calc(100% - @top-height - @tab-height - @content-padding * 2);
}
.schart {
    height: 300px;
}
</style>