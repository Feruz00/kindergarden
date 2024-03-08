import axios from 'axios'

const server = process.env.SERVER

const getEducations = ()=>{
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.get(`${server}/api/education`, {withCredentials:true});
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}

const deleteEducation = (d:string)=>{
    // console.log(d)
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.delete(`${server}/api/education/${d}`, {withCredentials:true});
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}

const updateEducation = (d:string, q:any)=>{
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.patch(`${server}/api/education/${d}`, q, {withCredentials:true, });
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}
const createEducation = (d:FormData)=>{
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.post(`${server}/api/education/`, d, {withCredentials:true, });
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}
const updatePhotoEducation = (id:string,d:FormData)=>{
    
    return new Promise( async (resolve, reject)=>{
        await axios.patch(`${server}/api/education/${id}/photo`,d, {
            headers: { "Content-Type": "multipart/form-data" },
            withCredentials: true
        })
            .then( res=>resolve(res.data) )
            .catch( err=>reject(err) )
    } )
}


export {getEducations, deleteEducation, updateEducation, updatePhotoEducation, createEducation}