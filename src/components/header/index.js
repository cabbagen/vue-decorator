import prefix from '@/mixins/prefix.mixin.js';

export default {
    name: 'common-header',
    mixins: [prefix],
    data: function() {
        return {
            menus: [
                { name: '个人中心' },
                { name: '退出登录' },
            ],
            opecations: [
                { name: '素材广场' },
                { name: '模版中心' },
                { name: '教程指引' },
                { name: '关于我们' },
            ],
        };
    },
};
