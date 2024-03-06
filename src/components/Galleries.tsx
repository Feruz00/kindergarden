import { useGetGallery } from '../services/useGallery'
import GalleryItem from '../ui/GalleryItem'
import Loader from '../ui/Loader'

const Galleries = () => {
    const {isLoading, galleries} = useGetGallery()
    const design = (i:number)=>{
      if(i%3 == 1) return '-translate-x-10'
      else if(i%3 == 2) return 'translate-y-10'
      else return 'translate-x-10'
  }
  return (
    <div className='w-[1500px] 2xl:w-full py-10 2xl:px-5 flex flex-wrap flex-row items-center gap-4 justify-center'>
        {
          isLoading? <Loader />:(
            galleries.data.map((i, index)=>(
              <GalleryItem
              key={i._id}
                {...i}
                design={design(index)}
              />
            ))
          )
        }
        {
          !isLoading && galleries?.data?.length === 0 && <div className='h-screen'>
            <h1 className='text-3xl text-green-700 '>
            Häli maglumatlar ýüklenmedik
            </h1>
          </div>
        }
    </div>
  )
}

export default Galleries