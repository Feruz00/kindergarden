import axios from 'axios'

const server = process.env.SERVER

const getUsers = ()=>{
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.get(`${server}/api/users`, {withCredentials:true});
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}
const getUser = (d:string)=>{
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.get(`${server}/api/users/${d}`, {withCredentials:true});
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}
const deleteUser = (d:string)=>{
    // console.log(d)
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.delete(`${server}/api/users/${d}`, {withCredentials:true});
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}

const updateUser = (d:string, q:any)=>{
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.patch(`${server}/api/users/${d}`, q, {withCredentials:true, });
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}
const createUser = (d:FormData)=>{
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.post(`${server}/api/users/`, d, {withCredentials:true, });
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}


export {createUser, getUsers, updateUser, deleteUser,getUser }