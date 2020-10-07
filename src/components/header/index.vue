<style lang="less">
    @import "./index.less";
</style>

<script type="text/javascript">
    import Index from "./index.js";
    export default Index;
</script>

<template>
    <div :class="`${$prefix}-container`">
        <div :class="`${$prefix}-left`">
            <div :class="`${$prefix}-logo`">
                <img src="https://www.processon.com/assets/imgs/logo_small_.png" alt="logo" />
            </div>
            <div :class="`${$prefix}-custom-opecation`">
                <slot name="ch-custom-opecation"></slot>
            </div>
        </div>
        <div :class="`${$prefix}-right`">
            <div :class="`${$prefix}-opecation-btns`">
                <div v-for="(item, index) in opecations" :key="index">
                    <a href="">{{item.name}}</a>
                </div>
            </div>
            <div :class="`${$prefix}-user-notice`">
                <Badge :dot="false">
                    <Icon type="md-notifications" />
                </Badge>
            </div>
            <div :class="`${$prefix}-user-meun`">
                <dropdown>
                    <div :class="`${$prefix}-user-icon`">
                        <img alt="user" src="https://cloudfront.modao.cc/uploads4/avatars/160/1608603/forum_132.jpeg" />
                        <icon type="ios-arrow-down"></icon>
                    </div>
                    <dropdown-menu slot="list">
                        <dropdown-item v-for="(value, index) in menus" :key="index">
                            {{value.name}}
                        </dropdown-item>
                    </dropdown-menu>
                </dropdown>
            </div>
        </div>
    </div>
</template>
