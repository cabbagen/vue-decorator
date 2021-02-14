import draggable from 'vuedraggable';
import { mapState, mapActions } from 'vuex';
import prefix from '@/mixins/prefix.mixin.js';

export default {
    name: 'view-topic-decoration-panel',
    mixins: [prefix],
    data: function() {
        return {
            modules: [],
            drag: false,
            disabled: false,
            editedComponentIds: [],
        };
    },
    components: {
        draggable,
    },
    computed: {
        projectId: function() {
            return this.$route.params.projectId || '';
        },
        ...mapState('page', {
            selectedPageId: state => state.selectedPageId,
            selectedPageModules: state => state.selectedPageModules,
        }),
        dragOptions() {
            return {
                animation: 200,
                group: "description",
                disabled: this.disabled,
                ghostClass: "ghost",
            };
        }
    },
    methods: {
        ...mapActions('page', ['getPageModules', 'updatePageModule', 'removePageModule', 'sortPageModules']),

        visibleMonitor: function(componentId, visible) {
            this.editedComponentIds = visible
                ? this.editedComponentIds.concat([componentId])
                : this.editedComponentIds.filter(item => item !== componentId);
            
            this.drag = false;
            this.disabled = this.editedComponentIds.length > 0;
        },
        handleComponentOk: function(id, data) {
            const params = { id, content: JSON.stringify(data) };

            this.updatePageModule(params);
        },
        handleComponentDelete: function(componentId) {
            this.removePageModule({ componentId });
        },
        handleDragStart: function() {
            this.drag = true;
        },
        handleDragEnd: function(event) {
            if (event.oldIndex === event.newIndex) {
                return;
            }
            const sortInfo = this.modules.map((item, index) => ({ id: item.id, sortNo: index + 1 }));
            
            this.drag = false;
            this.sortPageModules({ sortInfo });
        },
    },
    watch: {
        selectedPageId: function() {
            this.getPageModules();
        },
        selectedPageModules: function(value) {
            this.modules = value;
        }
    },
}
