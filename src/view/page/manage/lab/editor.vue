<template>
    <div>
        <el-card class="box-card row-item">
            <div class="clearfix">
                <span>富文本编辑器</span>
            </div>
        </el-card>
        <el-card class="box-card row-item">
            <div class="clearfix text">
                <p>引入这玩意极其多东西，可不是npm一波安装就能搞定的事情</p>
                <p>npm install @tinymce/tinymce-vue -S</p>
                <p>npm install tinymce -S</p>
                <p>js：</p>
                <p>import tinymce from "tinymce/tinymce";</p>
                <p>import Editor from "@tinymce/tinymce-vue";</p>
                <p>import 'tinymce/themes/silver/theme'</p>
                <p>import "tinymce/icons/default/icons";</p>
                <p>难点来了：必须正确放置文件</p>
                <p>在项目根目录创建/static/tinymce/，放入node_modules/tinymce/的skins文件夹</p>
                <p>同目录下和创建langs文件夹，放入下载的字体文件zh_CN.js</p>
                <p>html块：&lt;editor v-model=&quot;input&quot; :init=&quot;init&quot;&gt;&lt;/editor&gt;</p>
                <p>data中：init.language_url: "/static/tinymce/langs/zh_CN.js"</p>
                <p>data中：init.skin_url: "/static/tinymce/skins/ui/oxide"</p>
            </div>
        </el-card>
        <el-card class="box-card row-item">
            <div class="clearfix">
                <editor v-model="input" :init="init"></editor>
            </div>
        </el-card>
    </div>
</template>
<script>
import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";
import 'tinymce/themes/silver/theme'
import "tinymce/icons/default/icons";
export default {
    data() {
        return {
            input: "",
            init: {
                language_url: "/static/tinymce/langs/zh_CN.js",//语言包位置
                language: "zh_CN",//使用的语言
                skin_url: "/static/tinymce/skins/ui/oxide",//主题色

                height: 500, //编辑器高度
                branding: false,//是否禁用“Powered by TinyMCE”
                menubar: true,//顶部菜单栏显示
            }
        }
    },
    components: {
        Editor
    },
    mounted() {
        tinymce.init({})
    }
}
</script>
<style lang="less" scoped>
.text{
    p{
        line-height: 40px;
    }
}
</style>