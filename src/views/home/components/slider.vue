<template>
    <div class="vh-slider">
        <div class="vhs-new-btn">
            <icon type="md-add" />
            <span>新建项目</span>
        </div>
        <div class="vhs-menus">
            <div
                :key="index"
                v-for="(item, index) in menus"
                :class="`vhs-menus-item ${selectedMenuItemIndex == item.state ? 'selected' : ''}`"
                @click="handleSelectMenuItem(item.state)"
            >
                <icon :type="item.icon" />
                <span>{{item.name}}</span>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import { mapState, mapMutations, mapActions } from 'vuex';

    export default {
        name: 'view-home-slider',
        data: function() {
            return {
                menus: [{
                    id: 1,
                    state: 1,
                    name: '全部项目',
                    icon: 'logo-buffer',
                }, {
                    id: 2,
                    state: 3,
                    name: '最近修改',
                    icon: 'ios-time',
                }, {
                    id: 3,
                    state: 2,
                    name: '标星项目',
                    icon: 'md-star-outline',
                }, {
                    id: 4,
                    state: -1,
                    name: '回收站',
                    icon: 'md-trash',
                }],
            };
        },
        computed: mapState('project', {
            selectedMenuItemIndex: state => state.state,
        }),
        methods: {
            ...mapActions('project', ['getProjects']),

            ...mapMutations('project', ['updateCurrentState']),

            handleSelectMenuItem: function(stateValue) {
                this.updateCurrentState(stateValue);
                this.getProjects({ pageNo: 0, name: '' });
            },
        },
    }
</script>

<style lang="less" scoped>
    @import "../../../styles/theme.less";

    .vh-slider {
        width: 100%;
        height: 100%;
        background-color: #ffffff;
        overflow: hidden;
    }
    .vhs-new-btn {
        width: 200px;
        height: 34px;
        line-height: 34px;
        background-color: #ffffff;
        text-align: center;
        font-size: 12px;
        background-color: @base-color;
        margin: 30px auto 20px auto;
        color: #ffffff;
        cursor: pointer;

        i {
            font-size: 16px;
            position: relative;
            top: 1px;
            margin-right: 2px;
        }
        &:hover {
            background-color: #f95858;
        }
    }
    .vhs-menus-item {
        width: 100%;
        height: 38px;
        line-height: 38px;
        padding: 0 30px;
        cursor: pointer;

        &:hover {
            color: #000000;
        }
        &.selected {
            color: #000000;
            background-color: #dddddd;
        }
        i {
            font-size: 18px;
            margin-right: 5px;
        }
    }
</style>
