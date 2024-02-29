import React from 'react'
import { useInView } from 'react-intersection-observer';

interface Props{
    title: string, 
    icon: React.ReactNode | string, 
    description: string, 
    where: string
}
const CardView:React.FC<Props> = ({title, icon, description, where = ''}) => {
    const { ref, inView } = useInView({
        threshold: 0.5, 
    });
    // w-1/4 xl:w-2/5 lg:w-10/12  
    //         px-10 xl:px-5 lg:px-3 md:px-1 
    //         py-10 
            
    return (
    <div className={`flex flex-row gap-1 opacity-0 shadow-lg 
            bg-zinc-100 items-start 
            transition-all  duration-1000  rounded-xl py-5 px-4 
            ${inView ? 'translate-x-0 translate-y-0 opacity-100': 
           where + ' opacity-0'}

            sm:py-3 sm:px-2
            `} ref={ref}>
        <div className='text-4xl text-green-700 sm:text-xl'>
            {icon}
        </div>
        <div className='flex flex-col gap-2 justify-start px-4'>
            <h2 className='text-2xl font-semibold text-green-600 xl:text-xl sm:text-base'>{title}</h2>
            <p className='flex justify-end text-justify text-gray-600 text-lg xl:text-base lg:text-sm sm:text-xs'>
                {description}
            </p>
        </div>
        
    </div>
  )
}

export default CardView