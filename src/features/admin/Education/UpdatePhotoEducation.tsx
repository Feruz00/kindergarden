import {  Modal } from 'antd'
import React, {  useEffect, useState } from 'react'
import { useForm} from 'react-hook-form'

import {  Education, useUpdatePhotoEduction } from '../../../services/useEducation'
import { RxMix } from 'react-icons/rx';
import FileUploader from '../../../ui/FileUploader';

interface FormData {
    education: Education
  }
const UpdatePhotoEducation:React.FC<FormData> = ({education}) => {
    const { register, handleSubmit, formState: { errors } , watch, reset} = useForm();
    const {isPending, updatePhotoEducationFn} = useUpdatePhotoEduction()
    
    const [open, setOpen] = useState(false)
    useEffect(()=>{
        reset()
    },[])
    const onSubmit = async (d:any) => {
        const formData = new FormData()
        formData.append('file', d.file.item(0))
        // console.log(d.file)
        updatePhotoEducationFn({ id: education._id, data: formData },({
            onSuccess: ()=>{
                setOpen(false)
            }
        })); // Call the update function
        
    };  
    return (
        <>
            <RxMix onClick={()=>setOpen(true)} className='cursor-pointer' />
            <Modal title="Maglumatlary sazla" open={open} footer={null}  onCancel={()=>setOpen(false)}  
                okButtonProps={{className: 'text-black border border-gray-300'}}
            >
               <div className="max-w-md mx-auto">
               <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <FileUploader
                        name="file"
                        register={register}
                        multiple={false}
                        validation={{
                            validate: (val)=>
                                val?.length > 0 || 'Surat faýl gerek'
                        }}
                        accepted='image/*'
                        id="file"
                        disabled={isPending}
                        watch={watch}
                    />
                    {/* @ts-ignore */}
                     {errors?.file?.message && <p className='text-xs font-medium text-red-700'>  {errors?.file?.message} </p>}
                     <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded ' disabled={isPending} >Submit</button>
                </form>
                </div>
                
            </Modal>
        </>
        
);
  
}

export default UpdatePhotoEducation