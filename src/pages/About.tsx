

import AboutUs from '../components/AboutUs';
// import Additional from '../components/Additional';
import { useEffect } from 'react';
// import Reviews from '../components/Reviews';
// import Container from '../ui/Container';
const About = () => {

  useEffect(()=>{
    document.title='Biz barada'
  }, [])

  return (
    <div className='flex flex-col font-nunito max-w-[100vw] overflow-hidden '>


       <AboutUs />
       {/* <Classes /> */}

       {/* <Education /> */}
       {/* <Teachers /> */}
      {/* <Container className='flex items-center'>
        <Reviews />
      </Container> */}
    </div>
  );
}

export default About;
