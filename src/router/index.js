import VueRouter from 'vue-router';
import routes from './routes';
import { getPrefix } from '../utils/utils';

const router = new VueRouter({
    routes,
    base: getPrefix(),
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
