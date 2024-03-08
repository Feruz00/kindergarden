import  { useState } from 'react';
import { Input, Modal, Select } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { RxPencil2 } from 'react-icons/rx';

interface EditModalProps<T> {
  title: string;
  defaultValues: T;
  id:string;
  fields: {
    label: string;
    name: keyof T;
    isTextArea: boolean;
    isSelect?:boolean;
    options?:{value: string, text: string}[];
    row?: number; // Make row optional
    rules: Record<string, unknown>;
  }[];
  onSubmit: ({id,data}:{id:string, data:T}) => void;
  isPending: boolean;
}

function EditModal<T>({ title, defaultValues, fields, onSubmit, isPending,id }: EditModalProps<T>) {
    // @ts-ignore
    const { reset, handleSubmit, control } = useForm<T>({ defaultValues });
    const [visible, setVisible] = useState(false); 

    const handleClose = () => {
        setVisible(false);
        reset();
    };
    
    const submitHandler = (data: T) => {
        onSubmit({id,data });
        handleClose();
    };

    return (
        <>
        
            <RxPencil2 onClick={() => setVisible(true)} className='cursor-pointer' />
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
                                    i.isSelect ?  <Select {...field}>
                                        {
                                            i.options?.map(i=>(
                                                <Select.Option key={i.value} value={i.value} >{i.text}</Select.Option>
                                            ))
                                        }
                                  </Select>:
                                    i.isTextArea ? <Input.TextArea rows={i.row} className='col-span-6' {...field}  /> : <Input className='col-span-6' {...field} />
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

export default EditModal;
