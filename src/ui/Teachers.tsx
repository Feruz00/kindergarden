import React from 'react'
import { useInView } from 'react-intersection-observer'

type Teacher = {
    name: string;
    _id:string;
    url:string;
    description:string;
    job:string
}

type Props = {
    data: Teacher[]
}

const Teacher:React.FC<Props> = ({data}) => {
    const {ref, inView} = useInView({
        threshold: 0.5
      })
  
    return (
    <div 
        ref={ref}
        className={`w-full flex flex-row justify-center gap-10 md:gap-2 sm:gap-1 items-center
        
            transition-all duration-700

            ${inView ? 'opacity-100 translate-x-0 translate-y-0': '-translate-y-10 opacity-0'}
        `}
    
    >
    {
        data.map(i=>(
            <div key={i._id}
                className='flex flex-col gap-1 w-44 items-center'
            >
                <div className=' h-40 w-40 md:h-20 md:w-20 sm:h-11 sm:w-11 flex justify-center items-center overflow-hidden rounded-full'>
                    <img  crossOrigin='anonymous' src={`${process.env.SERVER}/${i.url}`} alt={i.name} className='w-full h-full object-cover' />
                </div>
                <p className='text-lg md:text-base'>{i.name}</p>
                <p className='text-sm text-gray-600 italic md:text-xs'>{i.job}</p>
            </div>
        ))
    }
</div>
  )
}

export default Teacher