import React from 'react'
import { useInView } from 'react-intersection-observer'

interface Props{
    url:string,
    title: string,
    description: string,
    design: string 
}

const Card:React.FC<Props> = ({url, title, description, design}) => {
    const {ref, inView} = useInView({
        threshold: .5
    })
  return (
    <div className={`w-1/4 lg:w-1/2 md:w-full rounded-lg overflow-hidden bg-zinc-100 flex flex-col items-center gap-5 pb-8 border border-gray-100
        transition-all duration-700
        ${inView ? 'opacity-100 translate-x-0 translate-y-0': 'opacity-0 ' + design}
    `} key={url}
    
        ref={ref}
    >
        <div className="w-full">
            <img crossOrigin='anonymous' src={`${process.env.SERVER}/${url}`} className="w-full object-cover" />
        </div>
        <h1
            className="text-xl text-green-700 font-medium"
        >{title}</h1>
        <p className="px-4 text-center h-44 xl:text-sm">{description}</p>
        <button className="px-6 py-2 rounded-full bg-green-600 text-white hover:bg-green-500 transition-all duration-500">Içgin okamak</button>
    </div>
  )
}

export default Card