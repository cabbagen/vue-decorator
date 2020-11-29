import CommonModal from '@/components/modal/index.vue';
import { mapState, mapActions, mapMutations } from 'vuex';

import prefix from '@/mixins/prefix.mixin.js';

const defaultFieldInfos = [{
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
}];

export default {
    name: 'view-topic-website-map',
    mixins: [prefix],
    components: {
        'common-modal': CommonModal,
    },
    data: function() {
        return {
            // 查询关键字
            searchText: '',

            // 新建 modal 相关
            modalInfo: {
                pageId: 0,
                visible: false,
                title: '新建页面',
                fieldInfos: defaultFieldInfos
            },
        };
    },
    computed: {
        ...mapState('page', {
            pages: state => state.pages,
            selectedPageId: state => state.selectedPageId,
        }),
        projectId: function() {
            return this.$route.params.id;
        },
    },
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
            this.handleSelectedPageChange(item.id);
            this.getPageModules();
        },
        
        handleEditPage: function(info) {
            // if (info.type !== 'panel') {
            //     this.handleTrrigerPageSettingModal();
            //     return;
            // }
            // this.handleTrrigerPageSettingModal(info);
        },
        
        handleTrrigerPageSettingModal: function(info) {
            // this.visiable = true;

            // this.fieldInfos = this.fieldInfos.map(item => {
            //     return Object.assign({}, item, { value: typeof info !== 'undefined' ? info[item.field] : '' });
            // });

            // this.title = typeof info !== 'undefined' ? '修改项目页面' : '新增项目页面';
            // this.currentPageId = typeof info !== 'undefined' ? info.id : 0;
        },
        
        handleModalOK: function() {
            // const params = {
            //     id: this.currentPageId,
            //     projectId: this.projectId,
            // };

            // this.fieldInfos.forEach(item => params[item.field] = item.value);
            // this.createPage(params);
        }
    },
}