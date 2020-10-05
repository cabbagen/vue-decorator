<template>
    <div class="vh-panel">
        <div class="vh-panel-header">
            <cm-panel-opecation :filters="types" />
        </div>
        <div class="vh-panel-content">
            <common-table :columns="columns" :dataSource="projects" />
        </div>
    </div>
</template>

<script type="text/javascript">
import moment from 'moment';
import { checkType } from '@/utils/utils';
import CommonTable from '@/components/table/index.vue';
import PanelOpecation from './panel-opecations.vue';

export default {
    name: 'view-home-panel',
    components: {
        'common-table': CommonTable,
        'cm-panel-opecation': PanelOpecation,
    },
    data: function() {
        return {
            types: [
                { title: '全部类型', value: 0 },
                { title: 'PC站点', value: 1 },
                { title: '手机站点', value: 2 },
                { title: '小程序站点', value: 3 },
            ],
            columns: this.getTableColumns(),
        };
    },
    props: ['projects'],
    methods: {
        getTableColumns: function() {
            const columns = [{
                flex: 4,
                title: '名称',
                dataIndex: 'name',
            }, {
                flex: 2,
                title: '项目/页面数',
                dataIndex: 'pageCount',
            }, {
                flex: 2,
                title: '创建时间',
                dataIndex: 'createdAt',
                render: (value) => {
                    return value ? moment(value).format('YYYY-MM-DD HH:mm:ss') : '-';
                },
            }, {
                flex: 2,
                title: '操作',
                dataIndex: 'opecation',
                render: (value, record, h) => {
                    return h('div', [
                        h('a', { attrs: { style: 'margin-right: 10px' } }, '预览'),
                        h('a', { attrs: { style: 'margin-right: 10px' } }, '发布'),
                        h('a', '删除'),
                    ]);
                },
            }];

            return columns;
        },
        handleProjectClick: function(item) {
            this.$router.push({ path: '/topic', query: { projectId: item.id }});
        },
    }
}
</script>

<style lang="less" scoped>
    .vh-panel-content {
        margin-top: 10px;
    }
    .opecation-item {
        margin: 0 10px;
    }
</style>