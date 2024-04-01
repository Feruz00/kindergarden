import { Table } from 'antd'
import {  useGetUsers } from '../services/useUsers'
import Container from '../ui/Container'
import Loader from '../ui/Loader'

const Participants = () => {
  const {isLoading, users} = useGetUsers()
  if(isLoading){
    return <div className='w-full h-full flex items-center justify-center'>
         <Loader />
     </div>
 }
  return (
    <Container className='flex items-center justify-center '>
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
      <div className='w-full'>

        <Table 
              bordered
              dataSource={users.data.map(i=>({...i, key:i._id}))}
              columns={[
                  {title: 'Gyzyklanma suraty', dataIndex: 'url', key: 'url', render: (i, _)=>  <div className='w-60 h-60 flex items-center justify-center'>
                      <img crossOrigin='anonymous' alt={i} src={`${process.env.SERVER}/${_.url}`}  className='object-cover' />
                  </div> },
                  {title: 'Ulanyjynyň logini', dataIndex: 'username', key: 'username', width: 'w-[10rem]'},
                  {title: 'Ulanyjynyň ady',  dataIndex: 'fullName', key: 'fullName', width:' w-[17rem]  '},
                  {title: 'Ulanyjynyň derejesi',  dataIndex: 'role', key: 'fole', width:' w-[17rem]  '},
                  {title: 'Maglumat', dataIndex: 'bio', key: 'bio'},
                  // {
                  //     title: 'Sazlama',
                  //     dataIndex: '_id',
                  //     render: (p, _)=> <div className='flex gap-3 text-xl text-gray-600'>
                          
                  //         <EditModal 
                  //             title='Maglumatlary sazla'
                  //             defaultValues={_}
                  //             fields={[
                  //                 {label: 'Ýörite okuwyň ady', name: 'title', rules: { required: 'Gözkezilen meýdany dolduryň' }, isTextArea: false },
                  //                 {label: 'Okuwyň mazmuny', name: 'description', rules: { required: 'Gözkezilen meýdany dolduryň' } , row: 6, isTextArea: true},
                  //                 {label: 'Web salgysy', name: 'link', rules: { required: 'Gözkezilen meýdany dolduryň' }, isTextArea: false },
                  //             ]}
                  //             id={p}
                  //             isPending={isEducationInfo}
                  //             onSubmit={updateEducationFn}
                  //         />
                  //         <UpdatePhotoModal 
                  //             isPending={isEducationPhoto}
                  //             title='Surat ýükle'
                  //             onSubmit={updatePhotoEducationFn}
                  //             id={p}
                  //         />

                  //         <Popconfirm  title="Siz pozmakcymy?" onConfirm={()=>deleteEducationFn(p)} 
                  //             okButtonProps={{className: 'text-black border border-gray-300'}}
                  //         >
                  //             <RxTrash className='cursor-pointer'/>
                  //         </Popconfirm>

                  //     </div>,
                  //     width: '2rem'
                  // }
              ]}
              
              pagination={false}
          
          />
      </div>
  </Container>
  )
}

export default Participants