import prefix from '@/mixins/prefix.mixin.js';
import { Input, Modal, Radio } from 'ant-design-vue';

const defaultFields = [{
    field: 'name',
    label: '项目名称',
    component: 'a-input',
    isRequired: true,
    props: {
        placeholder: '请输入项目名称',
    },
}, {
    field: 'type',
    label: '项目类型',
    component: 'a-radio-group',
    props: {
        options: [
            { label: '手机端', value: 1 },
            // { label: '微信端', value: 2 },
            { label: 'web 端', value: 3 },
        ],
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

const defaultModalInfo = {
    name: '',
    type: 1,
    remark: '',
};

export default {
    name: 'view-home-modal',
    mixins: [prefix],
    components: {
        'a-modal': Modal,
        'a-input': Input,
        'a-radio-group': Radio.Group,
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
            modalInfo: defaultModalInfo,
            fields: defaultFields,
        };
    },
    props: ['visible', 'title'],
    methods: {
        handleModalOk: function() {
            if (!this.handleValiateModalInfo()) {
                return;
            }
            this.$emit("handleModalOk", this.modalInfo);
        },
        handleValiateModalInfo() {
            if (!this.modalInfo.name) {
                this.errorMsg = '请填写项目名称';
                return false;
            }
            return true;
        },
        handleModalCancel: function() {
            this.$emit('handleModalCancel');
        },
    },
    watch: {
        visible: function(value) {
            if (value) {
                return;
            }
            this.errorMsg = '';
            this.modalInfo = defaultModalInfo;
        }
    }
}
