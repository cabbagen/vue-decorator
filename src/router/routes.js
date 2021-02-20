import Home from '@/views/home/index.vue';
import Login from '@/views/login/index.vue';
import Topic from '@/views/topic/index.vue';
import About from '@/views/about/index.vue';
import Guide from '@/views/guide/index.vue';
import UserCenter from '@/views/user-center/index.vue';

const routes = [{
    path: '/',
    redirect: '/workbench/normal',
},{
    path: '/workbench/:panel',
    name: 'home',
    component: Home,
}, {
    path: '/login',
    name: 'login',
    component: Login,
}, {
    path: '/topic/:projectId',
    name: 'topic',
    component: Topic,
}, {
    path: '/user-center',
    name: 'user-center',
    component: UserCenter,
}, {
    path: '/about',
    name: 'about',
    component: About,
}, {
    path: '/guide',
    name: 'guide',
    component: Guide,
}];

export default routes;
