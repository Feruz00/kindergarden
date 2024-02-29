import Container from '../ui/Container'
import Teacher1 from '../assets/teacher-1.jpg'
import Teacher2 from '../assets/teacher-2.jpg'
import Teacher3 from '../assets/teacher-3.jpg'
import Teacher4 from '../assets/teacher-4.jpg'

import Person1 from '../assets/person-1.jpg'
import Person2 from '../assets/person-2.jpg'
import Person3 from '../assets/person-3.jpg'
import Person4 from '../assets/person-4.jpg'

import Slider from "react-slick";
import { useState } from 'react'

const Teachers = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 200,
      slidesToShow: 3,
      slidesToScroll: 1,
      afterChange: (current: number) => setCurrentSlide(current),
      responsive: [
        {
          breakpoint: 1461,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    };
    const handleDotClick = (index: number) => {
        setCurrentSlide(index);
      };
    
      const customPaging = (index: number) => {
        return (
          <div
            className={`h-6 w-6 bg-green-600 text-white flex items-center justify-center rounded-full p-1 mt-7 ${currentSlide === index ? 'bg-green-500' : ''}`}
            onClick={() => handleDotClick(index)}
          >
            {index + 1}
          </div>
        );
      };
    
    return (
    <Container className='flex items-center justify-center bg-zinc-100 '>
        <div className='w-[1500px] 2xl:w-full 2xl:px-10 py-6 flex flex-col  h-full gap-6'>
            <div className='flex-1 w-full flex flex-col items-center justify-evenly'>
                <h2 className="uppercase text-xl text-green-600
                relative
                before:absolute before:w-16 before:h-[2px] before:content-[''] before:top-1/2  before:bg-green-600 before:-translate-x-[150%]
                after:absolute after:w-16 after:h-[2px] after:content-[''] after:top-1/2  after:bg-green-600 after:translate-x-[50%]
                ">
                    TEJRIBELI MUGALLYMLAR
                </h2>
                <h1 className='font-semibold text-3xl text-green-700 uppercase py-5'>
                    TEJRIBELI MUGALLYMLAR BARADA IÇGIN GYZYKLANMAK
                </h1>
                <div className='w-full flex flex-row justify-center gap-10 items-center'>
                    {
                        [
                            {url: Teacher1, name: 'Atayewa Ayna', job:'Surat mugallymy'},
                            {url: Teacher2, name: 'Atayew Ata',   job:'Dil mugallymy'},
                            {url: Teacher3, name: 'Atayewa Ayna', job:'Aydym mugallymy'},
                            {url: Teacher4, name: 'Atayewa Ayna', job:'Surat mugallymy'},
                    
                        ].map(i=>(
                            <div key={i.url}
                                className='flex flex-col gap-3 w-44 items-center'
                            >
                                <div className=' h-40 w-40 flex justify-center items-center overflow-hidden rounded-full'>
                                    <img src={i.url} alt={i.name} className='w-full h-full object-cover' />
                                </div>
                                <p className='text-lg'>{i.name}</p>
                                <p className='text-sm text-gray-600 italic'>{i.job}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='flex-1 w-full flex flex-col items-center justify-evenly'>
            <h2 className="uppercase text-xl text-green-600
                relative
                before:absolute before:w-16 before:h-[2px] before:content-[''] before:top-1/2  before:bg-green-600 before:-translate-x-[150%]
                after:absolute after:w-16 after:h-[2px] after:content-[''] after:top-1/2  after:bg-green-600 after:translate-x-[50%]
                ">
                    PEÝDALY MASLAHATLAR
                </h2>
                <h1 className='font-semibold text-3xl text-green-700 uppercase py-5'>
                    Ene-atalar näme diýýär?!
                </h1>
                <div className="w-full flex flex-col gap-4" >
                    <Slider {...settings} customPaging={customPaging}>
                        {[
                        {
                            review: "çagalar bilen oýnamak, meseläni nädip çözmelidigini, duýgulary beýan etmelidigini baglanyşyk döretmelidigini görkezýär",
                            name: "Jemal Rustemowa",
                            img: Person1,
                            job: 'Lukman'
                        },
                        {
                            review: "Gündelik gurşawdaky nagyşlara, şekillere we sanlara üns bermek, soňraky matematika okuwynyň esasyny düzýär.",
                            name: "Myrat Maksadow",
                            img: Person2,
                            job: 'Karendeci'
                        },
                        {
                            review: "Gepleşmek, aýdym aýtmak, kitap okamak we sorag bermek ýaly çäreler möhüm dil we irki sowatlylyk endiklerini ösdürýär.",
                            name: "Batyr Myradow",
                            img: Person3,
                            job: 'Mugallym'
                        },
                        {
                            review: " Ene-atalar we terbiýeçiler gymmat materiallary talap etmeýän işler arkaly ýaş çagalarynyň ösmegine goldaw berip bilerler.",
                            name: "Sapar Saparow",
                            img: Person4,
                            job: 'Maliyeci'
                        },
                        ].map((item, index) => (
                        <div key={index} className="outline-none focus:outline-none">
                            <div className="mx-auto px-8 2xl:px-4 py-4 2xl:py-4 max-w-md bg-white rounded-lg shadow-md">
                            <p className="text-gray-800 text-base 2xl:text-sm">{item.review}</p>
                            <div className="flex items-center mt-4">
                                <img src={item.img} alt={item.name} className="w-12 h-12 object-cover rounded-full shadow-md" />
                                <div className="ml-2">
                                <h2 className="text-lg font-semibold text-gray-700">{item.name}</h2>
                                <p className="text-sm text-gray-600">{item.job}</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        ))}
                    </Slider>
                    
                    </div>
                    {/* <div className="flex justify-center mt-2">{renderCustomDots()}</div> */}
            </div>
        </div>
    </Container>
  )
}

export default Teachers