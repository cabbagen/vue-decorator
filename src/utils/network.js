import axios from 'axios';
import { message } from 'ant-design-vue';

// const domain = process.env.VUE_APP_DOMAIN;

const domain = '/api';

function getRequestHeader() {
    return {
        Authorization: sessionStorage.getItem('token') || '',
    };
}

function handleRequestResponseSuccess(result) {
    if (result.data.code === 100401) {
        window.location.href = `${process.env.VUE_APP_ROUTER_PREFIX}login?returnUrl=${window.location.href}`;
        return;
    }
    if (result.data.code !== 100200) {
        message.error(result.data.message);
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
