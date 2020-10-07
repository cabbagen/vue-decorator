<template>
    <div :class="`${$prefix}-container`">
        <div :class="`${$prefix}-opecations`">
            <span>列表操作预留的位置</span>
        </div>
        <div :class="`${$prefix}-filter`">
            <div :class="`${$prefix}-filter-item`">
                <Dropdown trigger="click" @on-click="handleSelectFilterItem">
                    <span :class="`${$prefix}-filter-name`">
                        全部类型 <Icon type="ios-arrow-down"></Icon>
                    </span>
                    <DropdownMenu slot="list" :class="`${$prefix}-filter-dropdown`">
                        <DropdownItem
                            :key="index"
                            :name="item.value"
                            v-for="(item, index) in filters"
                            :selected="item.value === selected"
                        >
                            {{item.title}}
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
            <div :class="`${$prefix}-filter-item`">
                <Icon type="ios-funnel-outline" class="question-icon" />
            </div>
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