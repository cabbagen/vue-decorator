<template>
    <div :class="`${$prefix}-container`">
        <div :class="`${$prefix}-header`">
            <a-tooltip placement="right" arrowPointAtCenter>
                <template slot="title">
                    <span>创建新页面</span>
                </template>
                <a-icon type="plus" class="plus" @click="handleCreatePage" />
            </a-tooltip>
            <a-input-search
                v-model="searchText"
                placeholder="检索页面名称"
                @search="handleInputSearch"
                :class="`${$prefix}-search`"
            ></a-input-search>
        </div>
        <div :class="`${$prefix}-body`">
            <div
                :key="index"
                :class="[`${$prefix}-page-item`, item.id === selectedPageId ? 'selected' : '' ]"
                @click="handleSelectPage(item)"
                v-for="(item, index) in filteredPages"
            >
                <a-icon type="snippets" />
                <span>{{item.name}}</span>
                <a-dropdown :trigger="['contextmenu']">
                    <a-icon type="ellipsis" class="ellipsis" />
                    <a-menu slot="overlay">
                        <a-menu-item>
                            <span :class="`${$prefix}-menu-item`" @click="handleEditPage(item)">编辑页面</span>
                        </a-menu-item>
                        <a-menu-item>
                            <span :class="`${$prefix}-menu-item`" @click="handleCopyPage(item)">创建副本</span>
                        </a-menu-item>
                        <a-menu-item>
                            <span :class="`${$prefix}-menu-item`" @click="handleDeletePage(item)">删除</span>
                        </a-menu-item>
                    </a-menu>
                </a-dropdown>
            </div>
        </div>
        <div :class="`${$prefix}-button`">
            <p>自主建站平台</p>
        </div>
        <create-page-modal v-bind="modalInfo" @handleModalOk="handleModalOk" @handleModalCancel="handleModalCancel" />
    </div>
</template>

<style lang="less" src="./index.less"></style>
<script type="text/javascript" src="./index.js"></script>
