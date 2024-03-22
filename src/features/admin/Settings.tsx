
import { User } from '../../context/AuthContext'
import { HiOutlineUser } from 'react-icons/hi2'
import { useChangeInfo, useChangePassword, useUploadPhoto } from '../../services/useAuth'
import { useEffect } from 'react'
import UserPhotoUploader from '../../ui/UserPhotoUploader'
import EditUserInfo from '../../ui/EditUserInfo'

const Settings = () => {
    const {user} = User()
    const {isPending: isUserPhoto, uploadPhoto} = useUploadPhoto()
    const {isPending: isUserInfo, changeInfo} = useChangeInfo()
    const {isPending: isUserPassword, changePassword} = useChangePassword()
    useEffect(()=>{
        document.title = 'Admin | sazlamalar'
    },[])

  return (
    <div className='w-full px-10 flex justify-center'>
        <div className='flex flex-col w-1/2 gap-9'>
        <h1 className="text-green-700 font-semibold text-xl text-center  px-2
                relative
                before:absolute before:w-16 before:h-[2px] before:content-[''] before:top-1/2  before:bg-green-600 before:-translate-x-[150%]
                after:absolute after:w-16 after:h-[2px] after:content-[''] after:top-1/2  after:bg-green-600 after:translate-x-[50%]
                
            ">
                Özüm barada
            </h1>
            <div className='w-full flex flex-row justify-between'>
                <div className='flex flex-col justify-center px-4 gap-4'>
                    <div className='h-36 w-36 rounded-full flex flex-col justify-center items-center overflow-hidden border'>
                        {user?.url ? <img crossOrigin='anonymous' className='w-full h-full object-cover' src={`${process.env.SERVER}/${user.url}`} /> : <HiOutlineUser className='text-7xl text-gray-500' />}
                    </div>
                        <UserPhotoUploader 
                            isPending={isUserPhoto}
                            title='Surat ýükle'
                            onSubmit={uploadPhoto}
                        />
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='grid grid-cols-[9rem_1fr] items-center'>
                        <p className='font-bold text-green-700'>Doly ady:</p>
                        <p> {user?.fullName ? user?.fullName :'-----' } </p>
                    </div>
                    <div className='grid grid-cols-[9rem_1fr] items-center'>
                        <p className='font-bold text-green-700'>Ulanyjynyň logini:</p>
                        <p> {user?.username} </p>
                    </div>
                    <div className='flex flex-row justify-between items-center gap-10'>
                    <EditUserInfo 
                        isPending={isUserInfo}
                        title='Maglumatlary sazla'
                        fields={[
                            //@ts-ignore
                            {label: 'Ady', name: 'fullName', rules: { required: 'Gözkezilen meýdany dolduryň' }, isTextArea: false }
                        ]}
                        onSubmit={changeInfo}
                        defaultValues={user}
                    />

                    <EditUserInfo 
                        isPending={isUserPassword}
                        title='Açar sözüni täzele '
                        fields={[
                            //@ts-ignore
                            {label: 'Öňki açar sözi', name: 'oldPassword', rules: { required: 'Gözkezilen meýdany dolduryň' }, isTextArea: false, pass:true },
                            //@ts-ignore
                            {label: 'Täze açar sözi', name: 'newPassword', rules: { required: 'Gözkezilen meýdany dolduryň' }, isTextArea: false, pass:true },
                            
                        ]}
                        onSubmit={changePassword}
                        defaultValues={user}
                    />
                    
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Settings