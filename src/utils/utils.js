const querystring = require('querystring');

export function getQuery(url) {
    const urlString = url || window.location.search.slice(1);

    return querystring.parse(urlString);
}
