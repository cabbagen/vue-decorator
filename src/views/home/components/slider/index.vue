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
                :class="[`${$prefix}-menus-item`, selectedMenuItemKey == item.key ? 'selected' : '']"
                @click="handleSelectMenuItem(item)"
            >
                <a-icon :type="item.icon" />
                <span>{{item.name}}</span>
            </div>
        </div>
        <div :class="`${$prefix}-button`">
            <p>自主建站平台</p>
        </div>
    </div>
</template>

<style lang="less" src="./index.less"></style>
<script type="text/javascript" src="./index.js"></script>
