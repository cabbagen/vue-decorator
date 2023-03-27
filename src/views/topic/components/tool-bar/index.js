import { mapState, mapActions } from 'vuex';
import { Icon, message } from 'ant-design-vue';

import network from '@/utils/network';
import prefix from '@/mixins/prefix.mixin.js';

import CommonDecoration from '@/components/decoration/index.vue';
import CreateTemplateModal from '../create-template-modal/index.vue';

const defaultOpecations = [{
    type: 'edit',
    icon: 'edit',
    text: '网站编辑',
}, {
    type: 'save',
    icon: 'save',
    text: '存为模板',
}, {
    type: 'setting',
    icon: 'setting',
    text: '网站设置',
}];

export default {
    name: 'view-topic-tool-bar',
    mixins: [prefix],
    components: {
        'a-icon': Icon,
        'commom-decoration': CommonDecoration,
        'create-template-modal': CreateTemplateModal,
    },
    computed: {
        projectId: function() {
            return this.$route.params.projectId || '';
        },
        ...mapState('page', {
            selectedPageId: state => state.selectedPageId,
            selectedPageModules: state => state.selectedPageModules,
        }),
    },
    data: function() {
        return {
            modalVisible: false,
            decorationVisible: false,
            opecations: defaultOpecations,
        };
    },

    mounted: function() {
        this.handleFetchProjectInfo();
    },

    methods: {
        ...mapActions('page', ['createPageModule']),

        handleFetchProjectInfo: function() {
            network.get(`/cms/project/${this.projectId}`).then(result => {
                if (result.code !== 100200) {
                    return;
                }
                if (result.data.templateId > 0) {
                    this.opecations = this.opecations.filter(item => item.type === 'edit');
                }
            });
        },

        handleOpecationItem: function(type) {
            if (type === 'edit') {
                this.decorationVisible = true;
                return;
            }
            if (type === 'save') {
                this.modalVisible = true;
                return;
            }
            if (type === 'setting') {
                console.log('网站设置');
                message.info('该功能暂未开放');
            }
        },
        hanleDecoraionCancel: function() {
            this.decorationVisible = false;
        },
        handleAddModule: function(item) {
            if (!this.selectedPageId) {
                message.info("请先选择装饰页面");
                return;
            }
            const params = {
                type: item.type,
                pageId: this.selectedPageId,
                sortNo: this.selectedPageModules.length + 1,
                content: JSON.stringify(item.struct),
            };
            this.createPageModule(params);
        },
        handleTemplateModalOk: function(data) {
            const payload = Object.assign({}, data, { projectId: parseInt(this.projectId, 10) });

            network.post('/cms/template/save', payload).then(result => {
                if (result.code !== 100200) {
                    return;
                }
                message.success('模板保存成功');
                this.modalVisible = false;
            });
        },
        handleTemplateModalCancel: function() {
            this.modalVisible = false;
        },
    }
}
