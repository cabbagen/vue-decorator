
function install(Vue, options) {
    Vue.prototype.$print = function(params) {
        try {
            console.log(JSON.stringify(params, null, 2));
        } catch(e) {
            console.log(params);
        }
    };
}

export default {
    install,
    name: 'vue-print',
    version: '1.0.0',
};
