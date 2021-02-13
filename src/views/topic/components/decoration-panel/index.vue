<template>
    <div :class="`${$prefix}-container`">
        <div :class="`${$prefix}-mobile`">
            <div v-for="(item, index) in selectedPageModules" :key="index" :class="`${$prefix}-row`">
                <component :is="`tc-${item.type}`" v-bind="item" />
            </div>
        </div>
    </div>
</template>

<style lang="less" src="./index.less"></style>
<script type="text/javascript" src="./index.js"></script>
