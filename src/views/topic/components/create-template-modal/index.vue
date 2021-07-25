<template>
    <a-modal :title="title" :visible="visible" @ok="handleModalOk" @cancel="handleModalCancel">
        <div :class="`${$prefix}-form-row`" v-for="(item, index) in fields" :key="index">
            <div :class="`${$prefix}-form-field ${item.isRequired ? 'is-required' : ''}`">
                <span>{{item.label}}:</span>
            </div>
            <div :class="`${$prefix}-form-value`">
                <component v-if="item.field !== 'categoryId'" :is="item.component" v-bind="item.props" v-model="modalInfo[item.field]" />
                <a-select v-else v-bind="item.props" v-model="modalInfo[item.field]" @search="handleCategorySearch" @change="handleCategoryChange">
                    <a-select-option v-for="(item) in categories" :key="item.id">
                        {{item.name}}
                    </a-select-option>
                </a-select>
            </div>
        </div>
        <div v-if="errorMsg" :class="`${$prefix}-error`">
            <span>{{errorMsg}}</span>
        </div>
    </a-modal>
</template>

<style lang="less" src="./index.less"></style>
<script type="text/javascript" src="./index.js"></script>