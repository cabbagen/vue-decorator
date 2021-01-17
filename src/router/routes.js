import Login from '../views/login/index.vue';
import Home from '../views/home/index.vue';
// import Topic from '@/views/topic/index.vue';

const routes = [{
    path: '/',
    name: 'home',
    component: Home
}, {
    path: '/login',
    name: 'login',
    component: Login,
},/* {
    path: '/topic/:id',
    name: 'topic',
    component: Topic,
}*/];

export default routes;
