import { Icon, Input, Modal, Select } from 'ant-design-vue';
import network from '@/utils/network';
import prefix from '@/mixins/prefix.mixin.js';

const defaultFields = [{
    field: 'name',
    label: '模板名称',
    component: 'a-input',
    isRequired: true,
    props: {
        placeholder: '模板名称',
    },
}, {
    field: 'categoryId',
    label: '模板分类',
    component: 'a-select',
    isRequired: true,
    props: {
        showSearch: true,
        style: 'width: 200px',
        placeholder: '请选择模板分类',
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
    name: 'view-topic-template-modal',
    mixins: [prefix],
    components: {
        'a-icon': Icon,
        'a-modal': Modal,
        'a-input': Input,
        'a-textarea': Input.TextArea,
        'a-select': Select,
        'a-select-option': Select.Option,
    },
    data: function() {
        return {
            errorMsg: '',
            modalInfo: {},
            categories: [],
            fields: defaultFields,
        };
    },
    props: ['visible', 'title'],
    mounted: function() {
        this.handleCategorySearch();
    },
    methods: {
        handleModalOk: function() {
            if (!this.handleValiateModalInfo()) {
                return;
            }
            this.$emit("handleModalOk", this.modalInfo);
        },
        handleValiateModalInfo() {
            if (!this.modalInfo.name) {
                this.errorMsg = '请填写模板名称';
                return false;
            }
            if (!this.modalInfo.categoryId) {
                this.errorMsg = '请选择模板类型';
                return false;
            }
            return true;
        },
        handleModalCancel: function() {
            this.$emit('handleModalCancel');
        },
        handleCategorySearch: function(value = '') {
            network.get('/cms/template/categories/name', { search: value }).then(result => {
                if (result.code !== 100200) {
                    return;
                }
                this.categories = result.data;
            });
        },
        handleCategoryChange: function(categoryId) {
            this.modalInfo.categoryId = categoryId;
        }
    },
    watch: {
        visible: function(value) {
            if (value) {
                return;
            }
            this.errorMsg = '';
            this.modalInfo = {};
        }
    }
}
