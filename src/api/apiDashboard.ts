import axios from 'axios'

const server = process.env.SERVER

const getDashboard = ()=>{
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.get(`${server}/api/dashboard`, {withCredentials:true});
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}


const updateDashboardInfo = (d:string, q:any)=>{
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.put(`${server}/api/dashboard/${d}`, q, {withCredentials:true, });
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}
const updateDashboardPhotos = ( q:string, d:FormData)=>{
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.patch(`${server}/api/dashboard/${q}`, d, {withCredentials:true, 
                headers: { "Content-Type": "multipart/form-data" }
            });
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}
const createDashboard = (d:FormData)=>{
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.post(`${server}/api/dashboard/`, d, {withCredentials:true,headers: { "Content-Type": "multipart/form-data" } });
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}

export {createDashboard, getDashboard, updateDashboardInfo, updateDashboardPhotos}