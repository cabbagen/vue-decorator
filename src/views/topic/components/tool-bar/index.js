import { Icon } from 'ant-design-vue';
import prefix from '@/mixins/prefix.mixin.js';
import CommonDecoration from '@/components/decoration/index.vue';

const defaultOpecations = [{
    type: 'edit',
    icon: 'edit',
    text: '网站编辑',
}, {
    type: 'download',
    icon: 'cloud-download',
    text: '源码下载',
}, {
    type: 'setting',
    icon: 'setting',
    text: '网站设置',
}];

export default {
    name: 'view-topic-tool-bar',
    mixins: [prefix],
    components: {
        'a-icon': Icon,
        'commom-decoration': CommonDecoration,
    },
    data: function() {
        return {
            decorationVisible: false,
            opecations: defaultOpecations,
        };
    },
    methods: {
        handleOpecationItem: function(type) {
            if (type === 'edit') {
                this.decorationVisible = true;
            }
        }
    }
}
