<template>
    <div>
        <el-card class="box-card row-item">
            <div class="clearfix">
                <span>测试登录</span>
            </div>
        </el-card>
        <el-card class="box-card row-item">
            <div class="clearfix">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="用户名">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input type="password" v-model="form.pwd"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit"
                            >登录</el-button
                        >
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                name: "",
                pwd: "",
            }
        }
    },
    methods:{
        onSubmit(){

        }
    }
}
</script>
<style lang="less" scoped>

</style>