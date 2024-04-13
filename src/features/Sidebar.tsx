import { Menu } from 'antd'
import { NavLink } from 'react-router-dom'
import { items } from '../utils/item';
const { SubMenu } = Menu;

const Sidebar = () => {
  // const onClick: MenuProps['onClick'] = (e) => {
  //   console.log('click ', e);
  //   // setCurrent(e.key);
  // };
  // const location = useLocation();
  // console.log(location.pathname)
  return (
    <aside className='row-span-full flex flex-col  bg-gray-900  text-white py-32 w-full gap-10'>
        <h1 className='text-center text-2xl px-3 font-semibold text-green-500 select-none'>Mekdebe çenli <br/> bilim we terbiýe</h1>
        <div className='w-full flex flex-col items-center justify-center px-2 gap-4'>
          <Menu
            theme="dark"
            className='text-lg w-full'
            mode="inline"
            // onClick={onClick}
            // defaultSelectedKeys={[location.pathname]} 
            // selectedKeys={[location.pathname.split('/')[1]]}
          >
          {items.map((item) =>
                  item.children ? (
                    <SubMenu key={item.key} title={item.label} icon={item.icon}>
                      {item.children.map((child) => (
                        <Menu.Item key={child.key}>
                          <NavLink to={(child.url as string)}>{child.label}</NavLink>
                        </Menu.Item>
                      ))}
                    </SubMenu>
                  ) : (
                    <Menu.Item key={item.key} icon={item.icon}>
                      <NavLink to={(item.url as string)}>{item.label}</NavLink>
                    </Menu.Item>
                  )
                )}
          </Menu>
            
        </div>
    </aside>
  )
}

export default Sidebar