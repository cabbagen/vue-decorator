<template>
    <div :class="`${$prefix}-slider`">
        <div :class="`${$prefix}-new-btn`">
            <a-icon type="plus" />
            <span>新建项目</span>
        </div>
        <div :class="`${$prefix}-menus`">
            <div
                v-for="(item, index) in menus"
                :key="index"
                :class="[`${$prefix}-menus-item`, selectedMenuItemIndex == item.state ? 'selected' : '']"
                @click="handleSelectMenuItem(item.state)"
            >
                <a-icon :type="item.icon" />
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
