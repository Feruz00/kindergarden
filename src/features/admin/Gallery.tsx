
import Loader from '../../ui/Loader'
import {Popconfirm, Table} from 'antd' 
import {  RxTrash } from 'react-icons/rx'
import { useEffect } from 'react'
import { useCreateGallery, useDeleteGallery, useGetGallery, useUpdateGallery, useUpdatePhotoGallery } from '../../services/useGallery'
import { useGetGalleryTypes } from '../../services/useGalleryTypes'
import EditModal from '../../ui/Editable'
import UpdatePhotoModal from '../../ui/UpdatePhotoModal'
import CreateGallery from '../../ui/CreateGallery'

const GalleryAdmin = () => {
    const {isLoading, galleries} = useGetGallery()
    const {isLoading: isGalleryTypes, galleryTypes} = useGetGalleryTypes()
    const { deleteGalleryFn} = useDeleteGallery()
    const {isPending: isGalleryInfo, updateGalleryFn} = useUpdateGallery()
    const {isPending: isGalleryPhoto, updatePhotoGalleryFn} = useUpdatePhotoGallery()
    const {isPending: isGalleryCreate, createGalleryFn} = useCreateGallery()

    useEffect(()=>{
        document.title = 'Admin | Jadyly sandyk'
    },[])

    if(isLoading || isGalleryTypes){
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
                Jadyly sandyk
            </h1>
            <div className='flex w-full justify-end py-10'>
        <CreateGallery 
        
            buttonText='+ Jadyly sandyga maglumat goş'
            title='Jadyly sandyga maglumat goş'
            onSubmit={createGalleryFn}
            fields={[
                {label: 'Maglumadyň ady', name: 'title', rules: { required: 'Gözkezilen meýdany dolduryň' }, isTextArea: false },
                {label: 'Toplum görnüşi', name: 'type', rules: { required: 'Gözkezilen meýdany dolduryň' } , isSelect: true, 
                                    options: galleryTypes.data.map(j=>({value: String(j._id), text: String(j.title)})) , isTextArea: false},
            ]}
            isPending={isGalleryCreate}
        />
        </div>
        <Table 
            bordered
            dataSource={galleries.data.map(i=>({...i, key:i._id}))}
            columns={[
                {title: 'Suraty', dataIndex: 'picture', key: 'picture', render: (i, _)=>  <div className=' w-28 h-28 flex items-center justify-center '>
                    <img crossOrigin='anonymous' alt={i} src={`${process.env.SERVER}/${_.picture}`}  className='object-cover ' />
                </div> },
                {title: 'Maglumadyň ady', dataIndex: 'title', key: 'title', width: 'w-[10rem]'},
                {title: 'Toplum görnüşi',  dataIndex: 'type', key: 'type', render: (p)=> <p>{p.title}</p> ,
            
                    filters: galleryTypes.data.map(i=>({text: i.title, value: i._id})),
                    // @ts-ignore
                    onFilter: (value: string, record) => record.type._id.includes(value),
                    // filterResetToDefaultFilteredValue={true}

                },
                {
                    title: 'Sazlama',
                    dataIndex: '_id',
                    render: (p, _)=> <div className='flex gap-3 text-xl text-gray-600'>
                        
                        <EditModal 
                            title='Maglumatlary sazla'
                            defaultValues={_}
                            fields={[
                                {label: 'Maglumadyň ady', name: 'title', rules: { required: 'Gözkezilen meýdany dolduryň' }, isTextArea: false },
                                {label: 'Toplum görnüşi', name: 'type', rules: { required: 'Gözkezilen meýdany dolduryň' } , isSelect: true, 
                                    options: galleryTypes.data.map(j=>({value: String(j._id), text: String(j.title)})) , isTextArea: false},
                                // {label: 'Web salgysy', name: 'link', rules: { required: 'Gözkezilen meýdany dolduryň' }, isTextArea: false },
                            ]}
                            id={p}
                            isPending={isGalleryInfo}
                            onSubmit={updateGalleryFn}
                        />
                        <UpdatePhotoModal 
                            isPending={isGalleryPhoto}
                            title='Surat ýükle'
                            onSubmit={updatePhotoGalleryFn}
                            id={p}
                        />
                        {/* 
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
                        /> */}

                        <Popconfirm  title="Siz pozmakcymy?" onConfirm={()=>deleteGalleryFn(p)} 
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

export default GalleryAdmin