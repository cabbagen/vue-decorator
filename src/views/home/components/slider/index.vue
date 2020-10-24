<template>
    <div :class="`${$prefix}-slider`">
        <div :class="`${$prefix}-new-btn`">
            <icon type="md-add" />
            <span>新建项目</span>
        </div>
        <div :class="`${$prefix}-menus`">
            <div
                :key="index"
                v-for="(item, index) in menus"
                @click="handleSelectMenuItem(item.state)"
                :class="[`${$prefix}-menus-item`, selectedMenuItemIndex == item.state ? 'selected' : '']"
            >
                <icon :type="item.icon" />
                <span>{{item.name}}</span>
            </div>
        </div>
        <div :class="`${$prefix}-button`">
            <p>自主建站，从这里开始</p>
        </div>
    </div>
</template>

<style lang="less" src="./index.less"></style>
<script type="text/javascript" src="./index.js"></script>