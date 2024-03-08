import axios from 'axios'

const server = process.env.SERVER

type Params = {
    type?: string; // Define types for known parameters. '?' indicates optional.
    [key: string]: string | undefined; // Allow other string parameters
};


const getGallery = (p:Params )=>{
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.get(`${server}/api/gallery`, {withCredentials:true, params: p});
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}
const getOneGallery = (p:string )=>{
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.get(`${server}/api/gallery/${p}`, {withCredentials:true});
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}

const deleteGallery = (d:string)=>{
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.delete(`${server}/api/gallery/${d}`, {withCredentials:true});
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}

const updateGallery = (d:string, q:any)=>{
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.patch(`${server}/api/gallery/${d}`, q, {withCredentials:true, });
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}

const createGallery = (d:FormData)=>{
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.post(`${server}/api/gallery/`, d, {withCredentials:true, });
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}
const updatePhotoGallery = (id:string,d:FormData)=>{
    console.log(d.values)
    return new Promise( async (resolve, reject)=>{
        await axios.patch(`${server}/api/gallery/${id}/image`,d, {
            headers: { "Content-Type": "multipart/form-data" },
            withCredentials: true
        })
            .then( res=>resolve(res.data) )
            .catch( err=>reject(err) )
    } )
}
const updateFileGallery = (id:string,d:FormData)=>{
    
    return new Promise( async (resolve, reject)=>{
        await axios.patch(`${server}/api/gallery/${id}/file`,d, {
            headers: { "Content-Type": "multipart/form-data" },
            withCredentials: true
        })
            .then( res=>resolve(res.data) )
            .catch( err=>reject(err) )
    } )
}
export {getGallery, getOneGallery, deleteGallery, updateGallery, createGallery, updatePhotoGallery, updateFileGallery}