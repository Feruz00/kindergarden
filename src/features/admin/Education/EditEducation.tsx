import { Input, Modal } from 'antd'
import React, {  useState } from 'react'
import {Controller, useForm} from 'react-hook-form'
import { Education } from '../../../services/useEducation'
import { useUpdateEducation } from '../../../services/useEducation'; // Import useUpdateEducation hook
import { RxPencil2 } from 'react-icons/rx';

interface EditEducationProps {
    education: Education;// Function to close modal
}
const EditEducation:React.FC<EditEducationProps> = ({ education }) => {
    const { reset, handleSubmit, control} = useForm<Education>({defaultValues: education })
    const {isPending, updateEducationFn} = useUpdateEducation()
    const [open, setOpen] = useState(false)
    const onSubmit = (data: Education)=>{
       
        updateEducationFn(({ id: String(education._id), data }),{
            onSuccess:()=>{
                reset()
                
                setOpen(false)
            }
        }); 
        setOpen(false)
    }
    return (
        <>
            <RxPencil2 onClick={()=>setOpen(true)} className='cursor-pointer' />
            <Modal title="Maglumatlary sazla" open={open} footer={null}  onCancel={()=>setOpen(false)}  
                okButtonProps={{className: 'text-black border border-gray-300'}}
            >
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
                        <div className='grid grid-cols-[7rem_1fr]'>
                            <label className='col-span-1 font-medium whitespace-nowrap'>Ýörite okuwyň ady</label>
                            <Controller 
                                name='title'
                                rules={{
                                    required: 'Gözkezilen meýsdany dolduryň'
                                }}
                                control={control}
                                render={({field})=><Input className='col-span-6'  {...field} />}
                            />
                        </div>
                        <div className='grid grid-cols-[7rem_1fr]'>
                            <label className='col-span-1 font-medium whitespace-nowrap'>Okuwyň mazmuny</label>
                            <Controller 
                                name='description'
                                rules={{
                                    required: 'Gözkezilen meýdany dolduryň'
                                }}
                                control={control}
                                render={({field})=><Input.TextArea className='col-span-6' rows={5} {...field}  />}
                            />
                        </div>
                        <div className='grid grid-cols-[7rem_1fr] font-medium whitespace-nowrap'>
                            <label className='col-span-1'>Web salgysy</label>
                            <Controller 
                                name='link'
                                rules={{
                                    required: 'Gözkezilen meýdany dolduryň'
                                }}
                                control={control}
                                render={({field})=><Input className='col-span-6' {...field} />}
                            />
                        </div>
                        <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded ' disabled={isPending} >Submit</button>
                    </form>
                </div>
            </Modal>
        </>
        
);
  
}

export default EditEducation