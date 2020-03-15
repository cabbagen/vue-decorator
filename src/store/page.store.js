import { Message } from 'view-design';
import Network from '@/utils/network.js';

export default {
    namespaced: true,

    state: {
        selectedPageId: 0,
        selectedPageModules: [],
        pages: [],
    },

    mutations: {
        updatePages(state, pages) {
            state.pages = pages;
        },

        updateSelectedPageModules(state, selectedPageModules) {
            state.selectedPageModules = selectedPageModules;
        },

        handleSelectedPageChange(state, pageId) {
            state.selectedPageId = pageId;
        }
    },

    actions: {
        // 获取页面列表
        getPages(ctx, payload = {}) {
            return Network.get(`/proxy/cms/page/${payload.projectId}`).then(data => {
                const pages = data.map(item => {
                    return Object.assign({}, item, { type: 'panel' });
                });
                ctx.commit('updatePages', pages);
            });
        },

        // 获取当前页面的模块列表
        getPageModules(ctx) {
            if (ctx.state.selectedPageId === 0) {
                return;
            }

            return Network.get(`/proxy/cms/module/${ctx.state.selectedPageId}`).then(data => {
                const modules = data.map(item => {
                    return { id: item.id, type: item.type, ...JSON.parse(item.content) };
                });
                ctx.commit('updateSelectedPageModules', modules);
            });
        },

        // 新建页面
        createPage(ctx, payload) {
            Network.post('/proxy/cms/page', payload).then(() => {
                Message.success('操作成功');
                return ctx.dispatch('getPages', { projectId: payload.projectId });
            })
            .then(() => {
                const selectedPageId = ctx.state.pages[ctx.state.pages.length - 1] ? ctx.state.pages[ctx.state.pages.length - 1].id : 0;

                ctx.commit('updateSelectedPageModules', []);
                ctx.commit('handleSelectedPageChange', selectedPageId);
            });
        },

        // 添加装修模块
        createPageModule(ctx, payload) {
            Network.post('/proxy/cms/module', payload).then(() => {
                Message.success('操作成功');
                return ctx.dispatch('getPageModules');
            });
        },

        // 编辑装修模块
        updatePageModule(ctx, payload) {
            Network.post('/proxy/cms/module', payload).then(() => {
                Message.success('操作成功');
                ctx.dispatch('getPageModules');
            });
        },
        
        // 删除装修模块
        removePageModule(ctx, payload) {
            Network.del(`/proxy/cms/module/${payload.componentId}`).then(() => {
                Message.success('删除成功');
                return ctx.dispatch('getPageModules');
            });
        },
        
        // 装修模块排序
        sortPageModules(ctx, payload) {
            Network.post('/proxy/cms/module/sort', payload).then(() => {
                Message.success('操作成功');
                ctx.dispatch('getPageModules');
            });
        },
    },
}
