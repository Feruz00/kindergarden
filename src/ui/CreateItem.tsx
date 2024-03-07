import { Input, Modal } from 'antd';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import FileUploader from './FileUploader';

interface CreateItemProps<T> {
    onSubmit: (data: FormData) => void;
    title: string;
    buttonText: string;
    fields: { 
        name: keyof T; 
        label: string; 
        rules: Record<string, unknown>; 
        isTextArea?: boolean;
        row?: number
    }[];
    isPending: boolean;
}

const CreateItem = <T,>({ onSubmit, title, buttonText, fields }: CreateItemProps<T>) => {
    // @ts-ignore
    const { reset, handleSubmit, control, register, formState: { errors }, watch } = useForm<T>();
    const [open, setOpen] = useState(false);
  
    const handleClose = () => {
        setOpen(false);
        reset();
    };
  
    const handleFormSubmit = (data: T & { file: FileList } ) => {
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {

            if(typeof value === 'string') formData.append(key, value as string)
        } 
        );
        formData.append('file', data.file[0]);

        onSubmit(formData);
        handleClose()
    };

    return (
        <>
        <button className='px-10 py-2 rounded-2xl text-white bg-green-600 hover:bg-green-500 hover:px-16 transition-all duration-300 ' onClick={() => setOpen(true)}>
            {buttonText}
        </button>
        <Modal title={title} open={open} footer={null} onCancel={() => setOpen(false)} okButtonProps={{ className: 'text-black border border-gray-300' }}>
            {/* @ts-ignore */}
            <form onSubmit={handleSubmit(handleFormSubmit)} className='flex flex-col gap-4'>
            {fields.map((i) => (
                <div key={i.name as string} className='grid grid-cols-[7rem_1fr]'>
                <label className='col-span-1 font-medium whitespace-nowrap'>{i.label}</label>
                <Controller
                    name={i.name as string}
                    rules={i.rules}
                    // @ts-ignore
                    control={control}
                    render={({ field }) => (
                    i?.isTextArea ? <Input.TextArea rows={i.row} className='col-span-6' {...field} /> : <Input className='col-span-6' {...field} />
                    )}
                />
                </div>
            ))}
            <FileUploader
                name="file"
                register={register}
                multiple={false}
                validation={{ validate: (val) => val?.length > 0 || 'Surat faýl gerek' }}
                accepted='image/*'
                id="file"
                disabled={false} // Set to false because disabling it here would prevent file upload
                watch={watch}
            />
            {/* @ts-ignore */}
            {errors?.file?.message && <p className='text-xs font-medium text-red-700'>  {errors?.file?.message} </p>}
            <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded' >Döret</button>
            </form>
        </Modal>
        </>
    );
};

export default CreateItem;
