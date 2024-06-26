// import { HiAcademicCap } from 'react-icons/hi2';
// import Img1 from '../assets/dashboard-1.jpg'
import CardView from '../components/CardView';
import Container from '../ui/Container';
// import { FaBook, FaChalkboardUser, FaChartGantt, FaClipboardList, FaMasksTheater } from 'react-icons/fa6';

import Additional from '../components/Additional';
import { useEffect } from 'react';
import { useGetDashboard } from '../services/useDashboard';
import { useGetTerbiye } from '../services/useTerbiye';
import Loader from '../ui/Loader';
import { Image } from 'antd';
const Dashboard = () => {

  const {isLoading, dasboard} = useGetDashboard()
  const {isLoading: isTerbiye, terbiyeler} = useGetTerbiye()
  useEffect(()=>{
    document.title='Baş sahypa'
  }, [])

  if(isLoading || isTerbiye)  return <div className='flex h-screen flex-col font-nunito max-w-[100vw] overflow-hidden w-full items-center justify-center '>
      <Loader />
  </div> 
  return (
    <div className='flex flex-col font-nunito max-w-[100vw] overflow-hidden '>
      {/* Banner */}
      <Container className="bg-green-800 flex items-center justify-center ">
        <div className="w-[1500px] xl:w-full flex flex-row items-center py-20 px-5 lg:px-4 lg:flex-col lg:gap-4 md:px-6">
          <div className="flex flex-col justify-start flex-1 items-start gap-5">
            <div className='flex gap-5 flex-col'>
              {
                dasboard.data[0]?.header?.map(i=>(
                  <h2 key={i} className='text-2xl xl:text-xl text-white font-semibold sm:text-base'>
                    {i}</h2>
                  
                ))
              }
              {/* <h2 className='text-2xl xl:text-xl text-white font-semibold sm:text-base'>Çagalary terbiýelemekde hem-de bilim bermekde</h2> */}
              {/* <h1 className='text-7xl xl:text-5xl text-white font-sans font-semibold sm:text-xl'>mekdebe çenli {<br/>} çagalar edaralary</h1> */}
              {/* <p className='text-lg xl:text-base text-white'>bilen maşgalanyň, 
              umumybilim edaralarynyň we jemgyýetçilik guramalarynyň sazlaşykly aragatnaşygyny üpjün etmek bolup durýar.</p> */}
            </div>
            {/* <button className='bg-green-700 hover:bg-green-600 transition-all duration-500 text-md flex items-center justify-center text-white px-6 py-2 rounded-full'>
              Içgin öwrenmek
            </button> */}
          </div>
          <div className='flex-1 flex justify-center items-center'>
            {
              dasboard.data[0]?.mainImg && (

                <Image crossOrigin='anonymous' alt="surat" src={`${process.env.SERVER}/${dasboard.data[0].mainImg}`}  
                                    className='object-cover lg:w-2/3 ' />
                 
              )
            }
          </div>
        </div>
      </Container>

        <div className='bg-zinc-50 flex justify-center items-center min-h-[calc(100vh-5rem)]'>
            <div className='w-[1500px] 2xl:w-full 2xl:px-4 h-full 
              grid grid-cols-3 grid-rows-2 sm:flex sm:flex-col md:grid-rows-6 lg:grid-cols-2 lg:grid-rows-3    
              py-10 gap-5'> 
              {
                terbiyeler.data.map((i)=>(
                  <CardView 
                    title={i.header}
                    // icon={<HiAcademicCap /> }
                    description={i.content}
                    where='translate-y-10 translate-x-10'
                />
                ))
              }
                {/* <CardView 
                    title='Okuw meyilnamasy'
                    icon={<HiAcademicCap /> }
                    description='Okuw meýilnamalaryna laýyklykda başlangyç bilimiň bilim maksatnamasyny özleşdirmäge taýýarlaýar; Okuw meýilnamalaryna laýyklykda çagalara daşary ýurt dillerini öwretmek işini guraýar;'
                    where='-translate-y-10 -translate-x-10'
                />
                <CardView 
                    title='Çäreler we oýunlar'
                    icon={<FaMasksTheater /> }
                    description='Çagalaryň tebigy zehinini, ukyplaryny, şahsy başarnyklaryny ýüze cykarmak we ösdürmek boýunça dürli medeni-köpçülik, çeper-döredijilik we beden saglygyny berkitmek boýunça çäreleri yzygiderli guraýar.'
                    where='-translate-y-10'
                />
                <CardView 
                    title='Usulýet görkezmeleri'
                    icon={<FaBook /> }
                    description='Mekdebe çenli çagalar edaralaryny okuw kitaplary hem-de okuw-usuly gollanmalar bilen üpjün etmek, olara dünýä ölçeglerine laýyk gelýän täze okuw-tehniki enjamlaryny, interaktiw-multimedia we kompýuter tehnologiýalaryny, yzygiderli ornaşdyrmak işleri üstünlikli alnyp barylýar.'
                    where='-translate-y-10 translate-x-10'
                />
                <CardView 
                    title='Statistika'
                    icon={<FaChartGantt /> }
                    description='Mekdebe çenli çagalar edaralarynda toparlaryň dolulygy çagi Türkmenistanyň kadalaşdyryjy hukuk namalaryna laýyklykda 1-3 ýaşly bakja toparynda 15-20 çaga, 3-6 ýaşly bag toparynda 20-25 çaga bolmalydyr.'
                    where='translate-y-10 -translate-x-10'
                />
                <CardView 
                    title='Hünar derejesini ýokarlandyrmak'
                    icon={<FaChalkboardUser /> }
                    description='Ýurdumyzda ähli bilim edaralary bilen bir hatarda mekdebe çenli çagalar edaralarynda berilýän bilimiň hili yzygiderli kämilleşdirilýär.'
                    where='translate-y-10'
                />
                <CardView 
                    title='Makalalar'
                    icon={<FaClipboardList /> }
                    description='Mekdebe çenli çagalar edaralaryna degişli birnäçe makalalar, çeper eserler, hekaýalar, goşgular hem halk köpçüligine ýetirilýär.'
                    where='translate-y-10 translate-x-10'
                /> */}

                
            </div>
        </div>

       {/* <AboutUs /> */}
       {/* <Classes /> */}

       {/* <Education /> */}
       {/* <Teachers /> */}

      <Additional />
    </div>
  );
}

export default Dashboard;
