<template>
    <div :class="`${$prefix}-container`">
        <div :class="`${$prefix}-header`">
            <cp-panel-filter
                :filters="types"
                :selected="filterSelected"
                @handleSelectFilterItem="handleSelectFilterItem"
            />
        </div>
        <div :class="`${$prefix}-content`">
            <common-table
                :columns="columns"
                :dataSource="projects"
                :pagination="pagination"
                @handleOpetationItem="handleOpetationItem"
                @handlePaginationChange="handlePaginationChange"
            />
        </div>
    </div>
</template>

<style lang="less">
    @import url('./index.less');
</style>

<script type="text/javascript">
    import Index from './index.js';
    export default Index;
</script>