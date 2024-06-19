import axios from 'axios'

const server = process.env.SERVER

const getfooter = ()=>{
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.get(`${server}/api/footer`, {withCredentials:true});
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}
const deletefooter = (d:string)=>{
   
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.delete(`${server}/api/footer/${d}`, {withCredentials:true});
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}

const updatefooter = (d:string, q:any)=>{
    // console.log()
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.patch(`${server}/api/footer/${d}`, q, {withCredentials:true, });
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}
const createfooter = (d:any)=>{
    // console.log(d.get('title'))
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.post(`${server}/api/footer/`, d, {withCredentials:true, headers: { "Content-Type": "multipart/form-data" }});
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}

export {getfooter, deletefooter, updatefooter, createfooter}