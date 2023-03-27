<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
import { message } from 'ant-design-vue';

export default {
    name: 'app',
}
</script>

<style lang="less">
    @import "./themes/reset.less";
</style>
