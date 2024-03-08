

// import AboutUs from '../components/AboutUs';
// import Additional from '../components/Additional';
import { useEffect } from 'react';
// import Education from '../components/Education';
import Classes from '../components/Classes';
// import Classes from '../components/Classes';
const Goshmaca = () => {

  useEffect(()=>{
    document.title='Ýörite okuwlar'
  }, [])

  return (
    <div className='flex flex-col font-nunito max-w-[100vw] overflow-hidden '>



       <Classes />

       {/* <Education /> */}

    </div>
  );
}

export default Goshmaca;
