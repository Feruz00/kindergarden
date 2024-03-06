
import { User } from '../context/AuthContext'
import { RxPinRight } from 'react-icons/rx'
import { useLogout } from '../services/useAuth'

const Header = () => {
    const {user} = User()
    const {logout} = useLogout()
    return (
    <div className=' flex items-center justify-end gap-7  w-full border shadow px-10 py-2'>
        <p>
            {user?.fullName || user?.username}
        </p>
        {
            user?.url && <div className='h-10 w-10 rounded-full flex items-center justify-center overflow-hidden'>
                
                <img 
                    crossOrigin='anonymous'
                    alt='user'
                    src={`${process.env.SERVER}/${user.url}`}
                    className='object-cover w-full '
                />
            </div> 
        }
        <RxPinRight className='text-2xl cursor-pointer' onClick={()=>logout()} />
    </div>
  )
}

export default Header