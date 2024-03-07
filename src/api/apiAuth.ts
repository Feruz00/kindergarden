import axios from 'axios'

const server = process.env.SERVER

const registerApi = (d:any)=>{
    return new Promise( async (resolve, reject)=>{
        await axios.post(`${server}/api/auth/register`, d, {
            withCredentials: true
        })
            .then( res=>resolve(res.data) )
            .catch( err=>reject(err) )
    } )
}

const loginApi = (d:any)=>{
    return new Promise( async (resolve, reject)=>{
        await axios.post(`${server}/api/auth/login`, d, {
            withCredentials: true
        })
            .then( res=>resolve(res.data) )
            .catch( err=>reject(err) )
    } )
}

const getCurrentUserApi = (d:any)=>{
    return new Promise( async (resolve, reject)=>{
        await axios.get(`${server}/api/auth/`,{
            withCredentials: true
        })
            .then( res=>resolve(res.data) )
            .catch( err=>reject(err) )
    } )
}

const logoutApi = ()=>{
    return new Promise( async (resolve, reject)=>{
        await axios.get(`${server}/api/auth/logout`,{
            withCredentials: true
        })
            .then( res=>resolve(res.data) )
            .catch( err=>reject(err) )
    } )
}

const changeInfoApi = (d:any)=>{
    return new Promise( async (resolve, reject)=>{
        await axios.put(`${server}/api/auth/`,d, {
            withCredentials: true
        })
            .then( res=>resolve(res.data) )
            .catch( err=>reject(err) )
    } )
}

const uploadPhotoApi = (d:FormData)=>{
    return new Promise( async (resolve, reject)=>{
        await axios.patch(`${server}/api/auth/img/`,d, {
            withCredentials: true,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then( res=>resolve(res.data) )
            .catch( err=>reject(err) )
    } )
}
const changePasswordApi = (d:any)=>{
    return new Promise( async (resolve, reject)=>{
        await axios.patch(`${server}/api/auth/`,d, {
            withCredentials: true
        })
            .then( res=>resolve(res.data) )
            .catch( err=>reject(err) )
    } )
}




export  {registerApi, loginApi, getCurrentUserApi, logoutApi, 

    changeInfoApi, changePasswordApi, uploadPhotoApi
}