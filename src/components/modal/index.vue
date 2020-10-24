<template>
    <div :class="`${$prefix}-container`">
        <Modal :title="title" v-model="visiable" @on-ok="handleModalOk">
            <div :class="`${$prefix}-row`" v-for="(item, index) in fieldInfos" :key="index">
                <div :class="`${$prefix}-label`">{{item.label}}</div>
                <div :class="`${$prefix}-value`">
                    <component :is="getFieldComponent(item)" v-model="item.value" :placeholder="item.placeholder" />
                </div>
            </div>
        </Modal>
    </div>
</template>

<style lang="less" src="./index.less"></style>
<script type="text/javascript" src="./index.js"></script>