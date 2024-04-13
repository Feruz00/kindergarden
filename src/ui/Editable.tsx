import   { useState, ReactNode, cloneElement } from 'react';
import { Input, Modal, Select } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { RxPencil2 } from 'react-icons/rx';
import ListInput from './ListItems';
import { ignore } from 'antd/es/theme/useToken';

interface TextAreaProp{
    row: number;
    isTextArea: boolean;
}
interface SelectProp{
    options?:{value: string, text: string}[];
    isSelect: boolean;
}
interface InputProp{
    isInput: boolean;
}
interface PasswordProp{
    isPassword: boolean;
}
interface ListProp{
    isList: boolean
}
interface ListCheckProp{
    id:string;
    name:string
}
type FieldProp = TextAreaProp | SelectProp  | InputProp | PasswordProp|ListProp;

type ValidationRule = {
    validate: (val: any) => boolean | string;
};

interface EditModalProps<T> {
  title: string;
  children?: ReactNode,
  defaultValues: T;
  id:string;
  fields: {
    name: keyof T; 
    label: string; 
    rules:ValidationRule | Record<string, unknown>; 
    type: FieldProp
  }[];
  onSubmit: ({id,data}:{id:string, data:T}) => void;
  isPending: boolean;
}

function EditModal<T>({ title, defaultValues, fields, onSubmit, isPending,id, children }: EditModalProps<T>) {
    // @ts-ignore
    const { reset, handleSubmit, control, formState: { errors }, watch, getValues, setValue  } = useForm<T>({ defaultValues });
    const [visible, setVisible] = useState(false); 

    // console.log(defaultValues)
    const handleClose = () => {
        setVisible(false);
        reset();
    };

    // console.log(getValues())
    
    const submitHandler = (data: T) => {
        //@ts-ignore
        const newData = Object.entries(data).reduce((acc: Record<string, any>, [key, value]) => {
            if (Array.isArray(value)) {
                // Convert the array to an object with 'name' as value and 'id' as key
                const obj = value.map((item: ListCheckProp) => {
                    if(item.name) return item.name;
                });
                // Add the object to the accumulator with the original key
                acc[key] = obj;
            } else {
                // Add non-array values directly to the accumulator
                acc[key] = value;
            }
            return acc;
        }, {});
        // console.log(newData) 
        //@ts-ignore
        onSubmit({id, data: newData });
        handleClose();
        reset()
    };
    const openModal = () => {
        // Set default values when the modal is opened
        // @ts-ignore
        Object.entries(defaultValues).forEach(([key, value]) => {
          // @ts-ignore
            setValue(key as keyof T, value);
        });
        setVisible(true);
      };
    return (
        <>
              {
            children ? cloneElement(children as React.ReactElement<any>, { onClick: openModal }) : 
                <RxPencil2 onClick={openModal} className='cursor-pointer' />
            }


            <Modal title={title} open={visible} footer={null} onCancel={handleClose} okButtonProps={{ className: 'text-black border border-gray-300' }}>
                {/* @ts-ignore */}
                <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col gap-4'>
                    {fields.map(i => (
                        <div key={i.name as string} className='grid grid-cols-[7rem_1fr]'>
                            <label className='col-span-1 font-medium whitespace-nowrap'>{i.label}</label>
                            {
                                (i.type as ListProp)?.isList ? (
                                    //@ts-ignore
                                    // <h1>Feruz</h1>
                                    <ListInput name={i.name as string} control={control} watch={watch} />
                                ):
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
                                    <Input className='col-span-6' {...field} />

                                )}
                            />
                            }
                        {
                        ( errors && errors[i.name as keyof T] && (
                            // @ts-ignore
                            <p className='text-xs font-medium text-red-700'>{errors[i.name as keyof T]?.message}</p>
                        ))
                    }
                        </div>
                    ))}
                    <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded' disabled={isPending}>Submit</button>
                </form>
            </Modal>
        </>
    );
}

export default EditModal;
