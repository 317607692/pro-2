<template>
    <div>
        <el-card class="box-card row-item">
            <div class="clearfix">
                <span>一些比较有用的东西</span>
            </div>
        </el-card>
        <el-card class="box-card row-item">
            <div class="clearfix">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column type="index" label="#"> </el-table-column>
                    <el-table-column prop="title" label="项目名" width="180">
                    </el-table-column>
                    <el-table-column label="性感地址，点击就跳" width="auto">
                        <template slot-scope="scope">
                            <div>
                                <a :href="scope.row.href" target="_blank">
                                    {{ scope.row.href }}
                                </a>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tableData: [
                {
                    title: "PhotoShop阴影转CSS",
                    href: "https://psd2css.mezw.com/",
                },
                {
                    title: "Ruffle-HTML5的Flash模拟器",
                    href: "https://ruffle.rs/",
                },
                {
                    title: "Three.js",
                    href: "http://www.webgl3d.cn/",
                },
                {
                    title: "MTK x20 CPU调整",
                    href: "https://tieba.baidu.com/p/6910141244",
                },
            ]
        }
    }
}
</script>
<style lang="less" scoped>
</style>