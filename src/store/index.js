import Vue from 'vue';
import Vuex from 'vuex';
import project from './project.store';
import page from './page.store';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        project,
        page,
    },
});

export default store;
