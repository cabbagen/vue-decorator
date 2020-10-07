import { mapState, mapActions } from 'vuex';
import prefix from '@/mixins/prefix.mixin.js';
import CommonHeader from '@/components/header/index.vue';
import Panel from './components/panel/index.vue';
import Slider from './components/slider/index.vue';

export default {
    name: 'view-home',
    mixins: [prefix],
    components: {
        'cp-panel': Panel,
        'cp-slider': Slider,
        'common-header': CommonHeader,
    },
    data: function() {
        return {
            name: '',
        };
    },
    computed: mapState('project', {
        projects: state => state.projects,
        pagination: state => state.pagination,
    }),
    mounted: function() {
        this.getProjects();
    },
    methods: {
        ...mapActions('project', ['getProjects']),
        
        handlePaginationChange: function(pageNo) {
            this.getProjects({ pageNo: pageNo - 1, name: this.name });
        },

        handleInputEnter: function() {
            this.getProjects({ name: this.name });
        }
    },
};
