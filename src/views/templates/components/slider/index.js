import network from '@/utils/network';
import prefix from '@/mixins/prefix.mixin.js';

export default {
    mixins: [prefix],
    name: 'view-template-slider',
    data: function() {
        return {
            categories: [],
        };
    },
    mounted() {
        this.handleGetTemplateCategories();
    },
    methods: {
        handleGetTemplateCategories: function() {
            network.get('/proxy/cms/template/categories/name').then(result => {
                this.categories = result.data || [];
            });
        },
    },
}
