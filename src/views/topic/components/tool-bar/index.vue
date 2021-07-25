<template>
    <div :class="`${$prefix}-container`">
        <div :key="index" :class="`${$prefix}-opecation-row`" v-for="(item, index) in opecations" >
            <div :class="`${$prefix}-opecation-item`" @click="handleOpecationItem(item.type)" >
                <span>{{item.text}}</span>
                <a-icon :type="item.icon" />
            </div>
        </div>
        <commom-decoration
            :visible="decorationVisible"
            @onCancel="hanleDecoraionCancel"
            @onAddModule="handleAddModule"
        />
        <create-template-modal
            title="项目保存为模板"
            :visible="modalVisible"
            @handleModalOk="handleTemplateModalOk"
            @handleModalCancel="handleTemplateModalCancel"
        />
    </div>
</template>

<style lang="less" src="./index.less"></style>
<script type="text/javascript" src="./index.js"></script>
