import { GoLocation } from 'react-icons/go'
import { MdCall,  MdMailOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-green-900 w-full py-10 flex justify-center items-center font-nunito '>
        <div className='w-[1500px] 2xl:w-full 2xl:px-5' >
            <div className='flex flex-row md:flex-col md:gap-5 md:px-10 justify-between items-start py-4 '>
                <div className='flex-1 flex flex-col justify-start items-start gap-5 '>
                    <Link to='/' className='text-3xl md:text-2xl text-white font-semibold '>
                        Mekdebe çenli bilim we terbiýe
                    </Link>
                    <p className='pr-10 text-lg text-zinc-50 md:text-base'>
                        Çagalary terbiýelemekde hem-de olara bilim bermekde mekdebe çenli çagalar edaralary bilen maşgalanyň, umumybilim edaralarynyň we jemgyýetçilik guramalarynyň sazlaşykly aragatnaşygyny üpjün etmek bolup durýar.
                    </p>
                </div>
                <div className='flex flex-1 flex-col gap-2 justify-between '>
                    <h1 className='text-white text-3xl font-semibold font-nunito md:text-2xl'>Ministrlik</h1>
                    <div className='flex flex-row  text-xl gap-5'>
                        <GoLocation className='text-3xl text-white font-bold' /> 
                        
                        <div className='text-white'>
                            <h1 className='text-semibold md:text-xl '>Salgymyz </h1>
                            <p className='md:text-sm'>ş Aşgabat Arçabil şaýoly</p>
                        </div>
                    </div>
                    <div className='flex flex-row  text-xl gap-5'>
                        <MdMailOutline  className='text-3xl md:text-2xl text-white font-bold' />
                        <div className='text-white'>
                            <h1 className='text-semibold md:text-xl '>Email </h1>
                            <p className='md:text-sm'>bakjabag.edu.tm</p>
                        </div>
                    </div>
                    <div className='flex flex-row  text-xl gap-5'>
                        <MdCall  className='text-3xl text-white font-bold' />
                        <div className='text-white'>
                            <h1 className='text-semibold md:text-xl '>Telefon belgisi </h1>
                            <p className='md:text-sm'>94-60-16</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='border-t border-white py-5 w-full'>
                <p className='text-center text-lg text-zinc-50 font-nunito font-medium'>
                    &copy; Ähli hukuklar goralan
                </p>
            </div>
        </div>
        
    </div>
  )
}

export default Footer