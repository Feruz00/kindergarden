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

export {getGalleryTypes}