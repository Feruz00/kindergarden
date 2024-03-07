import axios from 'axios'

const server = process.env.SERVER

const getSubjects = ()=>{
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.get(`${server}/api/subjects`, {withCredentials:true});
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}

const deleteSubject = (d: string)=>{
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.delete(`${server}/api/subjects/${d}`, {withCredentials:true});
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}

const updateSubjectInfo = (d: string, q:any)=>{
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.patch(`${server}/api/subjects/${d}`, q, {withCredentials:true});
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}

const updatePhotoSubject= (id:string,d:FormData)=>{
    
    return new Promise( async (resolve, reject)=>{
        await axios.patch(`${server}/api/subjects/${id}/img`,d, {
            headers: { "Content-Type": "multipart/form-data" },
            withCredentials: true
        })
            .then( res=>resolve(res.data) )
            .catch( err=>reject(err) )
    } )
}
const createSubject = (d:FormData)=>{
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.post(`${server}/api/subjects/`, d, {withCredentials:true, });
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}

export {getSubjects, deleteSubject, updatePhotoSubject, updateSubjectInfo, createSubject}