import prefix from '@/mixins/prefix.mixin';
import { Badge, Icon, Dropdown, Menu } from 'ant-design-vue';
import { defaultMenus, defaultOpecations } from './config';

export default {
    mixins: [prefix],
    name: 'common-header',
    components: {
        'a-icon': Icon,
        'a-badge': Badge,
        'a-dropdown': Dropdown,
        'a-menu': Menu,
        'a-menu-item': Menu.Item,
    },
    data: function() {
        return {
            menus: defaultMenus,
            opecations: defaultOpecations,
        };
    },
    methods: {
        handleTriggerItemOpecation: function(item) {
            if (item.key === 'layout') {
                localStorage.removeItem('token');
                this.$router.replace('/login');
                return;
            }
            if (item.key === 'user-center') {
                this.$router.push('/user-center');
                return;
            }
        },
    }
};
