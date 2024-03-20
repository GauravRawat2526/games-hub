import axios from "axios";

export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params : {
        key : '3dba11fb5d0a407c9181e15c13f2aa7d'
    }
})