
import {  useCreateEducation, useDeleteEducation, useGetEducations, useUpdateEducation, useUpdatePhotoEduction } from '../../services/useEducation'
import Loader from '../../ui/Loader'
import {Popconfirm, Table} from 'antd' 
import {  RxTrash } from 'react-icons/rx'
import { useEffect } from 'react'
import EditModal from '../../ui/Editable'
import UpdatePhotoModal from '../../ui/UpdatePhotoModal'
import CreateItem from '../../ui/CreateItem'

const Educations = () => {
    const {isLoading, educations} = useGetEducations()
    const { deleteEducationFn} = useDeleteEducation()
    const {isPending: isEducationInfo, updateEducationFn} = useUpdateEducation()
    const {isPending: isEducationPhoto, updatePhotoEducationFn} = useUpdatePhotoEduction()
    const {isPending: isEducationCreate, createEducationFn} = useCreateEducation()
    useEffect(()=>{
        document.title = 'Admin | Ýörite okuwlar'
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
                Ýörite okuwlar
            </h1>
            <div className='flex w-full justify-end py-10'>
        <CreateItem 
        
            buttonText='+ Täze ýörite okuw döret'
            title='Täze ýörite okuw döret'
            onSubmit={createEducationFn}
            fields={[
                {label: 'Ýörite okuwyň ady', name: 'title', rules: { required: 'Gözkezilen meýdany dolduryň' }, type:{isInput: true} },
                {label: 'Okuwyň mazmuny', name: 'description', rules: { required: 'Gözkezilen meýdany dolduryň' } , type:{isTextArea: true, row: 6} },
                {label: 'Web salgysy', name: 'link', rules: { required: 'Gözkezilen meýdany dolduryň' }, type:{isInput: true} },
                {label: 'Suraty saýlaň', name: 'file', rules: { validate: (val) => val?.length > 0 || 'Surat faýl gerek' }, type:{isFile: true, accept: 'image/*'} },
                
            ]}
            isPending={isEducationCreate}
        />
        </div>
        <Table 
            bordered
            dataSource={educations.data.map(i=>({...i, key:i._id}))}
            columns={[
                {title: 'Gyzyklanma suraty', dataIndex: 'url', key: 'url', render: (i, _)=>  <div className='w-60 h-60 flex items-center justify-center'>
                    <img crossOrigin='anonymous' alt={i} src={`${process.env.SERVER}/${_.url}`}  className='object-cover' />
                </div> },
                {title: 'Ýörite okuwyň ady', dataIndex: 'title', key: 'title', width: 'w-[10rem]'},
                {title: 'Okuwyň mazmuny',  dataIndex: 'description', key: 'description', width:' w-[17rem]  '},
                {title: 'Web salygysy', dataIndex: 'link', key: 'link'},
                {
                    title: 'Sazlama',
                    dataIndex: '_id',
                    render: (p, _)=> <div className='flex gap-3 text-xl text-gray-600'>
                        
                        <EditModal 
                            title='Maglumatlary sazla'
                            defaultValues={_}
                            fields={[
                                {label: 'Ýörite okuwyň ady', name: 'title', rules: { required: 'Gözkezilen meýdany dolduryň' }, isTextArea: false },
                                {label: 'Okuwyň mazmuny', name: 'description', rules: { required: 'Gözkezilen meýdany dolduryň' } , row: 6, isTextArea: true},
                                {label: 'Web salgysy', name: 'link', rules: { required: 'Gözkezilen meýdany dolduryň' }, isTextArea: false },
                            ]}
                            id={p}
                            isPending={isEducationInfo}
                            onSubmit={updateEducationFn}
                        />
                        <UpdatePhotoModal 
                            isPending={isEducationPhoto}
                            title='Surat ýükle'
                            onSubmit={updatePhotoEducationFn}
                            id={p}
                        />

                        <Popconfirm  title="Siz pozmakcymy?" onConfirm={()=>deleteEducationFn(p)} 
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

export default Educations