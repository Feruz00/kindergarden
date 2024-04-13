
import Loader from '../../ui/Loader'
import {Image, Popconfirm, Table} from 'antd' 
import {  RxTrash } from 'react-icons/rx'
import { useEffect } from 'react'
import { useCreateSubject, useDeleteSubject, useGetSubjects, useUpdatePhotoSubject, useUpdateSubjectInfo } from '../../services/useSubjects'
import EditModal from '../../ui/Editable'
import UpdatePhotoModal from '../../ui/UpdatePhotoModal'
import CreateItem from '../../ui/CreateItem'

const Subjects = () => {
    const {isLoading, subjects} = useGetSubjects()
    const { deleteSubjectFn} = useDeleteSubject()
    const {isPending: isSubjectInfo, updateSubjectInfoFn} = useUpdateSubjectInfo()
    const {isPending: isSubjectPhoto, updatePhotoSubjectFn} = useUpdatePhotoSubject()
    const {isPending: isCreateSubject, createSubjectFn} = useCreateSubject()
    useEffect(()=>{
        document.title = 'Admin | Biziň okuwlar'
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
                Biziň okuwlarymyz
            </h1>
            <div className='flex w-full justify-end py-10'>
        {/* <CreateTeacher /> */}
        <CreateItem 
        
            buttonText='+ Täze okuw döret'
            title='Täze okuw döret'
            onSubmit={createSubjectFn}
            fields={[
                {label: 'Okuwyň ady', name: 'title', rules: { required: 'Gözkezilen meýdany dolduryň' }, type:{isInput: true} },
                {label: 'Okuw hakda beýan', name: 'description', rules: { required: 'Gözkezilen meýdany dolduryň' } , type: {isTextArea: true, row: 7}},
            ]}
            isPending={isCreateSubject}
        />
        </div>
        <Table 
            bordered
            dataSource={subjects.data.map(i=>({...i, key:i._id}))}
            columns={[
                {title: 'Degişli okuwdan surat parçasy', dataIndex: 'url', key: 'url', render: (i, _)=>  <div className='w-60 h-60 flex items-center justify-center'>
                    <Image crossOrigin='anonymous' alt={i} src={`${process.env.SERVER}/${_.url}`}  className='object-cover' />
                </div> },
                {title: 'Okuwyň ady', dataIndex: 'title', key: 'title', width: 'w-[10rem]'},
                {title: 'Okuw hakda beýan',  dataIndex: 'description', key: 'description', width:' w-[17rem]  '},
                
                {
                    title: 'Sazlama',
                    dataIndex: '_id',
                    render: (p, _)=> <div className='flex gap-3 text-xl text-gray-600'>
                        <EditModal 
                            title='Maglumatlary sazla'
                            defaultValues={_}
                            fields={[
                                {label: 'Okuwyň ady', name: 'title', rules: { required: 'Gözkezilen meýdany dolduryň' }, type: {isInput: true} },
                                {label: 'Okuw hakda beýan', name: 'description', rules: { required: 'Gözkezilen meýdany dolduryň' } , type: {isTextArea: true, row: 10}},
                            ]}
                            id={p}
                            isPending={isSubjectInfo}
                            onSubmit={updateSubjectInfoFn}
                        />
                        <UpdatePhotoModal 
                            isPending={isSubjectPhoto}
                            title='Surat ýükle'
                            onSubmit={updatePhotoSubjectFn}
                            id={p}
                        />
                        <Popconfirm  title="Siz pozmakcymy?" onConfirm={()=>deleteSubjectFn(p)} 
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

export default Subjects