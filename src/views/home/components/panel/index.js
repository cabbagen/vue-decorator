import moment from 'moment';
import network from '@/utils/network';
import prefix from '@/mixins/prefix.mixin.js';
import { getPrefix } from '@/utils/utils';
import { Table } from 'ant-design-vue';
import { mapState, mapActions, mapMutations } from 'vuex';
import PanelFilter from '../filter/index.vue';

export default {
    name: 'view-home-panel',
    mixins: [prefix],
    components: {
        'a-table': Table,
        'cp-filter': PanelFilter,
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
        },
        stateFormat: function(state) {
            const stateMap = {
                '1': '已上线',
                '2': '未上线',
                '-1': '已删除',
            };
            return stateMap[state] || '';
        },
    },
    computed: mapState('project', {
        projects: state => state.projects,
        pagination: state => state.pagination,
    }),
    mounted: function() {
        const panelKey = this.$route.params.panel || 'normal';

        if (panelKey === 'mark') {
            this.updateProjectState({ search: { isMark: 2 } });
        }
        if (panelKey === 'deleted') {
            this.updateProjectState({ search: { state: -1 } });
        }
        this.getProjects();
    },
    methods: {
        ...mapActions('project', ['getProjects', 'handleUpdateProject']),

        ...mapMutations('project', ['updateProjectState']),

        handleSelectFilterItem: function(item) {
            this.updateProjectState({
                pagination: { current: 1 },
                search: { name: '', type: item.value > 0 ? item.value : undefined },
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
                title: '状态',
                dataIndex: 'state',
                scopedSlots: { customRender: 'table-state' },
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
        handlePaginationChange: function(pagination) {
            this.updateProjectState({
                pagination: {
                    ...this.pagination, current: pagination.current,
                },
            });
            this.getProjects();
        },
        handleOpetationItemByMark: function(record) {
            this.handleUpdateProject({ id: record.id, isMark: record.isMark === 1 ? 2 : 1 }).then(() => {
                this.getProjects();
            });
        },
        handleOpetationItemByPublish: function(record) {
            this.handleUpdateProject({ id: record.id, state: record.state === 1 ? 2 : 1 }).then(() => {
                network.get(`/proxy/cms/projects/${record.state === 1 ? 'remove' : 'generate'}/${record.id}`);
                this.getProjects();
            });
        },
        handleOpetationItemByDelete: function(record) {
            this.handleUpdateProject({ id: record.id, state: record.state === -1 ? 2 : -1 }).then(() => {
                this.getProjects();
            });
        },
        handleProjectPreview: function(record) {
            window.open(`${getPrefix()}static/${record.id}/index.html`, '_blank');
        }
    }
}
