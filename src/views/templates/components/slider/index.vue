<template>
     <div :class="`${$prefix}-slider`">
        <div :class="`${$prefix}-template-btn`">
            <span>模板精选</span>
        </div>
        <div :class="`${$prefix}-template-category`">
            <div :key="index" :class="`${$prefix}-template-item`" v-for="(item, index) in categories">
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