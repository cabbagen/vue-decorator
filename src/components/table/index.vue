<template>
    <div class="common-table">
        <div class="common-table-header">
            <div class="common-table-column" v-for="(item, index) in columns" :key="index" :style="{flex: item.flex || 1}">
                <span>{{item.title}}</span>
            </div>
        </div>
        <div class="common-table-body">
            <div class="common-table-body-row" v-for="(item, index) in innerDataSource" :key="item.rowKey || index">
                <div class="common-table-body-row-item" v-for="(cItem, cIndex) in columns" :key="cIndex" :style="{flex: cItem.flex || 1}">
                    <common-table-cell :value="item[cItem.dataIndex]" :record="item" :render="cItem.render" />
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
import TableCell from './cell.js';

export default {
    name: 'common-table',
    data: function() {
        return {
            innerDataSource: this.dataSource,
        };
    },
    components: {
        'common-table-cell': TableCell,
    },
    props: ['columns', 'dataSource'],
    methods: {
        handleInitInnerDataSource: function(dataSource) {
            this.innerDataSource = dataSource.map(dataItem => Object.assign({}, dataItem, { isSelected: false }));
        }
    },
    watch: {
        dataSource: function(newValue, oldValue) {
            if (JSON.stringify(newValue) === JSON.stringify(oldValue)) {
                return;
            }
            this.handleInitInnerDataSource(newValue);
        },
    },
}
</script>

<style lang="less" scoped>
    .common-table-header {
        height: 56px;
        display: flex;
        line-height: 56px;
        border-bottom: 1px solid #eeeeee;
    }
    .common-table-header .common-table-column {
        width: 100%;
    }
    .common-table-body-row {
        height: 48px;
        display: flex;
        line-height: 48px;
        border-bottom: 1px solid #eeeeee;
    }
    .common-table-body-row .common-table-body-row-item {
        width: 100%;
    }
</style>