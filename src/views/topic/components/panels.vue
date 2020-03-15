<template>
    <div class="vt-panels">
        <div
            :key="index"
            v-for="(item, index) in pages"
            @click="handlePageChange(item)"
            @dblclick="handleEditPage(item)"
            :class="selectedPageId === item.id ? 'selected vt-panel-item' : 'vt-panel-item'"
        >
            <template v-if="item.type === 'panel'">
                <div class="vt-panel-name">{{item.name}}</div>
            </template>
            <template v-else>
                <div class="vt-panel-add">
                    <Icon type="ios-add" />
                    <div style="marginTop: 10px">新增页面</div>
                </div>
            </template>
        </div>
        <common-modal v-model="visiable" :title="title" :fieldInfos="fieldInfos" @onOk="handleModalOK" />
    </div>
</template>

<script type="text/javascript">
    import CommonModal from '@/components/modal/index.vue';

    import { mapState, mapActions, mapMutations } from 'vuex';
    import { getQuery } from '@/utils/utils.js';

    export default {
        name: 'view-topic-panels',
        data: function() {
            return {
                visiable: false,
                title: '',
                fieldInfos: [{
                    type: 'input',
                    field: 'name',
                    label: '页面名称',
                    value: '',
                    placeholder: '请填写页面名称',
                }, {
                    type: 'input',
                    field: 'link',
                    label: '页面链接',
                    value: '',
                    placeholder: '请填写页面链接',
                }],
                currentPageId: 0,
            };
        },
        components: {
            CommonModal,
        },
        computed: mapState('page', {
            pages: state => {
                return state.pages.concat({ id: -1, type: 'opecation', name: '新增面板' });
            },

            selectedPageId: state => state.selectedPageId,

            projectId: () => {
                return parseInt(getQuery().projectId, 10);
            },
        }),
        mounted: function() {
            this.getPages({ projectId: this.projectId }).then(() => {
                const pageId = this.pages ? this.pages[0].id : 0;

                this.handleSelectedPageChange(pageId);
                this.getPageModules();
            });
        },
        methods: {
            ...mapActions('page', ['getPages', 'getPageModules', 'createPage']),

            ...mapMutations('page', ['handleSelectedPageChange']),

            handlePageChange: function(item) {
                if (item.type !== 'panel') {
                    return;
                }
                this.handleSelectedPageChange(item.id);
                this.getPageModules();
            },

            handleEditPage: function(info) {
                if (info.type !== 'panel') {
                    this.handleTrrigerPageSettingModal();
                    return;
                }
                this.handleTrrigerPageSettingModal(info);
            },

            handleTrrigerPageSettingModal: function(info) {
                this.visiable = true;

                this.fieldInfos = this.fieldInfos.map(item => {
                    return Object.assign({}, item, { value: typeof info !== 'undefined' ? info[item.field] : '' });
                });

                this.title = typeof info !== 'undefined' ? '修改项目页面' : '新增项目页面';
                this.currentPageId = typeof info !== 'undefined' ? info.id : 0;
            },

            handleModalOK: function() {
                const params = {
                    id: this.currentPageId,
                    projectId: this.projectId,
                };

                this.fieldInfos.forEach(item => params[item.field] = item.value);
                this.createPage(params);
            }
        },
    }
</script>

<style lang="less" scoped>
    @import "../../../theme/mixins.less";

    .vt-panels {
        width: 100%;
        height: 100%;
        padding: 0 10px 0 15px;
    }
    .vt-panel-item {
        position: relative;
        margin: 10px auto;
        border: 1px solid #dddddd;
        border-radius: 4px;
        height: 220px;
        cursor: pointer;
        background-color: #ffffff;

        &.selected {
            color: #ff6161;
            border-color: #ff6161;
        }
    }
    .vt-panel-name {
        position: absolute;
        top: 60px;
        left: 50%;
        font-size: 16px;
        transform: translateX(-50%);

        .forbid-selected();
    }
    .vt-panel-add {
        position: absolute;
        top: 50px;
        left: 50%;
        text-align: center;
        transform: translateX(-50%);

        .forbid-selected();
        
        i {
            font-size: 36px;
            
            .forbid-selected();
        }
    }
</style>
