<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
    }
</script>

<style lang="less">
    @import "./styles/reset.less";

    html, body, #app {
        width: 100%;
        height: 100%;
    }
    #app {
        background-color: #f7f7f7;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
    }
    ::-webkit-scrollbar {
        width: 5px;
    }
</style>
