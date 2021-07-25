<template>
    <div :class="`${$prefix}-container`">
        <div :class="`${$prefix}-left`">
            <div :class="`${$prefix}-logo`" @click="handleToHome">
                <img src="https://www.processon.com/assets/imgs/logo_small_.png" alt="logo" />
            </div>
            <div :class="`${$prefix}-custom-opecation`">
                <slot name="ch-custom-opecation"></slot>
            </div>
        </div>
        <div :class="`${$prefix}-right`">
            <div :class="`${$prefix}-opecation-btns`">
                <div v-for="(item, index) in opecations" :key="index">
                    <router-link :to="item.link">{{item.name}}</router-link>
                </div>
            </div>
            <div :class="`${$prefix}-user-notice`">
                <a-badge :dot="true">
                    <a-icon type="bell" />
                </a-badge>
            </div>
            <div :class="`${$prefix}-user-meun`">
                <a-dropdown placement="bottomRight">
                    <div :class="`${$prefix}-user-icon`">
                        <img alt="user" src="https://cloudfront.modao.cc/uploads4/avatars/160/1608603/forum_132.jpeg" />
                        <a-icon type="down" />
                    </div>
                    <a-menu slot="overlay">
                        <a-menu-item v-for="(value, index) in menus" :key="index">
                            <div :class="`${$prefix}-menu-item`" @click="handleTriggerItemOpecation(value)">{{value.name}}</div>
                        </a-menu-item>
                    </a-menu>
                </a-dropdown>
            </div>
        </div>
    </div>
</template>

<style lang="less" src="./index.less"></style>
<script type="text/javascript" src="./index.js"></script>
