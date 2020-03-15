import axios from 'axios';
import { Message } from 'view-design';

const domain = 'http://localhost:7000';

function getRequestHeader() {
    return {
        app_key: 'AMSJJWELSW',
        token: sessionStorage.getItem('token') || '',
    };
}

function handleRequestResponseSuccess(result) {
    const { status, msg, data } = result.data;

    if (status !== 200) {
        Message.error(msg);
    }
    return data;
}

function handleRequestResponseException(error) {
    Message.error(error.message);
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
