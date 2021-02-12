import prefix from '@/mixins/prefix.mixin.js';
import CommonHeader from '@/components/header/index.vue';
import CommonDecoration from '@/components/decoration/index.vue';
import PageFilter from './components/page-filter/index.vue';
import DecorationPanel from './components/decoration-panel/index.vue';

export default {
    name: 'view-topic',
    mixins: [prefix],
    components: {
        'common-header': CommonHeader,
        'common-decoration': CommonDecoration,
        'page-filter': PageFilter,
        'decoration-panel': DecorationPanel,
    },
    data: function() {
        return {
        };
    }
}
