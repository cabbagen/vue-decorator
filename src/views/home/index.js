import { Icon, Input } from 'ant-design-vue';
import { mapActions, mapMutations } from 'vuex';
import CommonHeader from '../../components/header/index.vue';
import Panel from './components/panel/index.vue';
import Slider from './components/slider/index.vue';
import prefix from '../../mixins/prefix.mixin';

export default {
    mixins: [prefix],
    name: 'view-home',
    components: {
        'a-icon': Icon,
        'a-input': Input,
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
        ...mapActions('project', ['getProjects']),
        ...mapMutations('project', ['updateProjectState']),

        handleInputEnter: function() {
            this.updateProjectState({
                type: 0,
                search: { name: this.name },
            });
            this.getProjects();
        }
    },
};
