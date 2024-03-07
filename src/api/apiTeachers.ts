import axios from 'axios'

const server = process.env.SERVER

const getTeachers = ()=>{
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.get(`${server}/api/teachers`, {withCredentials:true});
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}

const getTeacher = (d: string)=>{
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.get(`${server}/api/teachers/${d}`, {withCredentials:true});
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}

const updateTeacherInfo = (d: string, q:any)=>{
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.patch(`${server}/api/teachers/${d}`, q, {withCredentials:true});
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}

const deleteTeacher = (d: string)=>{
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.delete(`${server}/api/teachers/${d}`, {withCredentials:true});
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}
const createTeacher = (d:FormData)=>{
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.post(`${server}/api/teachers/`, d, {withCredentials:true, });
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}
const updatePhotoTeacher = (id:string,d:FormData)=>{
    // console.log(id)
    return new Promise( async (resolve, reject)=>{
        await axios.patch(`${server}/api/teachers/${id}/img`,d, {
            headers: { "Content-Type": "multipart/form-data" },
            withCredentials: true
        })
            .then( res=>resolve(res.data) )
            .catch( err=>reject(err) )
    } )
}


export {getTeachers, createTeacher, updatePhotoTeacher, updateTeacherInfo, deleteTeacher, getTeacher}