
<template>
    <div>
        <el-card class="box-card row-item">
            <div class="clearfix">
                <span>使用Three.js做了个超时空战士地图文件3D化效果的demo</span>
            </div>
        </el-card>
        <el-card class="box-card row-item">
            <div class="clearfix">
                <iframe
                    src="http://120.79.94.65:9000/files/mapTest/"
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
</style>