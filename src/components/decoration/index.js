import prefix from '@/mixins/prefix.mixin.js';
import { Icon, Drawer, Tooltip } from 'ant-design-vue';

export default {
    name: 'common-decoration',
    mixins: [prefix],
    components: {
        'a-icon': Icon,
        'a-drawer': Drawer,
        'a-tool-tip': Tooltip,
    },
    data: function() {
        return {
            groupType: 'base',
            groups: window.ATopic.groups.slice(),
            components: window.ATopic.components.slice(),
        };
    },
    props: ['visible'],
    computed: {
        previewedComponents: function() {
            if (!this.groupType) {
                return this.components;
            }
            const types = this.groups.find(item => item.type === this.groupType).components.map(item => item.type);
            return types.map((type) => this.components.find((item) => item.type === type));
        },
    },
    methods: {
        handleCloseDecoration: function() {
            this.$emit('onCancel');
        },
        getContainer: function() {
            const elements = document.getElementsByClassName('view-topic-decoration-panel-container');
            return elements[0] || document.body;
        },
        handleSelectGroup: function(item) {
            this.groupType = item.type || '';
        },
        handleAddModule: function(item) {
            this.$emit('onAddModule', item);
        },
    }
}
