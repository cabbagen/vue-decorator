import { mapActions } from 'vuex';
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
    methods: {
        ...mapActions('project', ['updateProjectState']),

        handleInputEnter: function() {
            this.updateProjectState({
                search: { name: this.name },
            });
        }
    },
};
