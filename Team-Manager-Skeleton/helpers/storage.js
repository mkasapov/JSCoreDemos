const storage = function () {

    const appKey = "";
    const appSecret = "";

    const getData = function (key) {
        return localStorage.getItem(key+appKey)
    }
    const saveData = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    }
    const saveUser = function (data) {
        saveData("userInfo", data);
        saveData("authToken",data._kmd.authtoken);
    }
    const deleteUser = function () {
        localStorage.removeItem("userInfo");
        localStorage.removeItem("authToken");
    }
    
    return {
        getData,
        saveData,
        saveUser,
        deleteUser
    }
}();