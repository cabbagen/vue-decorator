<template>
    <div :class="`${$prefix}-container`">
        <div :class="`${$prefix}-header`">
            <common-header></common-header>
        </div>
        <div :class="`${$prefix}-content`">
            <page-filter></page-filter>
            <decoration-panel></decoration-panel>
        </div>
        <tool-bar />
    </div>
</template>

<style lang="less" src="./index.less"></style>
<script type="text/javascript" src="./index.js"></script>
