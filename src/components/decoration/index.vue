<template>
    <a-drawer
        width="460"
        title="装饰选卡"
        :mask="false"
        :visible="visible"
        :get-container="getContainer"
        :wrapClassName="`${$prefix}-drawer-wrap`"
        @close="handleCloseDecoration"
    >
        <div :class="`${$prefix}-container`">
            <div :class="`${$prefix}-preview`">
                <div :class="`${$prefix}-preview-item`" v-for="(item, index) in previewedComponents" :key="index">
                    <component :is="item.tagName" v-bind="item.struct" />
                    <div :class="`${$prefix}-preview-item-mask`">
                        <div :class="`${$prefix}-preview-item-btn`" @click="handleAddModule(item)">添加模块</div>
                    </div>
                </div>
            </div>
            <div :class="`${$prefix}-component-groups`">
                <div
                    :key="index"
                    :class="[`${$prefix}-component-group-item`, item.type === groupType ? 'selected' : '']"
                    @click="handleSelectGroup(item)"
                    v-for="(item, index) in groups"
                >
                    <span>基础组件</span>
                </div>
            </div>
        </div>
    </a-drawer>
</template>

<style lang="less" src="./index.less"></style>
<script type="text/javascript" src="./index.js"></script>
