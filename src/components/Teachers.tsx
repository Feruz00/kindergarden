import Container from '../ui/Container'
// import Teacher1 from '../assets/teacher-1.jpg'
// import Teacher2 from '../assets/teacher-2.jpg'
// import Teacher3 from '../assets/teacher-3.jpg'
// import Teacher4 from '../assets/teacher-4.jpg'

// import Person1 from '../assets/person-1.jpg'
// import Person2 from '../assets/person-2.jpg'
// import Person3 from '../assets/person-3.jpg'
// import Person4 from '../assets/person-4.jpg'

import Teacher from '../ui/Teachers'
import { useGetTeachers } from '../services/useTeachers'
import Loader from '../ui/Loader'
import Reviews from './Reviews'

const Teachers = () => {
    
    const {teachers, isLoading} = useGetTeachers()
    // console.log(teachers)
    return (
    <Container className='flex items-center justify-center bg-zinc-100 '>
        <div className='w-[1500px] 2xl:w-full 2xl:px-10 py-6 flex flex-col  h-full gap-6'>
            <div className='flex-1 w-full flex flex-col items-center justify-evenly'>
                <h2 className="uppercase text-xl text-green-600 md:text-lg
                relative
                before:absolute before:w-16 before:h-[2px] before:content-[''] before:top-1/2  before:bg-green-600 before:-translate-x-[150%]
                after:absolute after:w-16 after:h-[2px] after:content-[''] after:top-1/2  after:bg-green-600 after:translate-x-[50%]
                ">
                    TEJRIBELI MUGALLYMLAR
                </h2>
                <h1 className='font-semibold text-3xl text-green-700 uppercase py-5 text-center md:text-lg'>
                    TEJRIBELI MUGALLYMLAR BARADA IÇGIN GYZYKLANMAK
                </h1>

                {
                    isLoading ? <Loader />
                    : 
                    <Teacher 
                    
                      data={ teachers.data }
                    />
                }

                
            </div>
           <Reviews/>
        </div>
    </Container>
  )
}

export default Teachers