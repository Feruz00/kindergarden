import {  Input, Modal, Select, Switch } from 'antd';
import { useState } from 'react';
import { Controller,  useForm } from 'react-hook-form';
import FileUploader from './FileUploader';
import ListInput from './ListItems';

interface SwitchProp{
    isSwitch: boolean
}
interface ListProp{
    isList: boolean
}
interface ListCheckProp{
    id:string;
    name:string
}
interface TextAreaProp{
    row: number;
    isTextArea: boolean;
}
interface SelectProp{
    options?:{value: string, text: string}[];
    isSelect: boolean;
}
interface FileProp{
    accept: string;
    isFile: boolean
}
interface InputProp{
    isInput: boolean;
}
interface PasswordProp{
    isPassword: boolean;
}
type FieldProp = TextAreaProp | SelectProp | FileProp | InputProp | PasswordProp | SwitchProp | ListProp;
type ValidationRule = {
    validate: (val: any) => boolean | string;
};
interface CreateItemProps<T> {
    onSubmit: (data: FormData) => void;
    title: string;
    buttonText: string;
    fields: { 
        name: keyof T; 
        label: string; 
        rules:ValidationRule | Record<string, unknown>; 
        type: FieldProp
    }[];
    isPending: boolean;
}

const CreateItem = <T,>({ onSubmit, title, buttonText, fields }: CreateItemProps<T>) => {
    // @ts-ignore
    const { reset, handleSubmit, control, register, formState: { errors }, watch } = useForm<T>();
    const [open, setOpen] = useState(false);
    // @ts-ignore
    

    const handleClose = () => {
        setOpen(false);
        reset();
    };
 
    const handleFormSubmit = (data: T & { [key: string]: FileList }) => {
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            if (value instanceof FileList) {
                formData.append(key, value[0])
            } 
            else if (Array.isArray(value)) {
                (value as ListCheckProp[]).forEach((item: ListCheckProp, index:number) => {
                        if(item.name) formData.append(`${key}[${index}]`, item.name);
                });
            }
            else {
                formData.append(key, value as string);
            }
        });
        onSubmit(formData)
        handleClose();
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
                {

                (i.type as FileProp)?.isFile ? (
                        <FileUploader
                            name={i.name as string}
                            register={register}
                            multiple={false}
                            validation={i.rules} // { validate: (val) => val?.length > 0 || 'Surat faýl gerek' }
                            accepted={(i.type as FileProp).accept}  //'image/*'
                            id={i.name as string}
                            disabled={false} 
                            watch={watch}
                        />
                           
                    ):
                    (i.type as ListProp)?.isList ? (
                        //@ts-ignore
                        <ListInput name={i.name as string} control={control} watch={watch} />
                    ):
                    (
                        <Controller
                            name={i.name as string}
                            rules={i.rules}
                            // @ts-ignore
                            control={control}
                            render={({ field }) => (
                                
                                (i.type as SelectProp)?.isSelect ?  
                                    <Select {...field}>
                                        {(i.type as SelectProp)?.options?.map((option) => (
                                            <Select.Option key={option.value} value={option.value}>{option.text}</Select.Option>
                                        ))}
                                    </Select>:
                                (i.type as TextAreaProp)?.isTextArea ? <Input.TextArea rows={(i.type as TextAreaProp).row} className='col-span-6' {...field} />:
                                (i.type as PasswordProp)?.isPassword ? <Input.Password className='col-span-6' {...field} /> : 
                                (i.type as SwitchProp)?.isSwitch ? <Switch {...field} />:
                                <Input className='col-span-6' {...field} />

                            )}
                        />)
                }
               {
                    ( errors && errors[i.name as keyof T] && (
                        // @ts-ignore
                        <p className='text-xs font-medium text-red-700'>{errors[i.name as keyof T]?.message}</p>
                    ))
                }
                </div>)
                
            )}   
            <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded' >Döret</button>
            </form>
        </Modal>
        </>
    );
};

export default CreateItem;
