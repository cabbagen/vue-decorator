<template>
    <div class="vt-mods">
        <Collapse simple v-model="collapseIndex">
            <Panel v-for="(item, index) in groups" :key="index" :name="index.toString()">
                <span>{{item.title}}</span>
                <div slot="content">
                    <template v-if="item.components.length > 0">
                        <draggable
                            class="vt-mods-panel"
                            v-model="item.components"
                            :options="{ group: { name:'mobile-component', pull:'clone', put: false }, sort: false }"
                        >
                            <div
                                :key="subIndex"
                                :title="subItem.title"
                                class="vt-mods-panel-component"
                                v-for="(subItem, subIndex) in item.components"
                            >
                                <span>{{subItem.title | firstLetterFilter}}</span>
                            </div>
                        </draggable>
                    </template>
                    <template v-else>
                        <div class="vt-mods-panel-empty">
                            <span>暂无内容</span>
                        </div>
                    </template>
                </div>
            </Panel>
        </Collapse>
    </div>
</template>

<script type="text/javascript">
    import draggable from "vuedraggable";
    
    export default {
        name: 'view-topic-mods',
        data: function() {
            return {
                collapseIndex: '0',
                groups: window.ATopic.groups || [],
            };
        },
        components: {
            draggable,
        },
        filters: {
            firstLetterFilter: function(value) {
                return !value ? '' : value[0];
            },
        },
    }
</script>

<style lang="less" scoped>
    .vt-mods-panel {
        display: flex;
        padding: 0 10px;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .vt-mods-panel-component {
        width: 50px;
        height: 50px;
        margin-top: 10px;
        text-align: center;
        line-height: 50px;
        border-radius: 2px;
        color: #09acec;
        font-size: 20px;
        cursor: pointer;
        border: 1px solid #09acec;
        background-color: #ffffff;
    }
    .vt-mods-panel-empty {
        padding-left: 3px;
    }
</style>


