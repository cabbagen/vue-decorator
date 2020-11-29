import { mapState } from 'vuex';
import prefix from '@/mixins/prefix.mixin.js';
import CommonHeader from '@/components/header/index.vue';
import WebsiteMap from './components/website-map/index.vue';

export default {
    name: 'view-topic',
    mixins: [prefix],
    components: {
        'common-header': CommonHeader,
        'website-map': WebsiteMap,
    },
    computed: mapState('page', {
        mobileComponents: state => state.selectedPageModules,
    }),
    data: function() {
        return {
        };
    }
}