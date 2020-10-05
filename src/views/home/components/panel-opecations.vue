<template>
    <div class="vh-opecation-container">
        <div class="vh-opecations">
            <span>列表操作</span>
        </div>
        <div class="vh-filter">
            <div class="vh-filter-item">
                <Dropdown trigger="click">
                    <span class="vh-filter-name">
                        全部类型 <Icon type="ios-arrow-down"></Icon>
                    </span>
                    <DropdownMenu slot="list" class="vh-filter-dropdown">
                        <DropdownItem v-for="(item, index) in filters" :key="index">{{item.title}}</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
            <div class="vh-filter-item">
                <Icon type="ios-funnel-outline" class="question-icon" />
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">

export default {
    name: 'view-home-opecations',
    data: function() {
        return {
        };
    },
    props: ['filters'],
}
</script>

<style lang="less" scoped>
    .vh-opecation-container {
        display: flex;
        justify-content: space-between;
        padding-top: 10px;
    }
    .vh-opecations {
        height: 32px;
        display: flex;
        line-height: 32px;
    }
    .vh-filter {
        height: 32px;
        display: flex;
        line-height: 32px;
    }
    .vh-filter-item {
        margin-left: 20px;
    }
    .vh-filter-name {
        cursor: pointer;
    }
    .vh-filter-dropdown {
        width: 120px;
    }
    .question-icon {
        font-size: 16px;
    }
</style>
