
// import Img1 from '../assets/testemoial-1.jpg'
// import Img2 from '../assets/testemoial-2.jpg'
// import Img3 from '../assets/testemoial-3.jpg'
import ClassessItem from '../features/ClassessItem'
import {useGetEducations} from '../services/useEducation'
import Loader from '../ui/Loader'
const Classes = () => {
    const {educations, isLoading} = useGetEducations()
    // console.log(educations)
    const design = (i:number)=>{
        if(i%3 == 1) return '-translate-x-10'
        else if(i%3 == 2) return 'translate-y-10'
        else return 'translate-x-10'
    }

  return (
    <div className='flex items-center justify-center bg-zinc-50  min-h-screen'>
    <div className='w-[1500px] 2xl:w-full 2xl:px-10 py-6 flex flex-col items-center h-full gap-6'>
        <h1 className="text-green-600 text-xl text-center font-normal px-5
            relative
            before:absolute before:w-16 before:h-[2px] before:content-[''] before:top-1/2  before:bg-green-600 before:-translate-x-[150%]
            after:absolute after:w-16 after:h-[2px] after:content-[''] after:top-1/2  after:bg-green-600 after:translate-x-[50%]
            
        ">
            PEÝDALY OKUWLAR
        </h1>    
        <h1 className="text-green-700 uppercase text-3xl font-semibold">
            ÇAGALARŇYZ ÜÇIN ÝÖRITE OKUWLAR
        </h1>
        {
            isLoading 
                ? <Loader />
                : 
        <div className="w-full grid grid-cols-3 gap-5 h-full px-16 md:grid-cols-1  md:px-8">
            {
                educations.data.map((i,index)=>(
                    <ClassessItem key={i._id}
                        title={i.title}
                        description={i.description}
                        img={i.url}
                        link={i.link}
                        where={design(index+1)}
                    />        
                ))
            }
            
        </div>
        }
    </div>
    </div>
  )
}

export default Classes