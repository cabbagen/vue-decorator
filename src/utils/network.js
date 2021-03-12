import axios from 'axios';
import { message } from 'ant-design-vue';
import { getDomain } from '../utils/utils';

const domain = getDomain();

function getRequestHeader() {
    return {
        app: 'AMSJJWELSW',
        token: localStorage.getItem('token') || '',
    };
}

function handleRequestResponseSuccess(result) {
    const { status, msg } = result.data;

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
