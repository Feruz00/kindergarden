import axios from 'axios'

const server = process.env.SERVER

const getAbouts = ()=>{
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.get(`${server}/api/about`, {withCredentials:true});
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}


const deleteAbout = (d:string)=>{
    // console.log(d)
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.delete(`${server}/api/about/${d}`, {withCredentials:true});
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}

const updateAboutInfo = (d:string, q:any)=>{
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.put(`${server}/api/about/${d}`, q, {withCredentials:true, });
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}
const updateAboutPhotos = ( q:string, d:FormData)=>{
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.patch(`${server}/api/about/${q}`, d, {withCredentials:true, 
                headers: { "Content-Type": "multipart/form-data" }
            });
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}
const createAbout = (d:FormData)=>{
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.post(`${server}/api/about/`, d, {withCredentials:true, });
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}

export {getAbouts, deleteAbout, createAbout, updateAboutInfo, updateAboutPhotos}