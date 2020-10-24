<template>
    <div :class="`${$prefix}-container`">
        <common-header>
            <template v-slot:ch-custom-opecation>
                <div class="common-header-search">
                    <i-input v-model="name" suffix="ios-search" style="width: 220px" placeholder="搜索项目" @on-enter="handleInputEnter" />
                </div>
            </template>
        </common-header>
        <div :class="`${$prefix}-content`">
            <div :class="`${$prefix}-content-left`">
                <cp-slider />
            </div>
            <div :class="`${$prefix}-content-right`">
                <div :class="`${$prefix}-content-right-title`">
                    <h3>我的工作台</h3>
                </div>
                <div :class="`${$prefix}-content-right-panel`">
                    <cp-panel />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" src="./index.less"></style>
<script type="text/javascript" src="./index.js"></script>