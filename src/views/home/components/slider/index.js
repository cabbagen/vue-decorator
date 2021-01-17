import { Icon } from 'ant-design-vue';
import prefix from '@/mixins/prefix.mixin.js';
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
    name: 'view-home-slider',
    components: {
        'a-icon': Icon,
    },
    mixins: [prefix],
    data: function() {
        return {
            menus: [
                { id: 1, state: 1, name: '全部项目', icon: 'project' },
                { id: 2, state: 2, name: '标星项目', icon: 'star' },
                { id: 3, state: -1, name: '回收站', icon: 'delete' },
            ],
        };
    },
    computed: mapState('project', {
        pagination: state => state.pagination,
        selectedMenuItemIndex: state => state.state,
    }),
    methods: {
        ...mapActions('project', ['getProjects']),

        ...mapMutations('project', ['updateProjectState']),

        handleSelectMenuItem: function(state) {
            this.updateProjectState({
                state,
                search: {
                    name: '', type: 0,
                },
                pagination: {
                    ...this.pagination, pageNo: 0,
                },
            });
            this.getProjects();
        },
    },
};
