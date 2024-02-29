import { useInView } from "react-intersection-observer";
import Slider from "react-slick";

interface Props{
  data:{
    review:string, 
    name: string,
    img:string,
    job:string
  }[]
}

const Carousel:React.FC<Props> = ({data}) => {
    const {ref, inView} = useInView({
      threshold: 0.5
    })

    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 200,
      slidesToShow: 3,
      slidesToScroll: 1,
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
    // const handleDotClick = (index: number) => {
    //     setCurrentSlide(index);
    //   };
    
    //   const customPaging = (index: number) => {
    //     return (
    //       <div
    //         className={`h-6 w-6 bg-green-600 text-white flex items-center justify-center rounded-full p-1 mt-7 ${currentSlide === index ? 'bg-green-500' : ''}`}
    //         onClick={() => handleDotClick(index)}
    //       >
    //         {index + 1}
    //       </div>
    //     );
    //   };
  return (
    <div 
      ref={ref}
      className={`
        transition-all duration-500 
        ${inView ? 'opacity-100 translate-x-0 translate-y-0': 'translate-y-8 opacity-0'}
      `}
    >
      
      <Slider {...settings}  
      
      >
        {
        data.map((item, index) => (
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
  )
}

export default Carousel