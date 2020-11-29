<template>
    <div :class="`${$prefix}-container`">
        <common-header />
        <div :class="`${$prefix}-content-panel`">
            <div :class="`${$prefix}-website-map`">
                <website-map />
            </div>
            <div :class="`${$prefix}-website-topic`">

            </div>
            <div :class="`${$prefix}-website-tools`">

            </div>
        </div>
    </div>
</template>

<style lang="less" src="./index.less"></style>
<script type="text/javascript" src="./index.js"></script>
