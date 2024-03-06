import { Button } from 'antd';
import React, { useRef } from 'react';
import { useImperativeHandle } from 'react';
import { AiOutlineUpload } from 'react-icons/ai';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';

interface FileUploaderProps {
  id: string;
  accepted: string;
  register: UseFormRegister<any>;
  validation?: RegisterOptions;
  name: string;
  multiple?: boolean;
  disabled?: boolean;
  watch?: any;
}

const FileUploader: React.FC<FileUploaderProps> = ({
  id,
  accepted,
  register,
  validation = {},
  name,
  multiple = false,
  disabled = false,
  watch,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { ref, ...rest } = register(name, validation);

  const handleClick = () => {
    if (inputRef.current) inputRef.current.click();
  };

  useImperativeHandle(ref, () => inputRef.current);

  return (
    <div className='flex flex-row gap-3 items-center'>
      <input
        ref={inputRef}
        className='hidden'
        type="file"
        multiple={multiple}
        accept={accepted}
        id={id}
        {...rest}
      />
      <Button icon={<AiOutlineUpload />} onClick={handleClick} disabled={disabled}>Faýly saýla</Button>
      <p className='text-sm text-color-grey-600'>{watch && watch(name) && watch(name)?.length + " faýl saýlandy "}</p>
    </div>
  );
}

export default FileUploader;
