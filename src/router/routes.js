
const routes = [{
    path: '/',
    redirect: '/workbench/normal',
},{
    path: '/workbench/:panel',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
}, {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
}, {
    path: '/topic/:projectId',
    name: 'topic',
    component: () => import('@/views/topic/index.vue'),
}, {
    path: '/user-center',
    name: 'user-center',
    component: () => import('@/views/user-center/index.vue'),
}, {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about/index.vue'),
}, {
    path: '/guide',
    name: 'guide',
    component: () => import('@/views/guide/index.vue'),
}, {
    path: '/templates',
    name: 'templates',
    component: () => import('@/views/templates/index.vue'),
}, /*{
    path: '/materials',
    name: 'materials',
    component: () => import('@/views/materials/index.vue'),
}*/];

export default routes;
