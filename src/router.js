import VueRouter from 'vue-router';
import Login from '@/views/login/index';
import Home from '@/views/home/index';
import Topic from '@/views/topic/index';

const routes = [{
    path: '/',
    name: 'home',
    component: Home
}, {
    path: '/login',
    name: 'login',
    component: Login,
}, {
    path: '/topic',
    name: 'topic',
    component: Topic,
}];

const router = new VueRouter({
    routes,
    mode: 'history',
});

router.beforeEach((to, from, next) => {
    const token = sessionStorage.getItem('token')

    if (!token && to.name !== 'login') {
        next('/login');
    }
    next();
});

export default router;
