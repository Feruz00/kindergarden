import axios from 'axios'

const server = process.env.SERVER

const getGalleryTypes = ()=>{
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.get(`${server}/api/galtype`, {withCredentials:true});
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}
const deleteGalleryTypes = (d:string)=>{
   
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.delete(`${server}/api/galtype/${d}`, {withCredentials:true});
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}

const updateGalleryTypes = (d:string, q:any)=>{
    // console.log()
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.put(`${server}/api/galtype/${d}`, q, {withCredentials:true, });
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}
const createGalleryTypes = (d:any)=>{
    // console.log(d.get('title'))
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.post(`${server}/api/galtype/`, d, {withCredentials:true, headers: { "Content-Type": "multipart/form-data" }});
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}

export {getGalleryTypes, deleteGalleryTypes, updateGalleryTypes, createGalleryTypes}