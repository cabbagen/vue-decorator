
const routes = [{
    path: '/',
    redirect: '/workbench/normal',
},{
    name: 'home',
    path: '/workbench/:panel',
    component: () => import('@/views/home/index.vue'),
}, {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
}, {
    name: 'topic',
    path: '/topic/:projectId',
    component: () => import('@/views/topic/index.vue'),
}, {
    name: 'user-center',
    path: '/user-center',
    component: () => import('@/views/user-center/index.vue'),
}, {
    name: 'about',
    path: '/about',
    component: () => import('@/views/about/index.vue'),
}, {
    name: 'guide',
    path: '/guide',
    component: () => import('@/views/guide/index.vue'),
}, {
    name: 'templates',
    path: '/templates',
    component: () => import('@/views/templates/index.vue'),
}, /*{
    path: '/materials',
    name: 'materials',
    component: () => import('@/views/materials/index.vue'),
}*/];

export default routes;
