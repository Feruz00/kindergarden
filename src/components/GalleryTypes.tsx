import {useSearchParams} from 'react-router-dom'
import { useGetGalleryTypes } from '../services/useGalleryTypes'
import Loader from '../ui/Loader'

const GalleryTypes = () => {
  const {isLoading, galleryTypes} = useGetGalleryTypes()
  const [searchParams, setSearchParams] = useSearchParams();
  
  return (
    <div className='w-[1500px] 2xl:w-full py-10 2xl:px-5 flex flex-col items-center gap-4'>
        <h1 className="text-green-600 text-xl text-center font-normal px-5
            relative
            before:absolute before:w-16 before:h-[2px] before:content-[''] before:top-1/2  before:bg-green-600 before:-translate-x-[150%]
            after:absolute after:w-16 after:h-[2px] after:content-[''] after:top-1/2  after:bg-green-600 after:translate-x-[50%]
            md:text-lg
        ">
            Jadyly sandyk
        </h1>  
        <h1 className='text-green-700 font-semibold text-4xl md:text-3xl text-center'>Öwrenmek we öwretmek üçin peýdaly</h1>
        <div className='w-full px-5 flex flex-row flex-wrap gap-3 md:gap-1 items-center justify-center'>
            {
                isLoading? <Loader />:(
                    <>
                            <button  
                                    className={` ${searchParams.has('type')? 'bg-white border-green-600 text-green-600 ':'bg-green-600 border-white text-white border' } 
                                    border text-xl lg:text-base px-10 lg:px-6 py-3 lg:py-2 rounded-full hover:bg-green-500 hover:text-white hover:border-white transition duration-500`}
                                    onClick={()=>{
                                        if(searchParams.has('type') ) searchParams.delete('type')
                                        setSearchParams(searchParams)
                                    }}
                                    >
                                    
                                    Ählisi
                            </button>
                        {
                            galleryTypes.data.map(i=>(
                                <button key={i._id} 
                                    className={` ${ searchParams.get('type') === i._id ? 'bg-green-600 text-white': '' } 
                                    border border-green-600  text-xl lg:text-base px-10 lg:px-6 py-3 lg:py-2 rounded-full hover:bg-green-500 hover:text-white hover:border-white transition duration-500`}
                                    onClick={()=>{
                                        searchParams.set('type', i._id)
                                        setSearchParams(searchParams)
                                    }}
                                    >
                                    
                                    {i.title}
                                </button>
                            ))
                        }
                    </>
                    
                )

            }
        </div>
        </div>
  )
}

export default GalleryTypes