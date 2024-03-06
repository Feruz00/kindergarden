import React, { createContext } from 'react'
import { useCurrentUser } from '../services/useAuth'

import { useContext } from 'react'
import Loader from '../ui/Loader'

export interface User{
    username: string,
    url?:string,
    fullName?:string
}

interface Props{
    children: React.ReactNode
}
export interface UserContext {
    user?:User ,
    isAuthenticated: Boolean
}

const UserContext = createContext<UserContext|undefined>(undefined)

const AuthContext:React.FC<Props> = ({children}) => {
    const  {user, isAuthenticated, isLoading} = useCurrentUser()

    if(isLoading) return <div className='h-screen w-full flex items-center justify-center'>
        <Loader/>
    </div>
    const value: UserContext = {
        user,
        isAuthenticated
    }
    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}

export const User = ():UserContext=>{
    const context = useContext(UserContext)
    if (context === undefined) {
        throw new Error("UserContext must be used within a UserContextProvider");
    }
    return context;
}

export default AuthContext