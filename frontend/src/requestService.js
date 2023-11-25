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

const logged = () => {
    return RequestService("users/logged", {}, "get")
}

let routes = { 
    logged
}

export default routes