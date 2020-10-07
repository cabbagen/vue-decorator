<style lang="less">
    @import url("./index.less");
</style>

<script type="text/javascript">
    import Index from './index.js';
    export default Index;
</script>

<template>
    <div :class="`${$prefix}-container`">
        <div :class="`${$prefix}-header`">
            <div :class="`${$prefix}-column`" v-for="(item, index) in columns" :key="index" :style="{flex: item.flex || 1}">
                <span>{{item.title}}</span>
            </div>
        </div>
        <div :class="`${$prefix}-body`">
            <div :class="`${$prefix}-body-row`" v-for="(item, index) in innerDataSource" :key="item.rowKey || index">
                <div :class="`${$prefix}-body-row-item`" v-for="(cItem, cIndex) in columns" :key="cIndex" :style="{flex: cItem.flex || 1}">
                    <div v-if="cItem.opecations" :class="`${$prefix}-body-opecation-row`">
                        <span v-for="(oItem, oIndex) in cItem.opecations" :key="oIndex" @click="handleOpetationItem(oItem, item)">{{oItem}}</span>
                    </div>
                    <common-table-cell v-else :value="item[cItem.dataIndex]" :record="item" :render="cItem.render" />
                </div>
            </div>
        </div>
        <div :class="`${$prefix}-pagination`">
            <div :class="`${$prefix}-pagination-fl`">
                <span>{{`共 ${pagination.total || 0} 条`}}</span>
            </div>
            <div :class="`${$prefix}-pagination-fr`">
                <Page
                    :current="pagination.pageNo + 1"
                    :page-size="pagination.pageSize"
                    :total="pagination.total"
                    @on-change="handlePaginationChange"
                />
            </div>
        </div>
    </div>
</template>
