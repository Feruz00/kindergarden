

// import AboutUs from '../components/AboutUs';
// import Additional from '../components/Additional';
import { useEffect } from 'react';
import Teachers from '../components/Teachers';
// import Classes from '../components/Classes';
const TeachersView = () => {

  useEffect(()=>{
    document.title='Mugallymlar'
  }, [])

  return (
    <div className='flex flex-col font-nunito max-w-[100vw] overflow-hidden '>



       <Teachers />
       {/* <Classes /> */}

       {/* <Education /> */}

    </div>
  );
}

export default TeachersView;
