import Network from '@/utils/network.js';
import { message } from 'ant-design-vue';

export default {
    namespaced: true,
    state: {
        pages: [],
        selectedPageId: 0,
        selectedPageModules: [],
        projectInfo: {},
    },
    mutations: {
        updatePages(state, pages) {
            state.pages = pages;
            state.selectedPageId = pages[0] ? pages[0].id : 0;
        },
        updateSelectedPageModules(state, selectedPageModules) {
            state.selectedPageModules = selectedPageModules;
        },
        handleSelectedPageChange(state, pageId) {
            state.selectedPageId = pageId;
        },
        updateCurrentProject(state, data) {
            state.projectInfo = data;
        },
    },
    actions: {
        // 获取当前项目信息
        getCurrentProjectInfo(ctx, payload) {
            return Network.get(`/proxy/cms/project/${payload.projectId}`).then(result => {
                if (result.status !== 200) {
                    return;
                }
                ctx.commit('updateCurrentProject', result.data);
            });
        },
        // 获取页面列表
        getPages(ctx, payload = {}) {
            return Network.get(`/proxy/cms/page/${payload.projectId}`).then(result => {
                if (result.status !== 200) {
                    return;
                }
                const pages = result.data.map(item => {
                    return Object.assign({}, item, { type: 'panel' });
                });
                ctx.commit('updatePages', pages);
            });
        },

        // 编辑、新建页面
        editPage(ctx, payload) {
            Network.post('/proxy/cms/page', payload).then((result) => {
                if (result.status !== 200) {
                    return;
                }
                message.success('操作成功');
                return ctx.dispatch('getPages', { projectId: payload.projectId });
            })
            .then(() => {
                const selectedPageId = ctx.state.pages[ctx.state.pages.length - 1] ? ctx.state.pages[ctx.state.pages.length - 1].id : 0;

                ctx.commit('updateSelectedPageModules', []);
                ctx.commit('handleSelectedPageChange', selectedPageId);
            });
        },

        // 删除页面
        removePage(ctx, payload) {
            Network.del(`/proxy/cms/page/${payload.id}`).then((result) => {
                if (result.status !== 200) {
                    return;
                }
                message.success('删除成功');
                return ctx.dispatch('getPages', { projectId: payload.projectId });
            })
            .then(() => {
                ctx.commit('updateSelectedPageModules', []);
                ctx.commit('handleSelectedPageChange', '');
            });
        },

        // 获取当前页面的模块列表
        getPageModules(ctx) {
            if (ctx.state.selectedPageId === 0) {
                return;
            }
            return Network.get(`/proxy/cms/module/${ctx.state.selectedPageId}`).then(result => {
                if (result.status !== 200) {
                    return;
                }
                const modules = result.data.map(item => {
                    return { id: item.id, type: item.type, ...JSON.parse(item.content) };
                });
                ctx.commit('updateSelectedPageModules', modules);
            });
        },

        // 添加装修模块
        createPageModule(ctx, payload) {
            Network.post('/proxy/cms/module', payload).then((result) => {
                if (result.status !== 200) {
                    return;
                }
                message.success('操作成功');
                return ctx.dispatch('getPageModules');
            });
        },

        // 编辑装修模块
        updatePageModule(ctx, payload) {
            Network.post('/proxy/cms/module', payload).then((result) => {
                if (result.status !== 200) {
                    return;
                }
                message.success('操作成功');
                ctx.dispatch('getPageModules');
            });
        },
        
        // 删除装修模块
        removePageModule(ctx, payload) {
            Network.del(`/proxy/cms/module/${payload.componentId}`).then((result) => {
                if (result.status !== 200) {
                    return;
                }
                message.success('删除成功');
                return ctx.dispatch('getPageModules');
            });
        },
        
        // 装修模块排序
        sortPageModules(ctx, payload) {
            Network.post('/proxy/cms/module/sort', payload).then((result) => {
                if (result.status !== 200) {
                    return;
                }
                message.success('操作成功');
                ctx.dispatch('getPageModules');
            });
        },
    },
}
