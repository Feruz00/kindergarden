import { useEffect } from 'react'
import { useGetTeacher } from '../services/useTeachers'
import Container from '../ui/Container'
import Loader from '../ui/Loader'

const ShowTeacher = () => {
    const {isLoading, teacher} = useGetTeacher()
    
    useEffect(()=>{
        document.title='Mugallym'
    }, [])
    
      return (
        <Container className='flex justify-center items-center bg-zinc-100'>
            <div className='w-[1500px] 2xl:w-full 2xl:px-10 flex flex-row justify-center lg:flex-col  gap-5'>
                {
                    isLoading ? <Loader />
                    :<div className='flex flex-row gap-7 md:flex-col items-center space-y-4 md:space-y-0 md:space-x-4'>
                    <div className='md:w-1/3'>
                        <img
                            src={`${process.env.SERVER}/${teacher.data.url}`}
                            alt={teacher.data.name}
                            crossOrigin='anonymous'
                            className='w-full h-auto rounded-lg shadow-md'
                        />
                    </div>
                    <div className='md:w-2/3'>
                        <h2 className='text-3xl font-semibold text-gray-800'>{teacher.data.name}</h2>
                        <p className='text-gray-600 text-lg'>{teacher.data.job}</p>
                        <p className='mt-2 text-gray-700'>{teacher.data.description}</p>
                    </div>
                </div>
                }
                

            </div>
        
           {/* <Classes /> */}
    
           {/* <Education /> */}
    
        </Container>
      );
}

export default ShowTeacher