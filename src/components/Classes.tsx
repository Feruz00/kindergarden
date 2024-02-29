
import Img1 from '../assets/testemoial-1.jpg'
import Img2 from '../assets/testemoial-2.jpg'
import Img3 from '../assets/testemoial-3.jpg'
import ClassessItem from '../features/ClassessItem'

const Classes = () => {
  return (
    <div className='flex items-center justify-center bg-zinc-50  md:min-h-screen'>
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
        <div className="w-full grid grid-cols-3 gap-5 h-full px-16 md:grid-cols-1  md:px-8">
            <ClassessItem 
                title='SURAT ÇEKMEK'
                description='Siz biziň bu kursumyzda boýaglar arkaly surat çekmek bilen tanyşarsyňyz. Şeýle-de bu boýaglary nädip ulanmalydygyny görersiňiz. Mundan başga-da siz bu kursumyzda 3 sany reňkde agajyň suratyny çekmegiň usulyny, owadan aýly gijäniň suratyny çekmegiň usulyny, öwrenersiňiz.'
                img={Img1}
                data={[
                    {title: 'ýaş aralygy', value: '3 - 6 ýaş'},
                    {title: 'orun sany', value: '20 çaga'},
                    {title: 'okuw wagty', value: '08:00 - 10:00'},
                    {title: 'okuw tölegi', value: '150 tmt / aýyna'},
                    
                ]}
                where='-translate-x-5'
            />
            <ClassessItem 
                title='DIL ÖWRENMEK'
                description='Ýurdumyzyň dil syýasatynda ýaş nesliň dünýä dillerini bilmegi göz öňünde tutulýar. Häzirki wagtda çagalarymyz mekdebe çenli çagalar edaralarynda, umumy orta bilim berýän mekdeplerde hem-de ýokary okuw mekdeplerinde ene dilimiz bilen bir hatarda, birnäçe daşary ýurt dilini öwrenýärler.'
                img={Img2}
                data={[
                    {title: 'ýaş aralygy', value: '3 - 6 ýaş'},
                    {title: 'orun sany', value: '20 çaga'},
                    {title: 'okuw wagty', value: '08:00 - 10:00'},
                    {title: 'okuw tölegi', value: '150 tmt / aýyna'},
                    
                ]}
                
                where='translate-y-5'
            />
            <ClassessItem 
                title='TAKYK YLYMLAR'
                description='Siz biziň bu kursumyzda boýaglar arkaly surat çekmek bilen tanyşarsyňyz. Şeýle-de bu boýaglary nädip ulanmalydygyny görersiňiz. Mundan başga-da siz bu kursumyzda 3 sany reňkde agajyň suratyny çekmegiň usulyny, owadan aýly gijäniň suratyny çekmegiň usulyny, öwrenersiňiz.'
                img={Img3}
                data={[
                    {title: 'ýaş aralygy', value: '3 - 6 ýaş'},
                    {title: 'orun sany', value: '20 çaga'},
                    {title: 'okuw wagty', value: '08:00 - 10:00'},
                    {title: 'okuw tölegi', value: '150 tmt / aýyna'},
                    
                ]}
                
                where='translate-x-5'
            />
            
        </div>
    </div>
    </div>
  )
}

export default Classes