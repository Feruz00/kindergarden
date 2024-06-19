import { Avatar, Image, Popconfirm, Table } from 'antd'
import {  useCreateUser, useDeleteUser, useGetUsers, useResetPassword, useUpdateUser } from '../services/useUsers'

import Loader from '../ui/Loader'
import {  AiOutlineKey, AiOutlineUser } from 'react-icons/ai'
import CreateItem from '../ui/CreateItem'
import { RxTrash } from 'react-icons/rx'
import EditModal from '../ui/Editable'

const Participants = () => {
  const {isLoading, users} = useGetUsers()
  const {isPending: isCreateUser, createUserFn} = useCreateUser()
  const {isPending: isUpdatingUser, updateUserFn} = useUpdateUser()
  const {isPending: isResetPassword, resetPasswordFn} = useResetPassword()
  const {deleteUserFn} = useDeleteUser()
  if(isLoading){
    return <div className='w-full h-full flex items-center justify-center'>
         <Loader />
     </div>
 }
  return (
    <div className='flex flex-col w-full gap-9'>
      <div className='w-[1500px] 2xl:w-full 2xl:px-10 py-4 flex flex-col  h-full gap-6'>
          <div className='w-full flex items-center justify-center'>
              <h2 className="uppercase text-xl text-green-600 md:text-lg
                  relative
                  before:absolute before:w-16 before:h-[2px] before:content-[''] before:top-1/2  before:bg-green-600 before:-translate-x-[150%]
                  after:absolute after:w-16 after:h-[2px] after:content-[''] after:top-1/2  after:bg-green-600 after:translate-x-[50%]
                  ">
                      Ulanyjylar
              </h2>
          </div>
      </div>
      <div className='w-full  flex flex-col gap-3'>
        <div className='w-full flex justify-end'>
          <CreateItem 
            
            buttonText='+ Täze ulanyjy goş'
            title='Täze ulanyjy goş'
            onSubmit={createUserFn}
            fields={[
                {label: 'Ulanyjyň ady', name: 'fullName', rules: { required: 'Gözkezilen meýdany dolduryň' }, type: {isInput: true} },
                {label: 'Ulanyjyň logini', name: 'username', rules: { required: 'Gözkezilen meýdany dolduryň' }, type: {isInput: true} },
                {label: 'Ulanyjyň açar sözüni', name: 'password', rules: { required: 'Gözkezilen meýdany dolduryň' }, type: {isPassword: true} },
                // {label: 'Derejesi', name: 'role', rules: { required: 'Gözkezilen meýdany dolduryň' } , 
                //             type:{isSelect: true, options:  ['admin', 'member'].map(j=>({value: String(j), text: String(j)}))}},
                
                {label: 'Maglumat', name: 'bio', rules: { required: 'Gözkezilen meýdany dolduryň' }, type: {isTextArea: true, row:6 } },
            ]}
            isPending={isCreateUser}
        />
        </div>

        <Table 
              bordered
              dataSource={users.data.map(i=>({...i, key:i._id}))}
              columns={[
                  {title: 'Gyzyklanma suraty', dataIndex: 'url', key: 'url', render: (i, _)=>  <div className='w-32 h-32 flex items-center rounded-full justify-center overflow-hidden'>
                    {
                      i ? <Image crossOrigin='anonymous' alt={i} src={`${process.env.SERVER}/${_.url}`}  className='object-cover w-full h-full '  /> : 
                        <Avatar icon={<AiOutlineUser className='text-6xl' />} className='w-24 h-24'  />
                    }
                      
                  </div> },
                  {title: 'Ulanyjynyň logini', dataIndex: 'username', key: 'username', width: 'w-[10rem]'},
                  {title: 'Ulanyjynyň ady',  dataIndex: 'fullName', key: 'fullName', width:' w-[17rem]  '},
                  // {title: 'Ulanyjynyň derejesi',  dataIndex: 'role', key: 'fole', width:' w-[17rem]  ',
                  //   filters: ['admin', 'member'].map(i=>({text: i, value: i})),
                  //   // @ts-ignore
                  //   onFilter: (value: string, record) => record.role.includes(value),
                  // },
                  {title: 'Maglumat', dataIndex: 'bio', key: 'bio'},

                  {
                      title: 'Sazlama',
                      dataIndex: '_id',
                      render: (p, _)=> <div className='flex gap-3 text-xl text-gray-600'>
                          
                          <EditModal 
                              title='Maglumatlary sazla'
                              defaultValues={_}
                              fields={[
                                {label: 'Ulanyjyň ady', name: 'fullName', rules: { required: 'Gözkezilen meýdany dolduryň' }, type: {isInput: true} },
                                {label: 'Ulanyjyň logini', name: 'username', rules: { required: 'Gözkezilen meýdany dolduryň' }, type: {isInput: true} },
                                {label: 'Derejesi', name: 'role', rules: { required: 'Gözkezilen meýdany dolduryň' } , 
                                            type:{isSelect: true, options:  ['admin', 'member'].map(j=>({value: String(j), text: String(j)}))}},
                                
                                {label: 'Maglumat', name: 'bio', rules: { required: 'Gözkezilen meýdany dolduryň' }, type: {isTextArea: true, row:6 } },
                                  
                              ]}
                              id={p}
                              isPending={isUpdatingUser}
                              onSubmit={updateUserFn}
                          />
                          <EditModal 
                              title='Açar sözüni täzele'
                              defaultValues={{password: ''}}
                              // children={}
                              fields={[
                                {label: 'Täze açar sözi', name: 'password', rules: { required: 'Gözkezilen meýdany dolduryň' }, type: {isPassword: true} },  
                              ]}
                              id={p}
                              isPending={isResetPassword}
                              onSubmit={resetPasswordFn}
                          >
                            <AiOutlineKey className='cursor-pointer' />
                          </EditModal>
                          {/* <UpdatePhotoModal 
                              isPending={isEducationPhoto}
                              title='Surat ýükle'
                              onSubmit={updatePhotoEducationFn}
                              id={p}
                          /> */}

                          <Popconfirm  title="Siz pozmakcymy?" onConfirm={()=>deleteUserFn(p)} 
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
  </div>
  )
}

export default Participants