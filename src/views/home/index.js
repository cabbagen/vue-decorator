import prefix from '@/mixins/prefix.mixin';
import CommonHeader from '@/components/header/index.vue';
import { Icon, Input } from 'ant-design-vue';
import { mapActions, mapMutations } from 'vuex';
import Panel from './components/panel/index.vue';
import Slider from './components/slider/index.vue';
import CreateModal from './components/create-modal/index.vue';

export default {
    mixins: [prefix],
    name: 'view-home',
    components: {
        'a-icon': Icon,
        'a-input': Input,
        'cp-panel': Panel,
        'cp-slider': Slider,
        'cp-create-modal': CreateModal,
        'common-header': CommonHeader,
    },
    data: function() {
        return {
            name: '',
            modalVisible: false,
        };
    },
    methods: {
        ...mapActions('project', ['getProjects', 'handleUpdateProject']),
        ...mapMutations('project', ['updateProjectState']),

        handleInputEnter: function() {
            this.updateProjectState({
                pagination: { current: 1 },
                search: { name: this.name },
            });
            this.getProjects();
        },
        handleCreateProject: function() {
            this.modalVisible = true;
        },
        handleModalOk: function(data) {
            this.handleModalCancel();
            this.handleUpdateProject(Object.assign({ state: 2 }, data));
            this.getProjects();
        },
        handleModalCancel: function() {
            this.modalVisible = false;
        }
    },
};
