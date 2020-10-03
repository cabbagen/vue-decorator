<template>
    <div class="common-modal">
        <Modal :title="title" v-model="visiable" @on-ok="handleModalOk">
            <div class="common-modal-row" v-for="(item, index) in fieldInfos" :key="index">
                <div class="common-modal-label">{{item.label}}</div>
                <div class="common-modal-value">
                    <component :is="getFieldComponent(item)" v-model="item.value" :placeholder="item.placeholder" />
                </div>
            </div>
        </Modal>
    </div>
</template>

<script type="text/javascript">
    export default {
        name: 'common-modal',
        data: function() {
            return {
                visiable: false,
            };
        },
        props: {
            value: Boolean,
            title: String,
            fieldInfos: Array,
        },
        methods: {
            getFieldComponent: function(item) {
                if (item.type === 'input') {
                    return 'Input';
                }
            },
            handleModalOk: function() {
                this.$emit('onOk');
            }
        },
        watch: {
            value: function(value) {
                this.visiable = value;
            },
            visiable: function(value) {
                this.$emit('input', value);
            }
        }
    };
</script>

<style lang="less" scoped>
    .common-modal-row {
        display: flex;
        margin-bottom: 12px;

        &:last-child {
            margin-bottom: 0px;
        }
    }
    .common-modal-label {
        width: 80px;
        height: 32px;
        line-height: 32px;
    }
    .common-modal-value {
        flex: 1;
        width: 100%;
    }
</style>

