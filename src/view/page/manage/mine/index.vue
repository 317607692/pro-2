<template>
    <div>
        <el-card class="box-card row-item">
            <div class="clearfix">
                <span>关于挖矿的一些东西</span>
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
                                <a :href="scope.row.href" target="_blank">{{
                                    scope.row.href
                                }}</a>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="coin" label="币种" width="70">
                    </el-table-column>
                    <el-table-column prop="remark" label="备注" width="auto">
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
                    title: "xmrig",
                    href: "https://github.com/xmrig/xmrig",
                    coin: "XMR",
                    remark: "经测试可以在Termux下编译跑起来，但是无法调用安卓的libOpenCl.so进行gpu计算"
                },
                {
                    title: "pooler/cpuminer",
                    href: "https://github.com/pooler/cpuminer",
                    coin: "LTC",
                    remark: "经测试可以在Termux下的proot ubuntu ports编译跑起来"
                }
                
            ]
        }
    }
}
</script>
<style lang="less" scoped>
</style>