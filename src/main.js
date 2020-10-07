import Vue from 'vue';
import ViewUI from 'view-design';
import VueRouter from 'vue-router';

import App from './App.vue'
import router from './router/index';

import store from './store/index';
import PrintPlugin from './plugins/print.plugin';

import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);
Vue.use(VueRouter);
Vue.use(PrintPlugin);

// topic library
if (window.ATopic) {
    Vue.use(window.ATopic = window.ATopic.default);
}

Vue.config.productionTip = false;

new Vue({
    store,
    router,
	render: h => h(App),
}).$mount('#app')
