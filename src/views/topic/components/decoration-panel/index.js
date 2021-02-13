import { mapState, mapActions } from 'vuex';
import prefix from '@/mixins/prefix.mixin.js';

export default {
    name: 'view-topic-decoration-panel',
    mixins: [prefix],
    data: function() {
        return {

        };
    },
    computed: {
        projectId: function() {
            return this.$route.params.projectId || '';
        },
        ...mapState('page', {
            selectedPageId: state => state.selectedPageId,
            selectedPageModules: state => state.selectedPageModules,
        }),
    },
    methods: {
        ...mapActions('page', ['getPageModules']),
    },
    watch: {
        selectedPageId: function() {
            this.getPageModules();
        },
    },
}
