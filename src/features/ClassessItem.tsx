import React from 'react'
import { useInView } from 'react-intersection-observer';

interface Col{
  title: string,
  value: string
}
interface Props{
  img:string,
  title: string, 
  description: string,
  data: Col[],
  where: string

}
const ClassessItem:React.FC<Props> = ({img, title, description, data, where}) => {
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
      <img src={img} alt="surat " className=" object-fill w-full" />
      <h1 className='uppercase text-2xl py-4 lg:py-2 lg:text-base text-green-700 font-semibold'>{title} </h1>
      <p className='text-center px-2 text-zinc-500 py-4 lg:py-2 w-full xl:text-sm lg:text-xs h-1/2'>
        {description}
      </p>
      <hr className='w-2/3 text-zinc-600'/>
      <div>
          {
            data.map( (i, index)=>(
              <p key={index} className='border-b text-zinc-800  w-full gap-4 leading-10 grid grid-cols-2 lg:text-sm lg:leading-8'>
                <span className='border-r text-zinc-800 px-4 font-bold '>{i.title}</span>
                <span className='px-4'>{i.value}</span>
              </p>
                  
            ) )
          }
      </div>
      <button className='px-8 py-2 bg-green-600 rounded-full my-2 text-white hover:bg-green-500 transition-all duration-500'>Ýazylmak</button>  
    </div> 
    )
}

export default ClassessItem