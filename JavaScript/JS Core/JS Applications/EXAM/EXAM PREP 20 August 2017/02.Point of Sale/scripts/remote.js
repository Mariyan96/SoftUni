let remote=(()=>{
    const BASE_URL = 'https://baas.kinvey.com/';
    const APP_KEY='kid_ry_6TMnrQ';
    const APP_SECRET='70d998cf8a614c3d9807fd165cf968a2';

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