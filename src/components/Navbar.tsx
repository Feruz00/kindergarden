import { NavLink } from "react-router-dom"
import React from 'react'
import {HiBars3 } from 'react-icons/hi2'
import Modal from "../ui/Modal"
const Navbar = () => {
    const renderNavLink = ({to, text}:{to:string, text:string}):React.ReactNode =>(
        <li key={to}>
            <NavLink to={to}  
                className={({isActive})=> `${isActive ? 'text-green-600':'text-zinc-600'} hover:text-green-700 text-xl xl:text-base lg:text-sm transition-all duration-300 font-semibold`}
            >
                {text}
            </NavLink>
        </li>
    )
    const renderResNavLink = ({to, text}:{to:string, text:string}):React.ReactNode =>(
        <li key={to} className="text-justify">
            <NavLink
                to={to}
                className={({ isActive }) =>
                    `px-8 py-4 text-2xl sm:text-lg inline-block text-white hover:text-green-500 no-underline uppercase
                    hover:translate-x-4 transition-all duration-300 bg-gradient-120 bg-220 hover:opacity-85
                    hover:bg-[100%] ${isActive ? 'text-green-800' : 'bg-transparent'}`
                }>
                {text}
                </NavLink>
            {/* <NavLink to={to}  
                className={({isActive})=> 
                    `  px-8 py-4 text-2xl sm:text-lg inline-block text-white hover:text-green-500 no-underline uppercase
                        hover:translate-x-4 
                        transition-all duration-300
                        bg-gradient-120 
                        bg-220
                        hover:opacity-85
                        hover:bg-[100%]
                        active:bg-[100%]
                        active:text-green-700
                        ${isActive ? 'bg-[100%] text-green-700': 'bg-transparent '}
                    `        
                }
                >
                {text}
            </NavLink> */}
        </li>
    )
  return (
    <div className="flex justify-center items-center shadow h-20 fixed z-[1000] w-full bg-white" >
        <nav className="flex flex-row items-center justify-between select-none w-[1500px] xl:w-full py-4">
            <h1 className="text-green-600 font-medium text-2xl px-3 cursor-pointer xl:text-xl lg:text-lg md:text-xs transition-all duration-200">
                Mekdebe çenli bilim we terbiýe
            </h1>
            <ul className="list-none flex flex-row gap-4 mr-4 md:hidden ">
                {
                    [{to:'/', text:'Baş sahypa'},
                    {to:'/about', text:'Biz barada'}, 
                    {to:'/teachers', text:'Mugallymlar'},
                    {to:'/gallery', text:'Jadyly sandyk'},
                    {to:'/other', text:'Goşmaça'},
                    {to:'/login', text:'Ulgama gir'},
                    
                    ].map(renderNavLink)
                }
                
            </ul>
            <Modal>
                <Modal.Open opens="hamburger">
                    <HiBars3 className="hidden md:flex text-3xl sm:text-2xl mr-3 cursor-pointer hover:font-bold text-green-900"/>
                </Modal.Open>
                <Modal.Window name="hamburger">
                    <ul className=" flex flex-col gap-4 bg-transparent w-full h-full">
                        {
                            [{to:'/', text:'Baş sahypa'},
                            {to:'/about', text:'Biz barada'}, 
                            {to:'/teachers', text:'Mugallymlar'},
                            {to:'/gallery', text:'Jadyly sandyk'},
                            {to:'/other', text:'Goşmaça'},
                            {to:'/login', text:'Ulgama gir'},
                            ].map(renderResNavLink)
                        }
                    </ul>
                </Modal.Window>
            </Modal>
        </nav>
    </div>
  )
}

export default Navbar