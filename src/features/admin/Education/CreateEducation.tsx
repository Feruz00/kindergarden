import { Input, Modal } from 'antd'
import React, {  useState } from 'react'
import {Controller, useForm} from 'react-hook-form'
import { Education, useCreateEducation } from '../../../services/useEducation'
import FileUploader from '../../../ui/FileUploader';

interface EditEducationProps extends Education {
    file: FileList
}
const CreateEducation:React.FC = () => {
    const { reset, handleSubmit, control, register, formState:{errors}, watch} = useForm<EditEducationProps>()
    const {isPending, createEducationFn} = useCreateEducation()
    const [open, setOpen] = useState(false)
    
    const onSubmit = (d: EditEducationProps)=>{
        const formData = new FormData()
        formData.append('title', d.title)
        formData.append('description', d.description)
        formData.append('link', d.link)
        // @ts-ignore
        formData.append('file', d.file.item(0))

        
        createEducationFn(formData,{
            onSuccess:()=>{
                reset()
                setOpen(false)
            }
        }); 
        setOpen(false)
    }
    return (
        <>
            <button className='px-10 py-2 text-white bg-green-600 hover:bg-green-500 transition-all duration-300' onClick={()=>setOpen(true)}>
                + Täze ýörite okuwy bellige al
            </button>
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
                        <div  className='grid grid-cols-[7rem_1fr] font-medium whitespace-nowrap'>
                            <label className='col-span-1'>Suraty</label>
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
                        </div>
                        <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded ' disabled={isPending} >Döret</button>
                    </form>
                </div>
            </Modal>
        </>
        
);
  
}

export default CreateEducation