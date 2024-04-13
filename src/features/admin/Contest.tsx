import { Table } from 'antd'
import { useCreateContest, useGetContests } from '../../services/useContests'
import Container from '../../ui/Container'
import Loader from '../../ui/Loader'
import CreateItem from '../../ui/CreateItem'

const Contest = () => {
  const {isLoading, contests} = useGetContests()
  const {isPending: isCreateContest, createContestFn} = useCreateContest()
  if(isLoading) return <Loader />
  return (
    <Container className='flex items-center justify-center '>
        <div className='w-[1500px] 2xl:w-full 2xl:px-10 py-4 flex flex-col h-full gap-6'>
            <div className='w-full flex items-center justify-center'>
                <h2 className="uppercase text-xl text-green-600 md:text-lg
                    relative
                    before:absolute before:w-16 before:h-[2px] before:content-[''] before:top-1/2  before:bg-green-600 before:-translate-x-[150%]
                    after:absolute after:w-16 after:h-[2px] after:content-[''] after:top-1/2  after:bg-green-600 after:translate-x-[50%]
                    ">
                        Bäsleşikler
                </h2>
            </div>
      <CreateItem 
        
        buttonText='+ Täze bäsleşik döret'
        title='Täze bäsleşik döret'
        onSubmit={createContestFn}
        fields={[
            {label: 'Bäsleşigiň ady', name: 'name', rules: { required: 'Gözkezilen meýdany dolduryň' }, type:{isInput: true} },
            {label: 'Başlanmaly wagty', name: 'start', rules: { required: 'Gözkezilen meýdany dolduryň' } , type:{isTextArea: true, row: 6} },
            
            {label: 'Okuwyň mazmuny', name: 'description', rules: { required: 'Gözkezilen meýdany dolduryň' } , type:{isTextArea: true, row: 6} },
            {label: 'Web salgysy', name: 'link', rules: { required: 'Gözkezilen meýdany dolduryň' }, type:{isInput: true} },
            {label: 'Suraty saýlaň', name: 'file', rules: { validate: (val) => val?.length > 0 || 'Surat faýl gerek' }, type:{isFile: true, accept: 'image/*'} },
            
        ]}
        isPending={isCreateContest}
    />
        <Table 
            bordered
            dataSource={contests.data.map(i=>({...i, key:i._id}))}
            columns={[
                // {title: 'Gyzyklanma suraty', dataIndex: 'url', key: 'url', render: (i, _)=>  <div className='w-60 h-60 flex items-center justify-center'>
                //     <img crossOrigin='anonymous' alt={i} src={`${process.env.SERVER}/${_.url}`}  className='object-cover' />
                // </div> },
                {title: 'Ýörite okuwyň ady', dataIndex: 'title', key: 'title', width: 'w-[10rem]'},
                {title: 'Okuwyň mazmuny',  dataIndex: 'description', key: 'description', width:' w-[17rem]  '},
                {title: 'Web salygysy', dataIndex: 'link', key: 'link'},
                // {
                //     title: 'Sazlama',
                //     dataIndex: '_id',
                //     render: (p, _)=> <div className='flex gap-3 text-xl text-gray-600'>
                        
                //         <EditModal 
                //             title='Maglumatlary sazla'
                //             defaultValues={_}
                //             fields={[
                //                 {label: 'Ýörite okuwyň ady', name: 'title', rules: { required: 'Gözkezilen meýdany dolduryň' }, type: {isInput: true} },
                //                 {label: 'Okuwyň mazmuny', name: 'description', rules: { required: 'Gözkezilen meýdany dolduryň' } , type: {isTextArea: true, row: 7}},
                //                 {label: 'Web salgysy', name: 'link', rules: { required: 'Gözkezilen meýdany dolduryň' }, type: {isInput: true} },
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

export default Contest