<template>
    <div class="main-content">
        <el-card class="box-card row-item">
            <div class="clearfix">
                <span>Termux 一些杂七杂八的东西</span>
            </div>
        </el-card>
        <el-tabs type="border-card" class="row-item">
            <el-tab-pane label="奇淫技巧">
                <com-skill></com-skill>
            </el-tab-pane>
            <el-tab-pane label="配置管理">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import comSkill from "./components/com-skill"
export default {
    components:{
        comSkill
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>