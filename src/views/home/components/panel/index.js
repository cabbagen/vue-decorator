import moment from 'moment';
import prefix from '@/mixins/prefix.mixin.js';
import CommonTable from '@/components/table/index.vue';
import PanelOpecation from '../panel-opecation/index.vue';

export default {
    name: 'view-home-panel',
    mixins: [prefix],
    components: {
        'common-table': CommonTable,
        'cp-panel-opecation': PanelOpecation,
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
    props: ['projects', 'pagination'],
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