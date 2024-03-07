import { Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { RxMix } from 'react-icons/rx';
import FileUploader from './FileUploader';

interface FormDataType {
  id: string;
  onSubmit: (data: { id: string; data: FormData }) => void;
  title: string;
  isPending: boolean;
}

const UpdatePhotoModal: React.FC<FormDataType> = ({ id, onSubmit, title, isPending }) => {
    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();
    const [open, setOpen] = useState(false);
  
    useEffect(() => {
      reset();
    }, []);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      reset()
    };
  
    const handleFormSubmit = async (data: any) => {
        const formData = new FormData();
        formData.append('file', data.file[0]);
        onSubmit({ id, data: formData }); // Call onSubmit with the correct format
        handleClose();
    };
  
    return (
      <>
        <RxMix onClick={handleOpen} className='cursor-pointer' />
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
  
  export default UpdatePhotoModal;