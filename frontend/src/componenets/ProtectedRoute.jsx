// wrapper for protected route , authorizarion token reqd

import {Navigate} from "react-router-dom"
import{jwtDecode} from "jwt-decode"
import api from "../api"
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants"
import { useState, useEffect } from "react";

function ProtectedRoute({children}){
    //cant access until logged in

    const [isAuthorized,setIsAuthorized ]=useState(null);
    useEffect(()=>{
        auth().catch( ()=> setIsAuthorized(false))
    },[])

    const refreshToken=  async()=>{
        const refreshToken = localStorage.getItem(REFRESH_TOKEN)
        try{
            //send req to backedn w refressh token to get new token
                const res= await api.post("/api/token/refresh/",{
                    refresh: refreshToken
                }); 

                if(res.status===200){
                    localStorage.setItem(ACCESS_TOKEN,res.data.access) //set new access token
                    setIsAuthorized(true)
                }else{
                    setIsAuthorized(false)
                }


        }catch(error){
            console.log(error);
            setIsAuthorized(false)
        }

    }


    const auth= async()=>{
        // look at accesstoken check if expired or not. if expire refresh on iys own 
        // if not possible login again not auth

        const token= localStorage.getItem(ACCESS_TOKEN)
        if(!token){
            setIsAuthorized(false)
            return
        }
        const decoded=jwtDecode(token)
        const tokenExpiration= decoded.exp
        const now= Date.now()/ 1000   //get date in seconds

        if (tokenExpiration<now){ // token expired refresh token
            await refreshToken()
        }else{
            setIsAuthorized(true) //tojen valid 
        }


    }

    if(isAuthorized===null){
        return <div>Loading ...</div>
    }
    return isAuthorized ? children: <Navigate to="/login" />
}
export default ProtectedRoute