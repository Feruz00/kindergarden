
import Loader from '../../ui/Loader'
import {Image, Popconfirm, Table} from 'antd' 
import {  RxTrash } from 'react-icons/rx'
import { useEffect } from 'react'
import { useCreateTeacher, useDeleteTeacher, useGetTeachers, useUpdatePhotoTeacher, useUpdateTeacherInfo } from '../../services/useTeachers'

import EditModal from '../../ui/Editable'
import UpdatePhotoModal from '../../ui/UpdatePhotoModal'
import CreateItem from '../../ui/CreateItem'

const Teachers = () => {
    const {isLoading, teachers} = useGetTeachers()
    const { deleteTeacherFn} = useDeleteTeacher()
    const {isPending: isTeacherPhoto, updatePhotoTeacherFn} = useUpdatePhotoTeacher()
    const {isPending: isTeacherInfo, updateTeacherInfoFn} = useUpdateTeacherInfo()
    const {isPending: isTeacherCreate, createTeacherFn} =  useCreateTeacher()
    useEffect(()=>{
        document.title = 'Admin | Mugallymlar'
    },[])

    if(isLoading){
       return <div className='w-full h-full flex items-center justify-center'>
            <Loader />
        </div>
    }
  return (
    <div className='w-full px-6 py-3 flex flex-col justify-center'>
        <h1 className="text-green-600 text-xl text-center font-normal px-5
                relative
                before:absolute before:w-16 before:h-[2px] before:content-[''] before:top-1/2  before:bg-green-600 before:-translate-x-[150%]
                after:absolute after:w-16 after:h-[2px] after:content-[''] after:top-1/2  after:bg-green-600 after:translate-x-[50%]
                
            ">
                Mugallymlar
            </h1>
            <div className='flex w-full justify-end py-10'>
        <CreateItem 
            buttonText='+ Täze mugallym goş'
            title='Täze mugallym goş'
            onSubmit={createTeacherFn}
            fields={[
                {label: 'Mugallymyň ady', name: 'name', rules: { required: 'Gözkezilen meýdany dolduryň' }, type:{isInput: true}  },
                {label: 'Mugallymyň wezipesi', name: 'job', rules: { required: 'Gözkezilen meýdany dolduryň' }, type:{isInput: true}  },
                {label: 'Mugallym hakda', name: 'description', rules: { required: 'Gözkezilen meýdany dolduryň' } , type: {isTextArea: true, row: 7}},
                {label: "Surat", name:"file", rules: { validate: (val) => val?.length > 0 || 'Surat faýl gerek' }, type:{isFile: true, accept: 'image/*'}}
            ]}
            isPending={isTeacherCreate}
        />
        </div>
        <Table 
            bordered
            dataSource={teachers.data.map(i=>({...i, key:i._id}))}
            columns={[
                {title: 'Mugallymyň suraty', dataIndex: 'url', key: 'url', render: (i, _)=>  <div className='w-60 h-60 flex items-center justify-center'>
                    <Image crossOrigin='anonymous' alt={i} src={`${process.env.SERVER}/${_.url}`}  className='object-cover' />
                </div> },
                {title: 'Mugallymyň ady', dataIndex: 'name', key: 'name', width: 'w-[10rem]'},
                {title: 'Mugallymyň gazanan üstünlikleri',  dataIndex: 'description', key: 'description', width:' w-[17rem]  '},
                {title: 'Wezipesi', dataIndex: 'job', key: 'job'},
                {
                    title: 'Sazlama',
                    dataIndex: '_id',
                    render: (p, _)=> <div className='flex gap-3 text-xl text-gray-600'>
                        
                       
                        <EditModal 
                            title='Maglumatlary sazla'
                            defaultValues={_}
                            fields={[
                                {label: 'Mugallymyň ady', name: 'name', rules: { required: 'Gözkezilen meýdany dolduryň' }, type: {isInput: true} },
                                {label: 'Mugallymyň wezipesi', name: 'job', rules: { required: 'Gözkezilen meýdany dolduryň' }, type: {isInput: true} },
                                {label: 'Mugallym hakda', name: 'description', rules: { required: 'Gözkezilen meýdany dolduryň' } , type: {isTextArea: true, row: 10}},
                            ]}
                            id={p}
                            isPending={isTeacherInfo}
                            onSubmit={updateTeacherInfoFn}
                        />
                        <UpdatePhotoModal 
                            isPending={isTeacherPhoto}
                            title='Surat ýükle'
                            onSubmit={updatePhotoTeacherFn}
                            id={p}
                        />


                        <Popconfirm  title="Siz pozmakcymy?" onConfirm={()=>deleteTeacherFn(p)} 
                            okButtonProps={{className: 'text-black border border-gray-300'}}
                        >
                            <RxTrash className='cursor-pointer'/>
                        </Popconfirm>

                    </div>,
                    width: '2rem'
                }
            ]}
            
            pagination={false}
         
        />
        
    </div>
    
  )
}

export default Teachers