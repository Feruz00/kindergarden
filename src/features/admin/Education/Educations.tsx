
// import { Link } from 'react-router-dom'
import {  useDeleteEducation, useGetEducations } from '../../../services/useEducation'
import Loader from '../../../ui/Loader'
// import Modal from '../../ui/Modal'
// import Table from '../../ui/Table'
import {Popconfirm, Table} from 'antd' 
import {  RxTrash } from 'react-icons/rx'
import EditEducation from './EditEducation'
import UpdatePhotoEducation from './UpdatePhotoEducation'
import CreateEducation from './CreateEducation'

const Educations = () => {
    const {isLoading, educations} = useGetEducations()
    const { deleteEducationFn} = useDeleteEducation()

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

        <CreateEducation />
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
                        
                        <EditEducation education={_} />
                        
                        <UpdatePhotoEducation education={_} />

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