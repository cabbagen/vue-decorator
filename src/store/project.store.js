import network from '@/utils/network.js';
import { message } from 'ant-design-vue';
import { checkType } from '@/utils/utils.js';

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
            current: 1,
            pageSize: 10,
        },
    },

    mutations: {
        getProjectsSuccess(state, data) {
            state.projects = data.projects;
            state.pagination = data.pagination;
        },
        updateProjectState(state, payload) {
            Object.keys(payload).forEach(prop => {
                state[prop] = checkType(payload[prop]) === 'Object' ? Object.assign({}, state[prop], payload[prop]) : payload[prop];
            });
        },
    },

    actions: {
        getProjects(ctx) {
            const { pagination, state, search } = ctx.state;
            const { pageSize, current } = pagination;

            network.get('/proxy/cms/projects', { pageSize, pageNo: current - 1, state, ...search }).then(result => {
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
        handleUpdateProject(_, payload = {}) {
            network.post('/proxy/cms/project', payload).then(result => {
                if (result.status !== 200) {
                    return;
                }
                message.success('操作成功');
            });
        },
    },
}
