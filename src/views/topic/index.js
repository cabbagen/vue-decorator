import prefix from '@/mixins/prefix.mixin.js';
import CommonHeader from '@/components/header/index.vue';
import ToolBar from './components/tool-bar/index.vue';
import PageFilter from './components/page-filter/index.vue';
import DecorationPanel from './components/decoration-panel/index.vue';

export default {
    name: 'view-topic',
    mixins: [prefix],
    components: {
        'tool-bar': ToolBar,
        'page-filter': PageFilter,
        'common-header': CommonHeader,
        'decoration-panel': DecorationPanel,
    },
    data: function() {
        return {
        };
    }
}
