import React from 'react'
import { useInView } from 'react-intersection-observer';
// import { Link } from 'react-router-dom';

interface Props{
  img:string,
  title: string, 
  description: string,
  where: string,
  link:string
}
const ClassessItem:React.FC<Props> = ({img, title, description, link, where}) => {
  const { ref, inView } = useInView({
    threshold: 0.5, 
});
  return (
    <div className={`w-full h-full bg-zinc-100 border border-zinc-200 rounded-lg flex flex-col gap-2 items-center overflow-hidden
      transition-all duration-700
      ${inView ? 'translate-x-0 translate-y-0 opacity-100': where + ' opacity-0'}
    `}
      ref={ref}
    >
      <img crossOrigin='anonymous' src={`${process.env.SERVER}/${img}`} alt="surat " className=" object-fill w-full" />
      <h1 className='uppercase text-2xl py-4 lg:py-2 lg:text-base text-green-700 font-semibold'>{title} </h1>
      <p className='text-center px-2 text-zinc-500 py-4 lg:py-2 w-full xl:text-sm lg:text-xs h-1/2'>
        {description}
      </p>
      <hr className='w-2/3 text-zinc-600'/>
      
      <a className='px-8 py-2 bg-green-600 rounded-full my-2 text-white hover:bg-green-500 transition-all duration-500'
      
        href={link}
      >Ýazylmak</a>  
    </div> 
    )
}

export default ClassessItem