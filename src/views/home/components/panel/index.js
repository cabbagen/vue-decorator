import moment from 'moment';
import prefix from '@/mixins/prefix.mixin.js';
import { Table } from 'ant-design-vue';
import { mapState, mapActions, mapMutations } from 'vuex';
import PanelFilter from '../filter/index.vue';

export default {
    name: 'view-home-panel',
    mixins: [prefix],
    components: {
        'cp-filter': PanelFilter,
        'a-table': Table,
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
    filters: {
        dateFormat: function(dateString) {
            if (!dateString) {
                return '-';
            }
            return moment(dateString).format('YYYY-MM-DD HH:mm:ss');
        }
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
                    name: '', type: item.value,
                },
            });
            this.getProjects();
        },
        
        getTableColumns: function() {
            const columns = [{
                title: '名称',
                scopedSlots: { customRender: 'table-name' },
            }, {
                title: '项目/页面数',
                dataIndex: 'pageCount',
            }, {
                title: '创建时间',
                dataIndex: 'createdAt',
                scopedSlots: { customRender: 'table-created-at' },
            }, {
                title: '操作',
                scopedSlots: { customRender: 'table-opecation' },
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
        handlePaginationChange: function(pagination) {
            this.updateProjectState({
                pagination: {
                    ...this.pagination, current: pagination.current,
                },
            });
            this.getProjects();
        },
    }
}