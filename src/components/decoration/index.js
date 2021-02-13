import prefix from '@/mixins/prefix.mixin.js';
import CommonDragable from '@/components/dragable/index.vue';

export default {
    name: 'common-decoration',
    mixins: [prefix],
    components: {
        'common-dragable': CommonDragable,
    },
    data: function() {
        return {
        };
    },
    props: ['visible'],
    methods: {

    }
}
