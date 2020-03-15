<template>
    <div class="vt-mobile">
        <div class="vt-mobile-inner">
            <div class="vt-mobile-scroll">
                <div class="drop-target-content">
                    <draggable
                        class="drop-target-inner"
                        v-model="componentsForState"
                        :options="{ group: { name: 'mobile', put: true, pull: 'clone' } }"
                        @change="handleDraggableChange"
                    >
                        <div v-for="(item, index) in componentsForState" :key="index">
                            <component
                                :key="item.id || +new Date()"
                                :componentId="item.id || +new Date()"
                                :is="handleSelectComponent(item.type)"
                                :data="item"
                                @handleComponentDelete="handleComponentDelete"
                                @handleComponentOk="handleComponentOk"
                            >
                            </component>
                        </div>
                    </draggable>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import draggable from "vuedraggable";
    import { getQuery } from '@/utils/utils.js';
    import { mapState, mapActions, mapMutations } from 'vuex';

    export default {
        name: 'view-topic-mobile',
        data: function() {
            return {
                componentsForState: [],
            };
        },
        props: {
            mobileComponents: Array,
        },
        computed: {
            ...mapState('page', {
                selectedPageId: state => state.selectedPageId,
            }),
            projectId: function() {
                return parseInt(getQuery().projectId, 10);
            },
        },
        components: {
            draggable,
        },
        mounted: function() {
            this.getMobileComponents();
        },
        methods: {
            ...mapActions('page', ['createPageModule', 'updatePageModule', 'sortPageModules', 'removePageModule']),

            getMobileComponents: function() {
                this.componentsForState = this.mobileComponents;
            },

            handleSelectComponent: function(type) {
                const data = window.ATopic.components.find(item => item.type === type);

                if (!data) {
                    return;
                }

                return data.componentEdit;
            },

            handleDraggableChange: function(event) {
                if (event.added) {
                    this.handleComponentCreate(event.added);
                }
                if (event.moved) {
                    this.handleComponentMove(event.moved);
                }
            },

            // 模块新增
            handleComponentCreate: function(data) {
                const component = window.ATopic.components.find(item => item.type === data.element.type);
                const params = {
                    id: 0,
                    type: data.element.type,
                    pageId: this.selectedPageId,
                    sortNo: data.newIndex + 1,
                    content: JSON.stringify(component.struct),
                };

                this.createPageModule(params);
            },

            // 模块移动
            handleComponentMove: function(data) {
                const sortInfo = this.getComponentSortInfo(data);
                this.sortPageModules({ sortInfo });
            },

            // 获取排序参数
            getComponentSortInfo: function(sortInfo) {
                const components = this.componentsForState.slice();

                components.splice(sortInfo.oldIndex, 1, 0);
                components.splice(sortInfo.newIndex, 0, sortInfo.element);

                return components.map((item, index) => ({ id: item.id, sortNo: index + 1 }));
            },

            // 删除模块
            handleComponentDelete: function(componentId) {
                this.removePageModule({ componentId });
            },
            
            // 更新模块内容
            handleComponentOk: function(componentId, data) {
                this.updatePageModule({id: componentId, content: JSON.stringify(data)});
            },
        },
        watch: {
            mobileComponents: function(oldValue, newValue) {
                this.getMobileComponents();
            },
        }
    }
</script>

<style lang="less" scoped>
    .vt-mobile-inner {
        width: 750px;
        height: 650px;
        padding: 93px 0 90px 0;
        margin: 20px auto 0 auto;
        background: no-repeat url("/images/mobile.png");
        background-size: contain;
    }
    .vt-mobile-scroll {
        width: 100%;
        height: 100%;
        overflow-y: scroll;
    }
    .drop-target-content {
        width: 264px;
        height: 458px;
        margin-left: 24px;
        
        &::-webkit-scrollbar {
            width: 2px;
        }
    }
    .drop-target-inner {
        width: 100%;
        height: 100%;
    }
</style>
