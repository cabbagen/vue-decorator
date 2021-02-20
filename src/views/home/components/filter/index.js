import prefix from '@/mixins/prefix.mixin.js';
import { Icon, Dropdown, Menu } from 'ant-design-vue';

export default {
    name: 'view-home-opecations',
    mixins: [prefix],
    components: {
        'a-icon': Icon,
        'a-menu': Menu,
        'a-dropdown': Dropdown,
        'a-menu-item': Menu.Item,
    },
    data: function() {
        return {
        };
    },
    props: ['filters'],
    methods: {
        handleSelectFilterItem: function(item) {
            this.$emit('handleSelectFilterItem', item);
        },
    }
};
