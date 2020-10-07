import prefix from '@/mixins/prefix.mixin.js';

export default {
    name: 'view-home-opecations',
    mixins: [prefix],
    data: function() {
        return {
        };
    },
    props: ['filters', 'selected'],
    methods: {
        handleSelectFilterItem: function(item) {
            this.$emit('handleSelectFilterItem', item);
        },
    }
};
