<template>
    <div class="page pb-body">
        <div class="main">
            <div class="center">
                <div class="pb-container">
                    <div class="title">
                        <span>› Welcome to Luigi の 乱七八糟 引导页</span>
                    </div>
                    <div class="content">
                        <router-link class="pb-btn-get-map-id" :to="{path: '/manage'}">点击进入</router-link>
                        <!-- <a  href="javascript:;">
                            点击进入
                        </a> -->
                    </div>
                </div>
            </div>

            <!-- <div class="card">wtf</div> -->
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
@import "http://120.79.94.65:9000/files/pb-css/css/fix.css";
@import "http://120.79.94.65:9000/files/pb-css/css/pb.css";
.page {
    width: 100%;
    height: 100%;
    background-image: url("~@/assets/img/bg.jpg");
    background-position: center;
    background-repeat: no-repeat;
    .main {
        // height: calc(100% - 30% - (2 * 100px));
        height: 100%;
        position: relative;
    }
    .card {
        // margin: 100px;
        // width: 100%;/
        height: 100%;
        background: #fff;
        border: 1px solid #eaeefb;
        border-radius: 5px;
        box-sizing: border-box;
        text-align: center;
        position: relative;
        transition: all 0.3s ease-in-out;
        bottom: 0;
        &:hover {
            bottom: 6px;
            box-shadow: 0 6px 18px 0 rgb(232 237 250 / 50%);
        }
    }
    .center {
        position: absolute;
        width: 100%;
        top: 50%;
        margin-top: -170px;
        text-align: center;
        .pb-container {
            display: inline-block;
            .content {
                position: relative;
                overflow: hidden;
                height: 300px;
                .pb-btn-get-map-id {
                    position: absolute;
                    bottom: 15px;
                    right: 15px;
                }
            }
        }
    }
    .footer {
        width: 100%;
        height: 30%;
        position: absolute;
        bottom: 0px;

        background-color: #f7fbfd;
    }
}
</style>