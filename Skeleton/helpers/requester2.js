const requester2 = function () {
    const baseUrl = "https://baas.kinvey.com/";

    const get = function (endpoint, module, type) {
        const headers = makeHeaders(type, 'GET');
        const url = `${baseUrl}${module}/${storage.appKey}/${endpoint}`;

        return fetch(url, headers);
    };

    const post = function (endpoint, module, type, data) {
        const headers = makeHeaders(type, 'POST', data);
        const url = `${baseUrl}${module}/${storage.appKey}/${endpoint}`;
        console.log(url);
        console.log(headers);
        return fetch(url, headers);
    };

    const put = function (endpoint, module, type, data) {
        const headers = makeHeaders(type, 'PUT', data);
        const url = `${baseUrl}${module}/${storage.appKey}/${endpoint}`;

        return fetch(url, headers);
    };

    const del = function (endpoint, module, type) {
        const headers = makeHeaders(type, 'DELETE');
        const url = `${baseUrl}${module}/${storage.appKey}/${endpoint}`;

        return fetch(url, headers);
    };

    const makeAuth = (type) => {
        console.log(storage.getData("authToken"));
        return type === 'Basic'
            ? 'Basic ' + btoa(storage.appKey + ':' + storage.appSecret)
            : 'Kinvey ' + JSON.parse(storage.getData('authToken'));
    }

    const makeHeaders = (type, httpMethod, data) => {
        const headers = {
            method: httpMethod,
            headers: {
                'Authorization': makeAuth(type),
                'Content-Type': 'application/json'
            }
        };

        if (httpMethod === 'POST' || httpMethod === 'PUT') {
            headers.body = JSON.stringify(data);
        }

        return headers;
    }

    return {
        get,
        post,
        del,
        put,
    }
}();