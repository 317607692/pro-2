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
        </el-card>
        <!-- <div class="el-card main">wtf</div> -->
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
@top-height: 70px;
@tab-height: 30px;
@content-padding: 10px;

.main {
    position: relative;
    min-height: 100%;
    box-sizing: border-box;
    // min-height: calc(100% - @top-height - @tab-height - @content-padding * 2);
}
</style>