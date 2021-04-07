<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    position: absolute;
}
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
}
* {
    padding: 0px;
    margin: 0px;
    text-decoration: none;
    list-style: none;
}
</style>
