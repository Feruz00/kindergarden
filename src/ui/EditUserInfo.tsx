import  { useState } from 'react';
import { Input, Modal } from 'antd';
import { Controller, useForm } from 'react-hook-form';

interface EditModalProps<T> {
  title: string;
    
  defaultValues: T;
  fields: {
    label: string;
    name: keyof T;
    isTextArea: boolean;
    pass?:boolean;
    row?: number; // Make row optional
    rules: Record<string, unknown>;
  }[];
  onSubmit: (data:T) => void;
  isPending: boolean;
}

function EditUserInfo<T>({ title, defaultValues, fields, onSubmit, isPending }: EditModalProps<T>) {
    // @ts-ignore
    const { reset, handleSubmit, control } = useForm<T>({ defaultValues });
    const [visible, setVisible] = useState(false); 

    const handleClose = () => {
        setVisible(false);
        reset();
    };
    
    const submitHandler = (data: T) => {
        onSubmit(data);
        handleClose();
    };

    return (
        <>
            <button onClick={() => setVisible(true)} className='px-5 py-2 rounded-2xl bg-green-600 hover:bg-green-500 transition-all duration-500 text-white'> 
                {title}
            </button>
        
            <Modal title={title} open={visible} footer={null} onCancel={handleClose} okButtonProps={{ className: 'text-black border border-gray-300' }}>
                {/* @ts-ignore */}
                <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col gap-4'>
                    {fields.map(i => (
                        <div key={i.name as string} className='grid grid-cols-[7rem_1fr]'>
                            <label className='col-span-1 font-medium whitespace-nowrap'>{i.label}</label>
                            <Controller
                                name={i.name as string}
                                rules={i.rules}
                                // @ts-ignore
                                control={control}
                                render={({ field }) => (
                                    
                                    i.pass ? <Input.Password className='col-span-6' {...field}  /> : <Input className='col-span-6' {...field} />
                                  )}
                            />
                        </div>
                    ))}
                    <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded' disabled={isPending}>Submit</button>
                </form>
            </Modal>
        </>
    );
}

export default EditUserInfo;
