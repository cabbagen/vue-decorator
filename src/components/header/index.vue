<template>
    <div class="common-header">
        <div class="ch-left">
            <div class="ch-logo">
                <img src="https://www.processon.com/assets/imgs/logo_small_.png" alt="logo" />
            </div>
            <div class="ch-custom-opecation">
                <slot name="ch-custom-opecation"></slot>
            </div>
        </div>
        <div class="ch-right">
            <div class="ch-opecation-btns">
                <div v-for="(item, index) in opecations" :key="index">
                    <a href="">{{item.name}}</a>
                </div>
            </div>
            <div class="ch-user-notice">
                <Badge :dot="false">
                    <Icon type="md-notifications" />
                </Badge>
            </div>
            <div class="ch-user-meun">
                <dropdown>
                    <div class="ch-user-icon">
                        <img alt="user" src="https://cloudfront.modao.cc/uploads4/avatars/160/1608603/forum_132.jpeg" />
                        <icon type="ios-arrow-down"></icon>
                    </div>
                    <dropdown-menu slot="list">
                        <dropdown-item v-for="(value, index) in menus" :key="index">
                            {{value.name}}
                        </dropdown-item>
                    </dropdown-menu>
                </dropdown>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default {
        name: 'common-header',
        data: function() {
            return {
                menus: [{
                    name: '个人中心',
                }, {
                    name: '退出登录'
                }],
                opecations: [{
                    name: '素材广场',
                }, {
                    name: '模版中心',
                }, {
                    name: '教程指引'
                }, {
                    name: '关于我们'
                }]
            };
        },
    }
</script>
<style lang="less" scoped>
    @import "../../styles/theme.less";

    .common-header {
        width: 100%;
        height: 46px;
        display: flex;
        padding: 0 40px;
        box-sizing: border-box;
        justify-content: space-between;
        background-color: #ffffff;
        box-shadow: 0px 5px 5px #f3f3f3;
        position: relative;
        z-index: 10;
    }
    .ch-left {
        display: flex;
        padding-top: 8px;
        box-sizing: border-box;
    }
    .ch-logo img {
        height: 30px;
        display: inline-block;
    }
    .ch-search {
        margin: 1px 0 0 60px;
        /deep/ .ivu-icon {
            line-height: 28px !important;
        }
        /deep/ input {
            height: 28px;
            color: #555555;
            font-size: 12px;
            padding-left: 16px;
            border-radius: 20px;
            background-color: #eeeeee;
        }
    }
    .ch-right {
        display: flex;
    }
    .ch-opecation-btns {
        display: flex;
        align-self: center;
        margin-right: 40px;

        a {
            color: #333333;
            margin-right: 40px;
            display: inline-block;

            &:hover {
                color: @base-color;
            }
        }
    }
    .ch-user-notice {
        font-size: 20px;
        margin-right: 20px;
        align-self: center;

        /deep/ .ivu-badge-dot {
            top: 2px;
            right: -9px;
        }
    }
    .ch-user-meun {
        cursor: pointer;
    }
    .ch-user-meun .ch-user-icon img {
        width: 34px;
        height: 34px;
        margin-top: 6px;
        display: inline-block;
        border-radius: 50%;
    }
    .ch-user-meun .ch-user-icon i {
        margin-left: 10px;
        position: relative;
        top: -10px;
    }
</style>









