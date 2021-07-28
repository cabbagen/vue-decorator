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
            <div v-if="templates.length === 0" :class="`${$prefix}-content-empty`">
                <a-empty :description="'暂无数据模板'"></a-empty>
            </div>
            <div v-else :class="`${$prefix}-column-content`" v-for="(column, index) in columns" :key="index">
                <div :class="`${$prefix}-template-item`" :key="tIndex" v-for="(tItem, tIndex) in column">
                    <div :class="`${$prefix}-template-cover`">
                        <img :src="tItem.cover || 'https://imgpub.chuangkit.com/designTemplate/2021/07/18/fd705879-9ffd-4610-94d3-31d8fa9e7b51_thumb?v=1626606000000&x-oss-process=image/resize,w_600/sharpen,100/format,webp'" />
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