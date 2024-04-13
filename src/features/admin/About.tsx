import  { useEffect, useMemo } from 'react'
import { useCreateAbout, useDeleteAbout, useGetAbouts, useUpdateAboutInfo } from '../../services/useAbout'
import Loader from '../../ui/Loader'
import CreateItem from '../../ui/CreateItem'
import { Image, Popconfirm, Table, Tag } from 'antd'
import { RxTrash } from 'react-icons/rx'
import EditModal from '../../ui/Editable'
// import Table from '../../ui/Table'

const ShowAbout = () => {
    const {isLoading, abouts} = useGetAbouts()
    const {isPending: isCreateAbout, createAboutFn} = useCreateAbout()
    const {deleteAboutFn} = useDeleteAbout()
    const {isPending:isUpdateInfo, updateAboutInfoFn} = useUpdateAboutInfo()

    const upd = useMemo( ()=>abouts, [abouts] )
    // console.log(abouts)
    useEffect(()=>{
        document.title = 'Admin | Biz barada '
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
                Biz barada
            </h1>
            <div className='flex w-full justify-end py-10'>
        <CreateItem 
        
            buttonText='+ Täze ýörite okuw döret'
            title='Täze ýörite okuw döret'
            onSubmit={createAboutFn}
            fields={[
                {label: 'Giriş ady', name: 'header', rules: { required: 'Gözkezilen meýdany dolduryň' }, type:{isInput: true} },
                {label: 'Sözbaşy', name: 'title', rules: { required: 'Gözkezilen meýdany dolduryň' }, type:{isInput: true} },
                {label: 'Mazmuny', name: 'content', rules: { required: 'Gözkezilen meýdany dolduryň' } , type:{isTextArea: true, row: 6} },
                {label: 'Bellikler', name: 'list[]', rules: { required: 'Gözkezilen meýdany dolduryň' }, type:{isList: true} },
                
                
                {label: 'Esasy surat', name: 'mainImg', rules: { validate: (val) => val?.length > 0 || 'Surat faýl gerek' }, type:{isFile: true, accept: 'image/*'} },
                {label: 'Bölek surat', name: 'smallImg', rules: { validate: (val) => val?.length > 0 || 'Surat faýl gerek' }, type:{isFile: true, accept: 'image/*'} },
                
            ]}
            isPending={isCreateAbout}
        />
        </div>
        <Table 
            bordered
            loading={isLoading}
            
            dataSource={upd.data ? upd.data.map(i => ({ ...i, key: i._id })) : []}
            columns={[
                
                {title: 'Giriş', dataIndex: 'header', key: 'header'},
                {title: 'Esasy surat', dataIndex: 'mainImg', key: 'mainImg', render: (i, _)=>  <div className='w-60 h-60 flex items-center justify-center'>
                    <Image crossOrigin='anonymous' alt={i} src={`${process.env.SERVER}/${_.mainImg}`}  className='object-cover' />
                </div> },
                {title: 'Bölek surat', dataIndex: 'smallImg', key: 'smallImg', render: (i, _)=>  <div className='w-60 h-60 flex items-center justify-center'>
                <Image crossOrigin='anonymous' alt={i} src={`${process.env.SERVER}/${_.smallImg}`}  className='object-cover' />
            </div> },
            
                {title: 'Sözbaşy', dataIndex: 'title', key: 'title', width: 'w-[10rem]'},
                {title: 'Mazmuny',  dataIndex: 'content', key: 'content', width:' w-[17rem]  '},
                
                {title: 'Bellikler', dataIndex: 'list', key: 'list', render: p=> p.map((i:string,index:number)=><Tag className='m-2' key={index} rootClassName='select-none'>{i}</Tag>)},
                {
                    title: 'Sazlama',
                    dataIndex: '_id',
                    render: (p, _)=> <div className='flex gap-3 text-xl text-gray-600'>
                        
                        <EditModal 
                            title='Maglumatlary sazla'
                            defaultValues={ ({..._, list: _.list?.map((t:string)=>({id:t, name: t}))}) }
                            fields={[
                                {label: 'Giriş ady', name: 'header', rules: { required: 'Gözkezilen meýdany dolduryň' }, type:{isInput: true} },
                                {label: 'Sözbaşy', name: 'title', rules: { required: 'Gözkezilen meýdany dolduryň' }, type:{isInput: true} },
                                {label: 'Mazmuny', name: 'content', rules: { required: 'Gözkezilen meýdany dolduryň' } , type:{isTextArea: true, row: 6} },
                                {label: 'Bellikler', name: 'list', rules: { required: 'Gözkezilen meýdany dolduryň' }, type:{isList: true} },
                            ]}
                            id={p}
                            isPending={isUpdateInfo}
                            onSubmit={updateAboutInfoFn}
                        />
                        {/* <UpdatePhotoModal 
                            isPending={isEducationPhoto}
                            title='Surat ýükle'
                            onSubmit={updatePhotoEducationFn}
                            id={p}
                        /> */}

                        <Popconfirm  title="Siz pozmakcymy?" onConfirm={()=>deleteAboutFn(p)} 
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

export default ShowAbout