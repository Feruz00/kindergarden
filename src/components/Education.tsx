
import { HiCheck } from 'react-icons/hi2'
import { useInView } from 'react-intersection-observer';

const Education = () => {
    const { ref:ref1, inView:inView1 } = useInView({
        threshold: 0.5, 
    });
    const { ref:ref2, inView:inView2 } = useInView({
        threshold: 0.5, 
    });
  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
        <div className='w-[1500px] 2xl:w-full 2xl:px-10 py-6 flex flex-row md:flex-col gap-4 h-full'>
            <div 
                className={ `flex-1 flex flex-col gap-6 transtion-all duration-700
                ${inView1 ? 'translate-x-0 translate-y-0 opacity-100': '-translate-x-12 opacity-0'}
                `}
                ref={ref1}

            >
                <h2 className="text-xl uppercase text-green-500 relative
                    after:absolute after:w-16 after:h-[2px] after:content-[''] after:top-1/2  after:bg-green-600 after:translate-x-[50%]
                ">
                    
                    OKUWLARA ÝAZYLMAK</h2>
                <h1 className='text-3xl text-green-800 font-semibold'>Çagalaryňyz üçin okuwlara ýazylmak</h1>
                <p className='text-zinc-500'>Dil we sowatlylyk endiklerini ösdürmek, dogulanda aladaly ulular bilen aragatnaşyk saklamak, kitap okamak, aýdym aýtmak, gürleşmek we hekaýalar aýdyp başlamakdan başlaýar. Çagalar ulaldygyça gürleşmek we diňlemek we ulularyň görelde sesini diňlemek arkaly dogry okamak arkaly dil ösdürýärler.</p>
                <ul className='flex-1 list-none text-gray-500  '>
                    {
                        ['Daşary ýurt dillerini öwrenmek', 'Takyk we tebigy ylymlar', 'Surat çekmek']
                        .map((i)=>(
                        <li key={i} className='flex flex-row gap-2 items-center xl:text-sm leading-10   py-2 '>
                            <HiCheck className='text-green-500' />
                        <span>
                            {i}
                        </span></li>
                        ))
                    }
                
                </ul>
            </div>
            <div className={`flex-1 transition-all duration-700 
                 ${inView2 ? 'translate-x-0 translate-y-0 opacity-100': 'translate-x-12 opacity-0' }
            `}
                ref={ref2}
            >
                <div className='h-full w-full bg-green-600 rounded-lg flex flex-col overflow-hidden '>
                    <div className='w-full py-6 bg-green-800 flex justify-center items-center'>
                        <h1 className='text-white text-2xl font-semibold'>Okuwlara ýazylmak</h1>
                    </div>
                    <form className='flex flex-col gap-3 justify-center items-center flex-1 py-5'>
                        <input 
                            placeholder='Çagaňyzyň ady'
                            className='px-2 py-4 rounded-lg outline-green-600 -outline-offset-2 border-none w-8/12 '
                        />
                        <input 
                            placeholder='Ata-enäniň elektron salgysy'
                            className='px-2 py-4 rounded-lg outline-green-600 -outline-offset-2 border-none w-8/12 '
                        />
                        <select
                            className='px-2 py-4 rounded-lg outline-green-600 -outline-offset-2 border-none w-8/12 '
                        >
                            {
                                ['Daşary ýurt dillerini öwrenmek', 'Takyk we tebigy ylymlar', 'Surat çekmek']
                                .map((i)=>(
                                <option key={i} className='py-2 px-4'>
                                    {i}
                                </option>
                                ))
                            }
                        </select>
                        <button type='submit' className='text-lg px-16 py-3 bg-green-700 transition-all duration-500 hover:bg-green-500 text-white  hover:border-green-800 rounded-full'>
                            Ugratmak
                        </button>

                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Education