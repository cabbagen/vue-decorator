<template>
    <div :class="`${$prefix}-container`">
        <common-header>
            <template v-slot:ch-custom-opecation>
                <div class="common-header-search">
                    <a-input v-model="name" style="width: 220px" placeholder="搜索项目" @pressEnter="handleInputEnter">
                        <a-icon type="search" slot="suffix" />
                    </a-input>
                </div>
            </template>
        </common-header>
        <div :class="`${$prefix}-content`">
            <div :class="`${$prefix}-content-left`">
                <cp-slider @handleCreateProject="handleCreateProject" />
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
        <cp-create-modal
            title="新建项目"
            :visible="modalVisible"
            @handleModalOk="handleModalOk"
            @handleModalCancel="handleModalCancel"
        />
    </div>
</template>

<style lang="less" src="./index.less"></style>
<script type="text/javascript" src="./index.js"></script>