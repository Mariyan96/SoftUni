let remote=(()=>{
    const BASE_URL = 'https://baas.kinvey.com/';
    const APP_KEY='kid_r1ylkWqr7';
    const APP_SECRET='11903e81cd3d47ff9ea82d557ec0c0ba';

    function makeAuthHeader(auth) {
        if (auth === 'Basic') {
            return `Basic ${btoa(APP_KEY + ":" + APP_SECRET)}`;
        } else {
            return `Kinvey ${sessionStorage.getItem('authToken')}`
        }
    }

    function makeRequest(method,module,endpoint,auth) {
        return {
            url: BASE_URL + module + '/' + APP_KEY + '/' + endpoint,
            method: method,
            headers: {
                'Authorization': makeAuthHeader(auth)
            }
        }
    }
    function get(module, endpoint, auth) {
        return $.ajax(makeRequest('GET', module, endpoint, auth));
    }
    function post(module,endpoint,auth,data) {
        let obj =makeRequest('POST',module,endpoint,auth)
        if(data){
           obj.data = data;
        }
        return $.ajax(obj);
    }
    function update(module,endpoint,auth,data) {
        let obj = makeRequest('PUT',module,endpoint,auth);
        if(data){
            obj.data=data;
        }
        return $.ajax(obj)
    }
    function remove(module,endpoint,auth) {
        return $.ajax(makeRequest('DELETE',module,endpoint,auth));
    }
    return {
        get,
        post,
        update,
        remove
    }
})();