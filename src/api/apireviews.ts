import axios from 'axios'

const server = process.env.SERVER

const getReviews = ()=>{
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.get(`${server}/api/reviews`, {withCredentials:true});
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}

const deleteReview = (d: string)=>{
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.delete(`${server}/api/reviews/${d}`, {withCredentials:true});
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}

const updateReviewInfo = (d: string, q:any)=>{
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.patch(`${server}/api/reviews/${d}`, q, {withCredentials:true});
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}

const updatePhotoReview = (id:string,d:FormData)=>{
    
    return new Promise( async (resolve, reject)=>{
        await axios.patch(`${server}/api/reviews/${id}/img`,d, {
            headers: { "Content-Type": "multipart/form-data" },
            withCredentials: true
        })
            .then( res=>resolve(res.data) )
            .catch( err=>reject(err) )
    } )
}
const createReview = (d:FormData)=>{
    return new Promise( async (resolve, reject)=>{
        try {
            const res = await axios.post(`${server}/api/reviews/`, d, {withCredentials:true, });
            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    } )
}
export {getReviews, deleteReview, updateReviewInfo, updatePhotoReview, createReview}