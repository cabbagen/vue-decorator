const querystring = require('querystring');

export function getQuery(url) {
    const urlString = url || window.location.search.slice(1);

    return querystring.parse(urlString);
}

export function checkType(params) {
    return Object.prototype.toString.call(params).slice(8, -1);
}
