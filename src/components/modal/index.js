import prefix from '@/mixins/prefix.mixin.js';

export default {
    name: 'common-modal',
    mixins: [prefix],
    data: function() {
        return {
            visiable: false,
        };
    },
    props: ['value', 'title', 'fieldInfos'],
    methods: {
        getFieldComponent: function(item) {
            return item.type === 'input' ? 'Input' : undefined;
        },
        handleModalOk: function() {
            this.$emit('onOk');
        }
    },
    watch: {
        value: function(value) {
            this.visiable = value;
        },
        visiable: function(value) {
            this.$emit('input', value);
        }
    },
};