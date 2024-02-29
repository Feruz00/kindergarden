import React from 'react'
import { HiCheck } from 'react-icons/hi2'

interface Props{
    data: string[]
}
const List:React.FC<Props> = ({data}) => {
  return (
    <ul className='flex-1 list-none text-gray-500  '>
        {
            data
               .map((i)=>(
            <li key={i} className='flex flex-row gap-2 items-center xl:text-sm leading-10 border-b  border-gray-600 py-2 first:border-t'>
                <HiCheck />
            <span>
                {i}
            </span></li>
            ))
        }
    
    </ul>
  )
}

export default List