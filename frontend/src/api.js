//make  interceptor - intercepts any req that we will send and automatically add headers so that we need not do it manually
// use axios for network requests  we send req check for access token and automatically addds it


import axios from "axios"
import { ACCESS_TOKEN } from "./constants"
 
const api= axios.create({
    baseURL: import.meta.env.VITE_API_URL 
    // import env vars


})

api.interceptors.request.use(
    (config)=>{
        // check token if there add authorisation header
        const token= localStorage.getItem(ACCESS_TOKEN);
        if (token){
             config.headers.Authorization=`Bearer ${token}`
        }
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }


)
export default api