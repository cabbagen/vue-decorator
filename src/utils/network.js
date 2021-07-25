import axios from 'axios';
import { appkey } from '@/utils/const';
import { message } from 'ant-design-vue';

const domain = process.env.VUE_APP_DOMAIN;

function getRequestHeader() {
    return {
        ['app-key']: appkey,
        token: sessionStorage.getItem('token') || '',
    };
}

function handleRequestResponseSuccess(result) {
    const { status, msg } = result.data;

    if (msg && msg.indexOf('token') > -1 && status === 500) {
        window.location.href = process.env.VUE_APP_ROUTER_PREFIX + 'login';
        return;
    }
    if (status !== 200) {
        message.error(msg);
    }
    return result.data;
}

function handleRequestResponseException(error) {
    message.error(error.message);
}

const network = {
    get: function(path, params = {}) {
        return axios({ method: 'get', url: domain + path, params, headers: getRequestHeader()})
            .then(handleRequestResponseSuccess, handleRequestResponseException);
    },
    post: function(path, data = {}) {
        return axios({ method: 'post', url: domain + path, data, headers: getRequestHeader() })
            .then(handleRequestResponseSuccess, handleRequestResponseException);
    },
    del: function(path, params = {}) {
        return axios({ method: 'delete', url: domain + path, params, headers: getRequestHeader()})
            .then(handleRequestResponseSuccess, handleRequestResponseException);
    },
};

export default network;
