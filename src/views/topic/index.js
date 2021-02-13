import prefix from '@/mixins/prefix.mixin.js';
import CommonHeader from '@/components/header/index.vue';
import PageFilter from './components/page-filter/index.vue';
import DecorationPanel from './components/decoration-panel/index.vue';
import ToolBar from './components/tool-bar/index.vue';

export default {
    name: 'view-topic',
    mixins: [prefix],
    components: {
        'common-header': CommonHeader,
        'page-filter': PageFilter,
        'decoration-panel': DecorationPanel,
        'tool-bar': ToolBar,
    },
    data: function() {
        return {
        };
    }
}
