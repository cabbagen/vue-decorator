import { Message } from 'view-design';
import network from '@/utils/network.js';

export default {
    namespaced: true,

    state: {
        state: 1,
        search: {
            type: 0,
            name: '',
        },
        projects: [],
        pagination: {
            total: 0,
            pageNo: 0,
            pageSize: 10,
        },
    },

    mutations: {
        getProjectsSuccess(state, data) {
            state.projects = data.projects;
            state.pagination = data.pagination;
        },
        updateProjectState(state, payload) {
            Object.keys(payload).forEach(key => state[key] = payload[key]);
        },
    },

    actions: {
        getProjects(ctx) {
            const { pagination, state, search } = ctx.state;
            const { pageSize, pageNo } = pagination;

            network.get('/proxy/cms/projects', { pageSize, pageNo, state, ...search }).then(result => {
                if (result.status !== 200) {
                    return;
                }
                const data = {
                    projects: result.data.projects || [],
                    pagination: Object.assign({}, pagination, {
                        total: result.data.total,
                    }),
                };
                ctx.commit('getProjectsSuccess', data);
            });
        },
        handleUpdateProject(ctx, payload = {}) {
            network.post('/proxy/cms/project', payload).then(result => {
                if (result.status !== 200) {
                    return;
                }
                Message.success('操作成功');
            });
        },
    },
}
