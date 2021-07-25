import { Icon, Input } from 'ant-design-vue';
import prefix from '@/mixins/prefix.mixin';
import CommonHeader from '@/components/header/index.vue';
import Slider from './components/slider/index.vue';
import Panel from './components/panel/index.vue';

export default {
    mixins: [prefix],
    name: 'view-template',
    data: function() {
        return {
            name: '',
        };
    },
    components: {
        'a-icon': Icon,
        'a-input': Input,
        'common-header': CommonHeader,
        'slider': Slider,
        'panel': Panel,
    },
    methods: {
    },
}
