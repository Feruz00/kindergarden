
import Loader from '../../ui/Loader'
import {Popconfirm, Table} from 'antd' 
import {  RxTrash } from 'react-icons/rx'
import { useEffect } from 'react'


import EditModal from '../../ui/Editable'
import CreateItem from '../../ui/CreateItem'
import { useCreateGalleryType, useDeleteGalleryType, useGetGalleryTypes, useUpdateGalleryType } from '../../services/useGalleryTypes'

const GalleryTypes = () => {
    const {isLoading, galleryTypes} = useGetGalleryTypes()
    const { deleteGalleryTypeFn} = useDeleteGalleryType()
    const {isPending: isGalleryTypeInfo, updateGalleryTypeFn} = useUpdateGalleryType()
    const {isPending: isCreateGalleryType, createGalleryTypeFn} = useCreateGalleryType()
    useEffect(()=>{
        document.title = 'Admin | Ýüklenen maglumatlaryň görnüşleri'
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
                Jadyly sandyga degişli toplumlar
            </h1>
            <div className='flex w-full justify-end py-10'>
        <CreateItem 
            buttonText='+ Täze toplum goş'
            title='Täze toplum goş'
            onSubmit={createGalleryTypeFn}
            
            fields={[
                {label: 'Ady', name: 'title', rules: { required: 'Gözkezilen meýdany dolduryň' }, type:{isInput: true} }
            ]}
            isPending={isCreateGalleryType}
        />
        </div>
        <Table 
            bordered
            dataSource={galleryTypes.data.map(i=>({...i, key:i._id}))}
            columns={[
                
                {title: 'Toplumyň ady', dataIndex: 'title', key: 'title', width: 'w-[90%]'},
                
                {
                    title: 'Sazlama',
                    dataIndex: '_id',
                    render: (p, _)=> <div className='flex gap-3 text-xl text-gray-600'>
                        
                        <EditModal 
                            title='Maglumatlary sazla'
                            defaultValues={_}
                            fields={[
                                {label: 'Ady', name: 'title', rules: { required: 'Gözkezilen meýdany dolduryň' }, type: {isInput: true} },
                                
                            ]}
                            id={p}
                            isPending={isGalleryTypeInfo}
                            onSubmit={updateGalleryTypeFn}
                        />
                       

                        <Popconfirm  title="Siz pozmakcymy?" onConfirm={()=>deleteGalleryTypeFn(p)} 
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

export default GalleryTypes