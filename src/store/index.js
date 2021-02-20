import Vue from 'vue';
import Vuex from 'vuex';
import page from './page.store';
import project from './project.store';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        page,
        project,
    },
});

export default store;
