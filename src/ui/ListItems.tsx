import { useState } from 'react';
import { Input, Button, Tag } from 'antd';
import { useFieldArray, Control, FieldValues } from 'react-hook-form';

interface ListItem {
  id: string;
  name: string;
}

interface ListInputProps<T extends FieldValues> {
  name: keyof T;
  control: Control<T>;
}

const ListInput = <T extends FieldValues>({ name, control }: ListInputProps<T>) => {
  //@ts-ignore
  const { append, fields, remove } = useFieldArray<ListItem>({ control, name: name as string });
  const [text, setText] = useState('');
// @ts-ignore
  const handleAddItem = () => {
    if (text.trim().length > 0) {
      //@ts-ignore
      append({ id: text, name: text });
      setText('');
    }
  };

  return (
    <div className='flex flex-col gap-3 justify-start'>
      <div className='w-full flex flex-row flex-wrap gap-3'>
      {/* @ts-ignore */}
      
        {fields.map((item: ListItem, index) => (
          <Tag key={item.id} onClose={() => remove(index)} closable>
            {item.name}
          </Tag>
        ))}
      </div>

      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="col-span-6"
        onPressEnter={handleAddItem} // Add item on Enter press
      />

      <Button onClick={handleAddItem}>Goş</Button>
    </div>
  );
};

export default ListInput;
