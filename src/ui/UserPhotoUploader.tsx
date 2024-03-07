import { Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import FileUploader from './FileUploader';

interface FormDataType {
  onSubmit: (data:FormData) => void;
  title: string;
  isPending: boolean;
}

const UserPhotoUploader: React.FC<FormDataType> = ({ onSubmit, title, isPending }) => {
    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();
    const [open, setOpen] = useState(false);
  
    useEffect(()=>{
      reset()
    },[])
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      reset()
    };
  
    const handleFormSubmit = async (data: any) => {
        const formData = new FormData();
        // console.log(data.file[0])
        formData.append('file', data.file[0]);
        onSubmit(formData); // Call onSubmit with the correct format
        handleClose();
    };
  
    return (
      <>
        <button className='px-5 py-2 rounded-2xl bg-green-600 hover:bg-green-500 transition-all duration-500 text-white' onClick={handleOpen}> Suraty çalyş </button>
        <Modal title={title} open={open} footer={null} onCancel={handleClose} okButtonProps={{ className: 'text-black border border-gray-300' }}>
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
              <FileUploader
                name="file"
                register={register}
                multiple={false}
                validation={{
                  validate: (val:FileList) => val?.length > 0 || 'Surat faýl gerek'
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
  };
  
  export default UserPhotoUploader;