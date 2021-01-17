import { Icon, Dropdown, Menu } from 'ant-design-vue';
import prefix from '@/mixins/prefix.mixin.js';

export default {
    name: 'view-home-opecations',
    mixins: [prefix],
    components: {
        'a-icon': Icon,
        'a-dropdown': Dropdown,
        'a-menu': Menu,
        'a-menu-item': Menu.Item,
    },
    data: function() {
        return {
        };
    },
    props: ['filters', 'selected'],
    methods: {
        handleSelectFilterItem: function(item) {
            this.$emit('handleSelectFilterItem', item);
        },
    }
};
