import prefix from '@/mixins/prefix.mixin.js';
import CommonHeader from '@/components/header/index.vue';

export default {
    name: 'view-about',
    mixins: [prefix],
    components: {
        'common-header': CommonHeader,
    },
    data: function() {
        return {
        };
    }
}
