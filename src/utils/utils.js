const querystring = require('querystring');

export function getQuery(url) {
    const urlString = url || window.location.search.slice(1);

    return querystring.parse(urlString);
}

export function checkType(params) {
    return Object.prototype.toString.call(params).slice(8, -1);
}

export function getDomain() {
    return process.env.NODE_ENV === 'production' ? 'http://39.106.83.126/webapp/api' : 'http://localhost:7000';
}

export function getStaticDomain() {
    return process.env.NODE_ENV === 'production' ? 'http://39.106.83.126/webapp/static' : 'http://localhost:7000';
}

export function getPrefix() {
    return process.env.NODE_ENV === 'production' ? '/webapp/app/' : '/';
}
