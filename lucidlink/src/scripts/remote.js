let remote=(()=>{
    const BASE_URL = 'https://baas.kinvey.com/';
    const APP_KEY='kid_rJ2epspHQ';
    const APP_SECRET='f0a16cdcf5ea45a49fc2acbd786d02ae';

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
export {remote};