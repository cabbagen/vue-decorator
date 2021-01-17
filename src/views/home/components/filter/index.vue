<template>
    <div :class="`${$prefix}-container`">
        <div :class="`${$prefix}-opecations`">
            <span>列表操作预留的位置</span>
        </div>
        <div :class="`${$prefix}-filter`">
            <div :class="`${$prefix}-filter-item`">
                <a-dropdown placement="bottomLeft" :trigger="['click']">
                    <span :class="`${$prefix}-filter-name`">
                        全部类型 <a-icon type="down"></a-icon>
                    </span>
                    <a-menu slot="overlay" :class="`${$prefix}-filter-dropdown`">
                        <a-menu-item
                            v-for="(item, index) in filters"
                            :key="index"
                            :name="item.value"
                            :selected="item.value === selected"
                            @click="handleSelectFilterItem(item)"
                        >
                            {{item.title}}
                        </a-menu-item>
                    </a-menu>
                </a-dropdown>
            </div>
            <div :class="`${$prefix}-filter-item`">
                <a-icon type="filter" class="question-icon"></a-icon>
            </div>
        </div>
    </div>
</template>

<style lang="less" src="./index.less"></style>
<script type="text/javascript" src="./index.js"></script>