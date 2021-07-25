<template>
    <div :class="`${$prefix}-container`">
        <div :class="`${$prefix}-search`">
            <a-input-search
                size="large"
                enter-button="搜索"
                style="width: 800px"
                placeholder="请输入模板名称"
                v-model="search.search"
                @search="handleTemplateSearch"
            />
        </div>
        <div :class="`${$prefix}-content`">
            <div :class="`${$prefix}-column-content`" v-for="(column, index) in columns" :key="index">
                <div :class="`${$prefix}-template-item`" :key="tIndex" v-for="(tItem, tIndex) in column">
                    <div :class="`${$prefix}-template-cover`">
                        <img :src="tItem.cover" />
                    </div>
                    <div :class="`${$prefix}-template-description`">
                        <span>{{tItem.name}}</span>
                        <span>
                            <a-icon type="plus" title="添加" @click="handleCreateProjectByTemplate(tItem)" />
                            <a-icon type="edit" title="编辑" @click="handleEditTemplate(tItem)" />
                            <a-icon type="delete" title="删除" @click="hangleDeleteTemplate(tItem)" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" src="./index.less"></style>
<script type="text/javascript" src="./index.js"></script>