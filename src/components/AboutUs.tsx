
import { useInView } from 'react-intersection-observer'
import Img2 from '../assets/dashboard-2.jpg'
import Img3 from '../assets/dashboard-3.jpg'

import Container from '../ui/Container'
import { HiCheck } from 'react-icons/hi2'

const AboutUs = () => {
  const { ref: ref1, inView:inView1 } = useInView({
    threshold: 0.5, 
  });

  const { ref: ref2, inView:inView2 } = useInView({
    threshold: 0.5, 
  });
  

// w-1/
  return (
    <Container className='flex justify-center items-center bg-zinc-100'>
    <div className='w-[1500px] 2xl:w-full 2xl:px-10 flex flex-row lg:flex-col  gap-5'>
      <div className='flex-1' 
        
      >
        <img alt="surat" src={Img2} 
        className={`object-cover transition-all  duration-1000  ${inView1 ? 'translate-x-0 translate-y-0 opacity-100': '-translate-x-12 -translate-y-12 opacity-0'}`}
        ref={ref1}
        />
      </div>
      <div 
        className={`flex-1 flex flex-col gap-1 transition-all  duration-1000 ${inView2 ? 'translate-x-0 translate-y-0 opacity-100': 'translate-x-12 translate-y-12 opacity-0'} `}
        ref={ref2}

      >
        <p className="uppercase text-lg text-green-600 relative after:absolute after:w-16 after:h-[2px] after:content-[''] after:top-1/2  after:bg-green-600 after:translate-x-[50%]">BIZ BARADA ÖWRENIŇ</p>
        <h1 className='text-green-600 font-semibold text-2xl'>Çagaňyzy çekmegiň ýollaryny gözleýärsiňizmi?!</h1>
        <p className='text-base text-gray-500'>Ýurdumyzda 1 ýaşdan 6 ýaşa çenli çagalary terbiýelemek we okatmak, olaryň beden we jan saglygyny goramak, berkitmek, şahsy başarnyklaryny ösdürmek üçin maşgala kömek hökmünde mekdebe çenli çagalar edaralary döredilýär.</p>
        
        <div className='flex flex-row mt-5'>
          <div className='flex-1 flex flex-col justify-between items-start'>
          <img src={Img3} alt='surat' className='w-1/2 object-cover' />
          {/* <button className='px-10 py-2 text-lg text-white bg-green-700 rounded-full hover:bg-green-600 transition-all duration-300'>Gatnaşmak</button> */}
          </div>
          <ul className='flex-1 list-none text-gray-500  '>
            {
              ['Dil, sowatlylyk we aragatnaşyk', 'Meseläni çözmek we irki matematika', 'Oýunlary oýnamak we döredijilik',, 'Jemgyýetçilik duýgy okuwy']
              .map((i)=>(
                <li key={i} className='flex flex-row gap-2 items-center xl:text-sm leading-10 border-b  border-gray-600 py-2 first:border-t'>
                <HiCheck />
                <span>
                  {i}
                </span></li>
              ))
            }
           
          </ul>
        </div>
      </div>
    </div>
  </Container>
  )
}

export default AboutUs