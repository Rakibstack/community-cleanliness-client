import axios from "axios"
import { useContext, useEffect } from "react"
import { AuthContext } from "../AuthProvider/AuthProvider"

const instance = axios.create({
    baseURL: 'http://localhost:3000/'
}) 

const useAxiosSecure = () => {  
 const {user,LogOut} = useContext(AuthContext)

  useEffect(() => {

 const requestinstance =  instance.interceptors.request.use((config) => {
    if(user?.accessToken){
         config.headers.authorization = `Bearer ${user.accessToken}`
    } 
    return config;
    })

     const responseinstance = instance.interceptors.response.use(res => {
        return res;
     },err => {
        const status = err.response.status
        if(status === 401 || status === 403){
           LogOut()
        }
        return Promise.reject(err)
     })

    return () => {
        instance.interceptors.request.eject(requestinstance);
        instance.interceptors.response.eject(responseinstance);
    }

  },[user?.accessToken,LogOut])

 return instance
}

export default useAxiosSecure