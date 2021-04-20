<template>
    <div>
        <el-card class="box-card row-item">
            <div class="clearfix">
                <span>氪金的阿里云上目前部署了的一些东西</span>
            </div>
        </el-card>
        <el-card class="box-card row-item">
            <div class="clearfix">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column type="index" label="#"> </el-table-column>
                    <el-table-column prop="title" label="项目名" width="300">
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
                    title: "轻量级网盘webd",
                    href: "http://1.15.133.68:9212/",
                }, {
                    title: "nginx文件目录模式",
                    href: "http://1.15.133.68:9000/files/",
                },
                {
                    title: "宝塔面板",
                    href: "这地址还真不能给你看 →_→",
                },
                {
                    title: "thirteen的服务器",
                    href: "http://47.111.70.53:8787/#/",
                },
                {
                    title: "Hover.css备用（官网已炸，github还在）",
                    href: "http://1.15.133.68:9000/files/Hover-master/",
                }
            ]
        }
    }
}
</script>
<style lang="less" scoped>
</style>