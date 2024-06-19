// import React from 'react'
import React, { useEffect } from 'react'
import {useCreatefooter,  useGetfooter, useUpdatefooter} from '../../services/useFooter'
import Loader from '../../ui/Loader'
import CreateItem from '../../ui/CreateItem'

import EditModal from '../../ui/Editable'
import { Table } from 'antd'

const Address: React.FC = () => {
  const {isLoading, footerler} = useGetfooter()
  const {isPending: isCreateFooter, createfooterFn} = useCreatefooter()
  const {isPending: isUpdateFooter, updatefooterFn} = useUpdatefooter()
  useEffect(()=>{
    document.title = 'Admin | Footer'
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
                Maglumatlar
            </h1>
           {
            footerler.data.length === 0 ? (
              <div className='flex w-full justify-end py-10'>
                  <CreateItem 
                    buttonText='+ Footer goş'
                    title='Footer maglumatlary goş'
                    onSubmit={createfooterFn}
                    fields={[
                        {label: 'Adress', name: 'address', 
                          rules: { required: 'Gözkezilen meýdany dolduryň' }, type: {isInput: true} },
                        {label: 'Email', name: 'email', 
                          rules: { required: 'Gözkezilen meýdany dolduryň' } , type: {isInput: true}},
                          {label: 'Telefon belgi', name: 'phoneNumber', 
                            rules: { required: 'Gözkezilen meýdany dolduryň' }, type: {isInput: true} },
                            {label: 'Mazmuny', name: 'content', 
                              rules: { required: 'Gözkezilen meýdany dolduryň' }, type: {isTextArea: true, row: 6} },
                        
                        ]}
                    isPending={isCreateFooter}
                />
                </div>
            ) : (
              <Table 

                bordered 
                dataSource={footerler.data.map(i=>({...i, key:i._id}))}
                columns={[
                  {
                    title: 'Adress', 
                    dataIndex: 'address', 
                    key: 'address'
                  },
                  {
                    title: 'Email', 
                    dataIndex: 'email', 
                    key: 'email'
                  },
                  {
                    title: 'Telefon belgi', 
                    dataIndex: 'phoneNumber', 
                    key: 'phoneNumber'
                  },
                  {
                    title: 'Mazmuny', 
                    dataIndex: 'content', 
                    key: 'content'
                  },
                  {
                    title: 'Sazlama',
                    dataIndex: '_id',
                    render: (p, _)=> <div className='flex gap-3 text-xl text-gray-600'>
                        
                        <EditModal 
                            title='Maglumatlary sazla'
                            defaultValues={_}
                            fields={[
                              {label: 'Adress', name: 'address', 
                                rules: { required: 'Gözkezilen meýdany dolduryň' }, type: {isInput: true} },
                              {label: 'Email', name: 'email', 
                                rules: { required: 'Gözkezilen meýdany dolduryň' } , type: {isInput: true}},
                                {label: 'Telefon belgi', name: 'phoneNumber', 
                                  rules: { required: 'Gözkezilen meýdany dolduryň' }, type: {isInput: true} },
                                  {label: 'Mazmuny', name: 'content', 
                                    rules: { required: 'Gözkezilen meýdany dolduryň' }, type: {isTextArea: true, row: 6} },
                              
                              ]}
                            id={p}
                            isPending={isUpdateFooter}
                            onSubmit={updatefooterFn}
                        />


                    </div>,
                    width: '2rem'
                }
                ]}
                pagination={false}
              
              />
            )
           }
            
      </div>
  )
}

export default Address
