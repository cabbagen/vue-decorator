<template>
    <div :class="`${$prefix}-container`">
        <common-header>
            <template v-slot:ch-custom-opecation>
                <div :class="`${$prefix}-top-description`">
                    <span>快速建站快从模板开始</span>
                </div>
            </template>
        </common-header>
        <div :class="`${$prefix}-content`">
            <div :class="`${$prefix}-content-left`">
                <slider></slider>
            </div>
            <div :class="`${$prefix}-content-right`">
                <panel></panel>
            </div>
        </div>
    </div>
</template>

<style lang="less" src="./index.less"></style>
<script type="text/javascript" src="./index.js"></script>