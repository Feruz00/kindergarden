import axios from 'axios'

const server = process.env.SERVER

const getTerbiye = ()=>{
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.get(`${server}/api/terbiye`, {withCredentials:true});
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}
const deleteTerbiye = (d:string)=>{
   
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.delete(`${server}/api/terbiye/${d}`, {withCredentials:true});
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}

const updateTerbiye = (d:string, q:any)=>{
    // console.log()
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.patch(`${server}/api/terbiye/${d}`, q, {withCredentials:true, });
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}
const createTerbiye = (d:any)=>{
    // console.log(d.get('title'))
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.post(`${server}/api/terbiye/`, d, {withCredentials:true, headers: { "Content-Type": "multipart/form-data" }});
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}

export {getTerbiye, deleteTerbiye, updateTerbiye, createTerbiye}