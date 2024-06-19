
import Loader from '../../ui/Loader'
import {Image, Popconfirm, Table} from 'antd' 
import {  RxTrash } from 'react-icons/rx'
import { useEffect } from 'react'
import { useCreateReview, useDeleteReview, useGetReviews, useUpdatePhotoReview, useUpdateReviewInfo } from '../../services/useReviews'

import EditModal from '../../ui/Editable'
import UpdatePhotoModal from '../../ui/UpdatePhotoModal'
import CreateItem from '../../ui/CreateItem'

const Reviews = () => {
    const {isLoading, reviews} = useGetReviews()
    const { deleteReviewFn} = useDeleteReview()
    const {isPending: isReviewPhoto, updatePhotoReviewFn} = useUpdatePhotoReview()
    const {isPending: isReviewInfo, updateReviewInfoFn} = useUpdateReviewInfo()
    const {isPending: isCreateReview, createReviewFn} = useCreateReview()
    useEffect(()=>{
        document.title = 'Admin | Pikirler'
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
                Gyzyklanmalaryny, pikirlerini aýdanlar
            </h1>
            <div className='flex w-full justify-end py-10'>
        <CreateItem 
            buttonText='+ Täze gyzyklanma goş'
            title='Täze gyzyklanma goş'
            onSubmit={createReviewFn}
            fields={[
                {label: 'Ady', name: 'name', rules: { required: 'Gözkezilen meýdany dolduryň' }, type: {isInput: true} },
                {label: 'Beýany', name: 'review', rules: { required: 'Gözkezilen meýdany dolduryň' } , type: {isTextArea: true, row: 6}},
                {label: 'Hünäri', name: 'job', rules: { required: 'Gözkezilen meýdany dolduryň' }, type: {isInput: true} },
                {label: "Surat", name:"file", rules: { validate: (val) => val?.length > 0 || 'Surat faýl gerek' }, type:{isFile: true, accept: 'image/*'}}
            ]}
            isPending={isCreateReview}
        />
        </div>
        <Table 
            bordered
            dataSource={reviews.data.map(i=>({...i, key:i._id}))}
            columns={[
                {title: 'Öz pikirini aýdyjynyň suraty', dataIndex: 'url', key: 'url', render: (i, _)=>  <div className='w-60 h-60 flex items-center justify-center'>
                    <Image crossOrigin='anonymous' alt={i} src={`${process.env.SERVER}/${_.url}`}  className='object-cover' />
                </div> },
                {title: 'Öz pikirini aýdyjynyň ady', dataIndex: 'name', key: 'title', width: 'w-[10rem]'},
                {title: 'Pikirleri, gyzyklanmalary',  dataIndex: 'review', key: 'description', width:' w-[17rem]  '},
                {title: 'Hünari', dataIndex: 'job', key: 'job'},
                {
                    title: 'Sazlama',
                    dataIndex: '_id',
                    render: (p, _)=> <div className='flex gap-3 text-xl text-gray-600'>
                        
                        <EditModal 
                            title='Maglumatlary sazla'
                            defaultValues={_}
                            fields={[
                                {label: 'Ady', name: 'name', rules: { required: 'Gözkezilen meýdany dolduryň' }, type: {isInput: true} },
                                {label: 'Beýany', name: 'review', rules: { required: 'Gözkezilen meýdany dolduryň' } , type: {isTextArea: true, row: 9}},
                                {label: 'Hünäri', name: 'job', rules: { required: 'Gözkezilen meýdany dolduryň' }, type: {isInput: true} },
                            ]}
                            id={p}
                            isPending={isReviewInfo}
                            onSubmit={updateReviewInfoFn}
                        />
                        <UpdatePhotoModal 
                            isPending={isReviewPhoto}
                            title='Surat ýükle'
                            onSubmit={updatePhotoReviewFn}
                            id={p}
                        />

                        <Popconfirm  title="Siz pozmakcymy?" onConfirm={()=>deleteReviewFn(p)} 
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

export default Reviews