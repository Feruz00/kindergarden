import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className='row-span-full flex flex-col  bg-gray-900  text-white py-32 w-full gap-10'>
        <h1 className='text-center text-2xl px-3 font-semibold text-green-500 select-none'>Mekdebe çenli <br/> bilim we terbiýe</h1>
        {/* <Menu
          accessKey={openKeys}
          mode="inline"
          theme='dark'
          className='bg-transparent text-base mt-6   '
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          items={items}
        /> */}

        <div className='w-full flex flex-col items-center justify-center px-5 gap-4'>
            {
                [{value: 'Ýörite okuwlar', url: 'ab'}, 
                {value: 'Mugallymlar', url:'teachers'},
                { value: 'Bildiren pikirler', url:'reviews'}, 
                {value:'Öz okuwlarymyz', url: 'educations'}, 
                {value: 'Jadyly sandyk', url: 'gallery'},
                {value: 'Sazlama', url: 'settings'},
            
            ]
                .map(i=>(
                    <NavLink to={i.url} key={i.url} 
                        className={`text-lg px-5 font-light block hover:bg-gray-700 w-full  py-2 rounded-lg transition-all duration-500`}
                    > {i.value} </NavLink>
                ))
            }
        </div>
    </aside>
  )
}

export default Sidebar