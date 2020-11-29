<template>
    <div :class="`${$prefix}-container`">
        <div :class="`${$prefix}-search`">
            <Input search placeholder="Enter something..." />
        </div>
        <div :key="index" v-for="(item, index) in pages" @click="handlePageChange(item)" @dblclick="handleEditPage(item)" :class="selectedPageId === item.id ? `selected ${$prefix}-panel-item` : `${$prefix}-panel-item`">
            <span :class="`${$prefix}-panel-name`">{{item.name}}</span>
        </div>
        <!-- <common-modal v-model="visiable" :title="title" :fieldInfos="fieldInfos" @onOk="handleModalOK" /> -->
    </div>
</template>

<style lang="less" src="./index.less"></style>
<script type="text/javascript" src="./index.js"></script>
