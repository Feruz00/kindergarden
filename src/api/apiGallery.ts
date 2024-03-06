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
export {getGallery, getOneGallery}