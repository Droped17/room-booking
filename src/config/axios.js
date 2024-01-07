import axios from "axios";
import {getAccessToken,removeAccessToken} from "../utils/local_storage";

const BACKEND_URL = "http://localhost:1112";

axios.defaults.baseURL = BACKEND_URL;
axios.interceptors.request.use((configObj)=>{
    const getToken = getAccessToken();
    if (getToken) {
        configObj.headers.Authorization = `Bearer ${getToken}`;
    }
    return configObj;
});

axios.interceptors.response.use((res) => res,err => {
    if (err.response.status === 401) {
        removeAccessToken();
        window.location.href = "/login";
    }
    return Promise.reject(err);
})

export default axios;


