import prefix from '@/mixins/prefix.mixin';
import { Badge, Icon, Dropdown, Menu, message } from 'ant-design-vue';
import { defaultMenus, defaultOpecations } from './config';

import network from '@/utils/network.js';

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
            userInfo: {},
        };
    },
    mounted: function() {
        this.handleFetchUserInfo();
    },
    methods: {
        handleFetchUserInfo: function() {
            const userId = sessionStorage.getItem('userId') || '';

            network.get(`/proxy/cms/user/${userId}`).then(result => {
                if (result.status !== 200) {
                    message.error(result.msg);
                    return;
                }
                this.userInfo = result.data;
            });
        },
        handleTriggerItemOpecation: function(item) {
            if (item.key === 'layout') {
                sessionStorage.removeItem('token');
                this.$router.replace('/login');
                return;
            }
            if (item.key === 'user-center') {
                this.$router.push('/user-center');
                return;
            }
        },
        handleToHome: function() {
            window.location.href = process.env.VUE_APP_ROUTER_PREFIX + 'workbench/normal';
        }
    }
};
