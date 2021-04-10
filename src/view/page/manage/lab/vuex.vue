<template>
    <div>
        <el-card class="box-card row-item">
            <div class="clearfix">
                <span>Vuex 状态集实验</span>
            </div>
        </el-card>
        <el-card class="box-card row-item">
            <el-form label-width="100px">
                <el-form-item label="输入：">
                    <el-input
                        v-model="input"
                        placeholder="请输入内容"
                    ></el-input>
                </el-form-item>
                <el-form-item label="双向绑定：">
                    <el-input v-model="input" disabled></el-input>
                </el-form-item>
                <el-form-item label="Vuex：">
                    <el-input v-model="store" clearable></el-input>
                </el-form-item>
            </el-form>

            <div>
                <el-button type="primary" @click="onClickSet">更新store内容</el-button>
                <el-button type="primary" @click="onClickGet">获取store内容</el-button>
            </div>
        </el-card>
    </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex';
export default {
    data() {
        return {
            input: "",
            store: "",
        }
    },
    computed:{
        ...mapGetters('test',['getTestObject']),
    },
    methods: {
        ...mapActions('test',['setTestObject']),
        onClickGet(){
            this.store = this.getTestObject;
        },
        onClickSet(){
            this.setTestObject(this.input);
            this.store = this.getTestObject;
        }
    },
    mounted() {
        console.log(this);
    }
}
</script>
<style lang="less" scoped>
</style>