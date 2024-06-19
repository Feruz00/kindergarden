import  { useEffect, useMemo } from 'react'
import { useCreateAbout,  useGetAbouts, useUpdateAboutInfo, useUpdatePhotoAbout } from '../../services/useAbout'
import Loader from '../../ui/Loader'
import EditModal from '../../ui/Editable'
import UpdatePhotoModal from '../../ui/UpdatePhotoModal'
import CreateItem from '../../ui/CreateItem'
import { Divider, Image, Table, Tag } from 'antd'

const ShowAbout = () => {
    const {isLoading, abouts} = useGetAbouts()
    const {isPending: isCreateAbout, createAboutFn} = useCreateAbout()
    // const {deleteAboutFn} = useDeleteAbout()
    const {isPending:isUpdateInfo, updateAboutInfoFn} = useUpdateAboutInfo()
    const {isPending:isPhotoUpdate, updateAboutPhotosFn} = useUpdatePhotoAbout()
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
    <div className='w-full px-6 py-3 flex flex-col justify-center gap-10'>
        <h1 className="text-green-600 text-xl text-center font-normal px-5
                relative
                before:absolute before:w-16 before:h-[2px] before:content-[''] before:top-1/2  before:bg-green-600 before:-translate-x-[150%]
                after:absolute after:w-16 after:h-[2px] after:content-[''] after:top-1/2  after:bg-green-600 after:translate-x-[50%]
                
            ">
                Biz barada
            </h1>
            {
                abouts.data.length === 0 ? (
                    <div className='w-full justify-end flex'>
                        <CreateItem 
                        
                            buttonText='+ Degişli maglumatlary döret'
                            title='Degişli maglumatlary döret'
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
                ):(
                    <div className='w-full flex flex-col-reverse'>
                    <div className='w-full flex justify-start flex-row items-center gap-10'>
                        <h1>Esasy surat</h1>
                        <div className='w-52 h-52 overflow-hidden'>
                            <Image  crossOrigin='anonymous' src={`${process.env.SERVER}/${abouts.data[0].mainImg}`} alt={abouts.data[0].title} className='w-full h-full object-cover' />
                        </div>
                        <div className='border rounded px-10 py-2 cursor-pointer'>
                            <UpdatePhotoModal id={abouts.data[0]._id} title='Esasy suraty calyş' 
                            fileName="mainImg" onSubmit={updateAboutPhotosFn} isPending={isPhotoUpdate} />        
                        </div>
                    </div>
                    <Divider />
                    <div className='w-full flex justify-start flex-row items-center gap-10'>
                        <h1>Kiçi surat</h1>
                        <div className='w-52 h-52 overflow-hidden'>
                            <Image  crossOrigin='anonymous' src={`${process.env.SERVER}/${abouts.data[0].smallImg}`} alt={abouts.data[0].title} className='w-full h-full object-cover' />
                        </div>
                        <div className='border rounded px-10 py-2 cursor-pointer'>
                            <UpdatePhotoModal id={abouts.data[0]._id} title='Kiçi suraty calyş' 
                            fileName="smallImg" onSubmit={updateAboutPhotosFn} isPending={isPhotoUpdate} />        
                        </div>
                    </div>
                    <Divider />
                    <div>
                        <h1 className='font-bold m-3'>Esasy maglumatlar</h1>
                        <Table 
                            // title="Esasy maglumatlar"
                            bordered
                            loading={isLoading}
                            
                            dataSource={upd.data ? upd.data.map(i => ({ ...i, key: i._id })) : []}
                            
                            columns={[
                                {title: 'Giriş', dataIndex: 'header', key: 'header'},
                                {title: 'Sözbaşy', dataIndex: 'title', key: 'title', width: 'w-[10rem]'},
                                {title: 'Mazmuny',  dataIndex: 'content', key: 'content', width:' w-[17rem]  '},            
                                {title: 'Bellikler', dataIndex: 'list', key: 'list', 
                                    render: p=> p.map((i:string,index:number)=><Tag className='m-2' key={index} rootClassName='select-none'>{i}</Tag>)},
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
                                            </div>
                                        }
                            ]}
    
                            pagination={false}
                        
                        />
                    </div>
                </div>
                )
                
            }
           
        {/* </div> */}

            {/* <div className='w-full flex justify-start'>
                <h1>Esasy surat</h1>
                <UpdatePhotoModal id={abouts.data} title='Esasy suraty calyş' fileName="mainImg" onSubmit={updateAboutInfoFn} isPending={isPhotoUpdate} />        
            </div> */}
        
    </div>
    
  )
}

export default ShowAbout