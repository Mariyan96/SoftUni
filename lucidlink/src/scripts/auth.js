import remote from "./remote";
let auth =(()=>{
    function isAuth() {
        return sessionStorage.getItem('authToken')!==null;
    }
    function saveTokens(data) {
        sessionStorage.setItem('authToken',data._kmd.authtoken)
        sessionStorage.setItem('userId',data._id);
        sessionStorage.setItem('username',data.username)
    }
    function register(username,password) {
        let obj = {username,password};

        return remote.post('user','','Basic',obj);
    }
    function login(username,password) {
        let obj = {username,password};
        return remote.post('user','login','Basic',obj)
    }
    function logout() {
        return remote.post('user', '_logout', 'kinvey');
    }
    return {isAuth,saveTokens,register,login,logout};
})();
export {auth};