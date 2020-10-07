import moment from 'moment';
import prefix from '@/mixins/prefix.mixin.js';
import { mapState, mapActions, mapMutations } from 'vuex';
import CommonTable from '@/components/table/index.vue';
import PanelFilter from '../panel-filter/index.vue';

export default {
    name: 'view-home-panel',
    mixins: [prefix],
    components: {
        'common-table': CommonTable,
        'cp-panel-filter': PanelFilter,
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
    computed: mapState('project', {
        projects: state => state.projects,
        pagination: state => state.pagination,
        filterSelected: state => state.search.type || 0,
    }),
    mounted: function() {
        this.getProjects();
    },
    methods: {
        ...mapActions('project', ['getProjects', 'handleUpdateProject']),

        ...mapMutations('project', ['updateProjectState']),

        handleSelectFilterItem: function(item) {
            this.updateProjectState({
                search: {
                    name: '', type: item,
                },
            });
            this.getProjects();
        },
        
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
                opecations: ['预览', '发布', '删除'],
            }];
            return columns;
        },
        handleProjectClick: function(item) {
            this.$router.push({ path: '/topic', query: { projectId: item.id }});
        },
        handleOpetationItem: function(item, record) {
            const stateMap = {
                '发布': 1,
                '删除': -1,
            };
            if (typeof stateMap[item] === 'undefined') {
                return;
            }

            this.handleUpdateProject({ id: record.id, state: stateMap[item] }).then(() => {
                this.getProjects();
            });
        },
        handlePaginationChange: function(pageNo) {
            this.updateProjectState({
                pagination: {
                    ...this.pagination, pageNo: pageNo - 1,
                },
            });
            this.getProjects();
        },
    }
}