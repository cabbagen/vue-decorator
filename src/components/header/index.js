import { Badge, Icon, Dropdown, Menu } from 'ant-design-vue';
import prefix from '../../mixins/prefix.mixin';
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
};
