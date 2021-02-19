import { mapState, mapActions } from 'vuex';
import { Icon, message } from 'ant-design-vue';
import prefix from '@/mixins/prefix.mixin.js';
import CommonDecoration from '@/components/decoration/index.vue';

const defaultOpecations = [{
    type: 'edit',
    icon: 'edit',
    text: '网站编辑',
}, {
    type: 'download',
    icon: 'cloud-download',
    text: '源码下载',
},/* {
    type: 'setting',
    icon: 'setting',
    text: '网站设置',
}*/];

export default {
    name: 'view-topic-tool-bar',
    mixins: [prefix],
    components: {
        'a-icon': Icon,
        'commom-decoration': CommonDecoration,
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
            decorationVisible: false,
            opecations: defaultOpecations,
        };
    },
    methods: {
        ...mapActions('page', ['createPageModule']),

        handleOpecationItem: function(type) {
            if (type === 'edit') {
                this.decorationVisible = true;
                return;
            }
            if (type === 'download') {
                window.open("http://localhost:7001/cms/projects/download/" + this.projectId, '_blank');
                return;
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
        }
    }
}
