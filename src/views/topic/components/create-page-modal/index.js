import { Icon, Input, Modal } from 'ant-design-vue';
import prefix from '@/mixins/prefix.mixin.js';

const defaultFields = [{
    field: 'name',
    label: '页面名称',
    component: 'a-input',
    isRequired: true,
    props: {
        placeholder: '请输入页面名称',
    },
}, {
    field: 'link',
    label: '页面链接',
    component: 'a-input',
    isRequired: true,
    props: {
        placeholder: '请输入页面链接',
    },
}, {
    field: 'remark',
    label: '备注',
    component: 'a-textarea',
    props: {
        placeholder: '请填写备注',
        autoSize: {
            minRows: 4, maxRows: 6 
        },
    },
}];

export default {
    name: 'view-topic-page-modal',
    mixins: [prefix],
    components: {
        'a-icon': Icon,
        'a-modal': Modal,
        'a-input': Input,
        'a-textarea': Input.TextArea,
    },
    computed: {
        projectId: function() {
            return this.$route.params.projectId || '';
        },
    },
    data: function() {
        return {
            errorMsg: '',
            modalInfo: {},
            fields: defaultFields,
        };
    },
    props: ['visible', 'title', 'pageInfo'],
    methods: {
        handleModalOk: function() {
            if (!this.handleValiateModalInfo()) {
                return;
            }
            this.$emit("handleModalOk", this.modalInfo);
        },
        handleValiateModalInfo() {
            if (!this.modalInfo.name) {
                this.errorMsg = '请填写页面名称';
                return false;
            }
            if (!this.modalInfo.link) {
                this.errorMsg = '请填写页面链接';
                return false;
            }
            return true;
        },
        handleModalCancel: function() {
            this.$emit('handleModalCancel');
        },
    },
    watch: {
        pageInfo: function(value) {
            if (!value || Object.keys(value).length === 0) {
                return;
            }
            this.modalInfo = Object.assign({}, value);
        },
        visible: function(value) {
            if (value) {
                return;
            }
            this.errorMsg = '';
            this.modalInfo = {};
        }
    }
}
