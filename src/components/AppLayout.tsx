import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const AppLayout: React.FC = () => {
    // alert("geldim")
    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar />
            <main className='mt-20'>
                <Outlet />
            </main>
            <Footer/>
        </div> 
    )
}

export default AppLayout