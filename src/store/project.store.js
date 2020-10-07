import Network from '@/utils/network.js';

export default {
    namespaced: true,

    state: {
        state: 1,
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
        updateCurrentState(state, projectStateValue) {
            state.state = projectStateValue;
        },
    },

    actions: {
        getProjects(ctx, payload = {}) {
            const { pagination, state } = ctx.state;
            const { pageSize, pageNo } = pagination;

            Network.get('/proxy/cms/projects', { pageSize, pageNo, state, ...payload }).then(result => {
                const data = {
                    projects: result.projects || [],
                    pagination: Object.assign({}, pagination, {
                        total: result.total,
                        pageNo: payload.pageNo || 0,
                    }),
                };
                ctx.commit('getProjectsSuccess', data);
            });
        }
    },
}
