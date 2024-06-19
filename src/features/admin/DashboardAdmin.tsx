// import React from 'react'

import { useEffect } from "react"
import CreateItem from "../../ui/CreateItem"
import { useCreateDashboard, useGetDashboard, useUpdateDashboardInfo, useUpdatePhotoDashboard } from "../../services/useDashboard"
import Loader from "../../ui/Loader"
import { Image, Popconfirm, Table, Tag } from "antd"
import EditModal from "../../ui/Editable"
import UpdatePhotoModal from "../../ui/UpdatePhotoModal"
import { useCreateTerbiye, useGetTerbiye, useUpdateTerbiye, useDeleteTerbiye } from "../../services/useTerbiye"
import { RxTrash } from "react-icons/rx"

const DashboardAdmin = () => {
  const {isLoading, dasboard} = useGetDashboard()
  const {createDashboardFn, isPending: isCreateDashboard} = useCreateDashboard()
  const {updateDashboardInfoFn, isPending: isUpdateInfo} = useUpdateDashboardInfo()
  const {updateDashboardPhotosFn, isPending: isUpdatePhoto} = useUpdatePhotoDashboard()

  const {isLoading: isTerbiye, terbiyeler} = useGetTerbiye()
  const {isPending: isTerbiyeCreate, createTerbiyeFn} = useCreateTerbiye()
  const {isPending: isTerbiyeUpdate, updateTerbiyeFn } = useUpdateTerbiye()
  const {deleteTerbiyeFn} = useDeleteTerbiye()
  useEffect(()=>{
    document.title = 'Admin | Baş sahypa '
},[])
if(isLoading || isTerbiye) return <div className='w-full h-full flex items-center justify-center'>
    <Loader />
    </div>

  return (
    <div className='w-full px-6 py-3 flex flex-col justify-center gap-10'>
        <h1 className="text-green-600 text-xl text-center font-normal px-5
                relative
                before:absolute before:w-16 before:h-[2px] before:content-[''] before:top-1/2  before:bg-green-600 before:-translate-x-[150%]
                after:absolute after:w-16 after:h-[2px] after:content-[''] after:top-1/2  after:bg-green-600 after:translate-x-[50%]
                
            ">
                Baş sahypa
            </h1>
            {
                dasboard.data.length === 0 ? (
                    <div className='w-full justify-end flex'>
                        <CreateItem 
                        
                            buttonText='+ Baş sahypa degişli maglumatlary döret'
                            title='Baş sahypa degişli maglumatlar'
                            onSubmit={createDashboardFn}
                            fields={[
                                
                                {label: 'Giriş ady', name: 'header[]', 
                                  rules: { required: 'Gözkezilen meýdany dolduryň' }, type:{isList: true} },
                                
                                {label: 'Esasy surat', name: 'mainImg', rules: { validate: (val) => val?.length > 0 || 'Surat faýl gerek' }, type:{isFile: true, accept: 'image/*'} },
                                
                            ]}
                            isPending={isCreateDashboard}
                        />
                    </div>
                ):(
                  <Table
                    bordered
                    dataSource={dasboard.data.map(i => ({ ...i, key: i._id }))}

                    columns={
                      [
                        {
                          title: 'Suraty', 
                          dataIndex: 'mainImg', 
                          key: 'mainImg', 
                          render: (i)=>  <div className=' w-28 h-28 flex items-center justify-center '>
                              <Image crossOrigin='anonymous' alt={i} src={`${process.env.SERVER}/${i}`}  
                              className='object-cover ' />
                            </div> 
                        },
                      {
                        title: 'Giriş sozler', 
                        dataIndex: 'header', 
                        key: 'header',
                        render: p=> p.map((i:string,index:number)=><Tag className='m-2' key={index} rootClassName='select-none'>{i}</Tag>)
                      },
                      {
                        title: 'Sazlama',
                        dataIndex: '_id',
                        render: (p, _)=> <div className='flex gap-3 text-xl text-gray-600'>
                            
                            <EditModal 
                                title='Maglumatlary sazla'
                                defaultValues={{..._, header:_.header?.map((t:string)=>({name: t, id:t}))}}
                                // defaultValues={ ({..._, list: _.list?.map((t:string)=>({id:t, name: t}))}) }
                                                
                                fields={[
                                  {label: 'Giriş ady', name: 'header', 
                                    rules: { required: 'Gözkezilen meýdany dolduryň' }, type:{isList: true} },    
                                ]}
                                id={p}
                                isPending={isUpdateInfo}
                                onSubmit={updateDashboardInfoFn}
                            />
                            <UpdatePhotoModal 
                                isPending={isUpdatePhoto}
                                title='Surat ýükle'
                                onSubmit={updateDashboardPhotosFn}
                                id={p}
                            />
    
                            
    
                        </div>,
                        width: '2rem'
                    }
                      ]
                    }
                    
                    
                    pagination={false}
                  />
                )
            }
            <div className='flex w-full flex-col py-10 gap-10'>
              <div className='w-full justify-end flex'>
                        <CreateItem 
                        
                            buttonText='+ Terbiýä degişli maglumatlary döret'
                            title='Baş sahypa degişli maglumatlar'
                            onSubmit={createTerbiyeFn}
                            fields={[
                                
                                {label: 'Giriş ady', 
                                  name: 'header', 
                                  rules: { required: 'Gözkezilen meýdany dolduryň' }, type:{isInput: true} },
                                  {label: 'Mazmuny', 
                                    name: 'content', 
                                    rules: { required: 'Gözkezilen meýdany dolduryň' }, type:{isTextArea: true, row: 8} },
                                    
                            ]}
                            isPending={isTerbiyeCreate}
                        />
                    </div>
                    <Table
                      bordered
                      dataSource={terbiyeler.data.map(i => ({ ...i, key: i._id }))}

                    columns={
                      [  
                        {
                          title: 'Sözbaşy', 
                          dataIndex: 'header', 
                          key: 'header',
                        },
                        {
                          title: 'Mazmuny', 
                          dataIndex: 'content', 
                          key: 'content',
                        },
                      {
                        title: 'Sazlama',
                        dataIndex: '_id',
                        render: (p, _)=> <div className='flex gap-3 text-xl text-gray-600'>
                            
                            <EditModal 
                                title='Maglumatlary sazla'
                                defaultValues={_}
                                // defaultValues={ ({..._, list: _.list?.map((t:string)=>({id:t, name: t}))}) }
                                                
                                fields={[
                                
                                  {label: 'Giriş ady', 
                                    name: 'header', 
                                    rules: { required: 'Gözkezilen meýdany dolduryň' }, type:{isInput: true} },
                                    {label: 'Mazmuny', 
                                      name: 'content', 
                                      rules: { required: 'Gözkezilen meýdany dolduryň' }, type:{isTextArea: true, row: 8} },
                                      
                              ]}
                                id={p}
                                isPending={isTerbiyeUpdate}
                                onSubmit={updateTerbiyeFn}
                            />
                            <Popconfirm  title="Siz pozmakcymy?" onConfirm={()=>deleteTerbiyeFn(p)} 
                            okButtonProps={{className: 'text-black border border-gray-300'}}
                        >
                            <RxTrash className='cursor-pointer'/>
                        </Popconfirm>
    
                        </div>,
                        width: '2rem'
                    }
                      ]
                    }
                    
                    
                    pagination={false}
                  />
          </div>
        </div>
  )
}

export default DashboardAdmin
