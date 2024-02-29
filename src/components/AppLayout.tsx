import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const AppLayout: React.FC = () => {
    // alert("geldim")
    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar />
            <main className='mt-20'>
                <Outlet />
            </main>
        </div> 
    )
}

export default AppLayout