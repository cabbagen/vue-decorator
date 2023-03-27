import { Icon, Input, Empty } from 'ant-design-vue';

import network from '@/utils/network';
import prefix from '@/mixins/prefix.mixin.js';

export default {
    mixins: [prefix],
    name: 'view-template-panel',
    components: {
        'a-icon': Icon,
        'a-empty': Empty,
        'a-input-search': Input.Search,
    },
    data: function() {
        return {
            search: {
                pageNo: 0,
                search: '',
                pageSize: 10,
            },
            templates: [],
            total: 0,
        };
    },
    computed: {
        columns: function() {
            const columns = [ [], [], [], [], [] ];

            for (let i = 0, len = this.templates.length; i < len; i++) {
                columns[i % 5].push(this.templates[i]);
            }
            return columns;
        }
    },
    mounted: function() {
        this.handleFetchTemplates();
    },
    methods: {
        handleTemplateSearch: function(value) {
            this.search = {
                pageNo: 0,
                pageSize: 10,
                search: value,
            };
            this.handleFetchTemplates();
        },
        handleFetchTemplates: function() {
            network.get('/cms/template/search', this.search).then(result => {
                if (result.code !== 100200) {
                    return;
                }
                this.total = result.data.total;
                this.templates = result.data.templates;
            });
        },
        handleCreateProjectByTemplate: function(item) {
            network.get('/cms/projects/byTemplates', { templateId: item.id }).then(result => {
                if (result.code !== 100200) {
                    return;
                }
                this.$router.push(`/topic/${result.data.id}`);
            });
        },
        handleEditTemplate: function(item) {
            this.$router.push(`/topic/${item.projectId}`);
        },
        hangleDeleteTemplate: function(item) {
            network.del(`/cms/template/${item.id}`).then(result => {
                if (result.code !== 100200) {
                    return;
                }
                this.handleFetchTemplates();
            });
        }
    },
}
