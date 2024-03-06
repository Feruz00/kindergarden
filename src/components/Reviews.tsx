

import { useGetReviews } from '../services/useReviews'
import Loader from '../ui/Loader'
import Carousel from '../ui/Slider'

const Reviews = () => {
    const {isLoading, reviews} = useGetReviews()
  return (
    <div className='flex-1 w-full flex flex-col items-center justify-evenly'>
    <h2 className="uppercase text-xl text-green-600 md:text-base
        relative
        before:absolute before:w-16 before:h-[2px] before:content-[''] before:top-1/2  before:bg-green-600 before:-translate-x-[150%]
        after:absolute after:w-16 after:h-[2px] after:content-[''] after:top-1/2  after:bg-green-600 after:translate-x-[50%]
        ">
            PEÝDALY MASLAHATLAR
        </h2>
        <h1 className='font-semibold text-3xl text-green-700 uppercase py-5 md:text-lg'>
            Ene-atalar näme diýýär?!
        </h1>
        <div className="w-full flex flex-col gap-4" >
           {
                isLoading ? <div className='w-full flex items-center justify-center'>
                <Loader />
                </div> : <Carousel 
                    data={
                    reviews.data
                    }
                />    
           }
           
          
        </div>
            {/* <div className="flex justify-center mt-2">{renderCustomDots()}</div> */}
    </div>
  )
}

export default Reviews