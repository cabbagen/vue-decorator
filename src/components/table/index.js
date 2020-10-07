import prefix from '@/mixins/prefix.mixin.js';

import TableCell from './cell.js';

export default {
    name: 'common-table',
    mixins: [prefix],
    data: function() {
        return {
            innerDataSource: this.dataSource,
        };
    },
    components: {
        'common-table-cell': TableCell,
    },
    props: ['columns', 'dataSource', 'pagination'],
    mounted: function() {
    },
    methods: {
        handleInitInnerDataSource: function(dataSource) {
            this.innerDataSource = dataSource.map(dataItem => Object.assign({}, dataItem, { isSelected: false }));
        }
    },
    watch: {
        dataSource: function(newValue, oldValue) {
            if (JSON.stringify(newValue) === JSON.stringify(oldValue)) {
                return;
            }
            this.handleInitInnerDataSource(newValue);
        },
    },
}