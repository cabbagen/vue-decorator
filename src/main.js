import Vue from 'vue';
import VueRouter from 'vue-router';
import { Modal } from 'ant-design-vue';

import App from './App.vue'
import router from './router/index';

import store from './store/index';
import PrintPlugin from './plugins/print.plugin';

import "./themes/reset.less";

Vue.use(Modal);
Vue.use(VueRouter);
Vue.use(PrintPlugin);
Vue.use(window.ATopic = window.ATopic.default);

Vue.config.productionTip = false;

new Vue({
    store,
    router,
	render: h => h(App),
}).$mount('#app')
