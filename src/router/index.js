import VueRouter from 'vue-router';
import routes from './routes';

const router = new VueRouter({
    routes,
    mode: 'history',
});

router.beforeEach((to, _, next) => {
    const token = localStorage.getItem('token')
    if (!token && to.name !== 'login') {
        next('/login');
        return;
    }
    next();
});

export default router;
