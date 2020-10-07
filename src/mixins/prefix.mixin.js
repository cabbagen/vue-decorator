export default {
    data: function() {
        return {
            '$prefix': '',
        };
    },
    created: function() {
        this['$prefix'] = this.$options.name;
    }
};
