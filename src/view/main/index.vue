<template>
    <div class="page">
        <div class="main">
            <div class="card">wtf</div>
        </div>
        <div class="footer"></div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.page {
    width: 100%;
    height: 100%;
    .main {
        height: calc(100% - 30% - (2 * 100px));
        position: relative;
    }
    .card {
        margin: 100px;
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
    .footer {
        width: 100%;
        height: 30%;
        position: absolute;
        bottom: 0px;

        background-color: #f7fbfd;
    }
}
</style>