import { Outlet } from 'react-router-dom';
import Sidebar from '../features/Sidebar';
import Header from '../features/Header';

const AdminAppLayout: React.FC = () => {
    return (
        <div className='grid grid-cols-[17rem_1fr] grid-rows-[auto_1fr] h-screen font-nunito'>
            <Sidebar />
            <Header />
            <main className='bg-white border-l border-gray-300 overflow-x-auto relative py-9'>
                <Outlet />
            </main>
        </div>
    );
}

export default AdminAppLayout;
