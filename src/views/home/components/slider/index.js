import prefix from '@/mixins/prefix.mixin.js';
import { Icon } from 'ant-design-vue';
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
                { id: 1, state: undefined, name: '全部项目', icon: 'project', isMark: undefined, key: "normal" },
                { id: 2, state: undefined, name: '标星项目', icon: 'star', isMark: 2, key: 'mark' },
                { id: 3, state: -1, name: '回收站', icon: 'delete', isMark: undefined, key: 'deleted' },
            ],
        };
    },
    computed: {
        ...mapState('project', {
            pagination: state => state.pagination,
        }),
        selectedMenuItemKey: function() {
            return this.$route.params.panel || 'normal';
        },
    },
    methods: {
        ...mapActions('project', ['getProjects']),

        ...mapMutations('project', ['updateProjectState']),

        handleSelectMenuItem: function(item) {
            this.updateProjectState({
                pagination: { current: 1 },
                search: {
                    name: '', type: undefined, state: item.state, isMark: item.isMark,
                },
            });
            this.getProjects();
            this.$router.push(`/workbench/${item.key}`);
        },
        handleCreateProject: function() {
            this.$emit('handleCreateProject');
        }
    },
};
