import { mapState, mapMutations, mapActions } from 'vuex';
import prefix from '@/mixins/prefix.mixin.js';

export default {
    name: 'view-home-slider',
    mixins: [prefix],
    data: function() {
        return {
            menus: [
                { id: 1, state: 1, name: '全部项目', icon: 'logo-buffer' },
                { id: 2, state: 2, name: '标星项目', icon: 'md-star-outline' },
                { id: 3, state: -1, name: '回收站', icon: 'md-trash' },
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

        handleSelectMenuItem: function(stateValue) {
            this.updateProjectState({
                state: stateValue,
                search: {
                    name: '',
                    type: 0,
                },
                pagination: {
                    ...this.pagination, pageNo: 0,
                },
            });
            this.getProjects();
        },
    },
};
