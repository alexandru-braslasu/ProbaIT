import axios from "axios";

const RequestService = async (url, body, type) => {
    const token = localStorage.getItem('jwtToken');
    let res = null, ok = true;
    try {
        res = await axios({
            method: type,
            url: process.env.REACT_APP_URL + url, 
            data: body,
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
    } catch(err) {
        ok = false;
        res = err.response;
    }
    return {
        ok: ok,
        data: res?.data
    }
}

const register =  (email, password) => {
    return RequestService("/loggedin/register", { email, password }, "post")
 }

const logged = () => {
    return RequestService("/loggedin", {}, "get")
}

let routes = { 
    logged,
    register
}

export default routes