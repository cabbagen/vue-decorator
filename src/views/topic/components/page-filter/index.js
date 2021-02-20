import prefix from '@/mixins/prefix.mixin.js';
import { mapState, mapActions, mapMutations } from 'vuex';
import { Icon, Input, Tooltip, Dropdown, Menu } from 'ant-design-vue';
import CreatePageModal from '../create-page-modal/index.vue';

export default {
    name: 'view-topic-page-filter',
    mixins: [prefix],
    components: {
        'a-icon': Icon,
        'a-menu': Menu,
        'a-menu-item': Menu.Item,
        'a-tooltip': Tooltip,
        'a-dropdown': Dropdown,
        'a-input-search': Input.Search,
        'create-page-modal': CreatePageModal,
    },
    computed: {
        projectId: function() {
            return this.$route.params.projectId || '';
        },
        ...mapState('page', {
            pages: state => state.pages,
            selectedPageId: state => state.selectedPageId,
        }),
    },
    data: function() {
        return {
            searchText: '',
            filteredPages: [],

            modalInfo: {
                title: '',
                pageInfo: null,
                visible: false,
            },
        };
    },
    mounted: function() {
        this.getPages({ projectId: this.projectId });
    },
    methods: {
        ...mapActions('page', ['getPages', 'editPage', 'removePage']),

        ...mapMutations('page', ['handleSelectedPageChange']),

        handleInputSearch: function(value) {
            this.searchText = value;
            this.filteredPages = !!value ? this.filteredPages.filter(item => new RegExp(value).test(item.name)) : this.pages;
        },
        handleSelectPage: function(item) {
            this.handleSelectedPageChange(item.id);
        },
        handleCreatePage: function() {
            this.modalInfo = Object.assign({}, this.modalInfo, {
                visible: true,
                title: '创建页面',
            });
        },
        handleModalOk: function(pageInfo) {
            const completedInfo = Object.assign({}, pageInfo, {
                projectId: parseInt(this.projectId, 10), 
            });
            this.editPage(completedInfo);
            this.handleModalCancel();
        },
        handleModalCancel: function() {
            this.modalInfo = Object.assign({}, this.modalInfo, {
                visible: false,
            });
        },
        handleEditPage: function(item) {
            if (!item) {
                return;
            }
            this.modalInfo = Object.assign({}, this.modalInfo, {
                visible: true,
                title: '编辑页面',
                pageInfo: item,
            });
        },
        handleCopyPage: function(item) {
            if (!item) {
                return;
            }
            this.editPage(Object.assign({}, item, { id: 0 }));
        },
        handleDeletePage: function(item) {
            if (!item) {
                return;
            }
            this.removePage({ id: item.id, projectId: parseInt(this.projectId, 10) });
        },
    },
    watch: {
        pages: function(value) {
            this.searchText = '';
            this.filteredPages = value;
        },
    }
}
