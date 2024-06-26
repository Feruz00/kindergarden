import React from 'react';
import './index.css'; 
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Dashboard from './pages/Dashboard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import PDFViewer from './components/PDFViewer';
// import Pdf from './assets/programmingwithc.pdf'
// import Flipbook from './components/Flipbook';
import { pdfjs } from 'react-pdf';
import Gallery from './pages/Gallery';
// import ShowGallery from './pages/ShowGallery';
import Login from './pages/Login';
import { Toaster } from 'react-hot-toast';
import ProtectedRoute from './ui/ProtectedRoute';
import AdminAppLayout from './components/AdminAppLayout';
import AuthContext from './context/AuthContext';
import Educations from './features/admin/Educations';
import Teachers from './features/admin/Teachers';
import Reviews from './features/admin/Reviews';
import Subjects from './features/admin/Subjects';
import Settings from './features/admin/Settings';
import GalleryTypes from './features/admin/GalleryTypes';
import GalleryAdmin from './features/admin/Gallery';
import About from './pages/About';
import TeachersView from './pages/Teachers';
import Goshmaca from './pages/Goshmaca';
import ShowTeacher from './pages/ShowTeacher';
import ShowGallery from './pages/ShowGallery';
// import Contest from './features/admin/Contest';
import Participants from './components/Participants';
// import AboutUs from './components/AboutUs';
import ShowAbout from './features/admin/About';
import DashboardAdmin from './features/admin/DashboardAdmin';
import Address from './features/admin/Address';
// import Address from './features/admin/Address';
// import Footer from './components/Footer';

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime: 0
    }
  }
})

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/legacy/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContext>

      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={ <AppLayout /> } >
            <Route index element={<Dashboard />} />
            <Route path='about' element={ <About /> } />
            {/* <Route path='classes' element={<p>Feruz</p>} /> */}
            <Route path='teachers' element={<TeachersView />} />
            <Route path='teachers/:id' element={<ShowTeacher />} />
            
            <Route path='gallery' element={ <Gallery /> } />
            <Route path='gallery/:galleryId' element={ <ShowGallery /> } />
            <Route path='login' element={<Login />} />
            <Route path='other' element={ <Goshmaca /> } />

            
          </Route>
          <Route path='admin' element={<ProtectedRoute>
              <AdminAppLayout />
            </ProtectedRoute>}>
              <Route index element={ <DashboardAdmin/>  } />
              <Route path='ab' element={ <Educations /> } />
              <Route path='about-us' element={ <ShowAbout /> } />
              
              <Route path='teachers' element={ <Teachers/> } />

              <Route path='reviews' element={ <Reviews />  } />
              <Route path='educations' element={ <Subjects /> } />
              <Route path='types' element={ <GalleryTypes /> } />
              
              <Route path='gallery' element={ <GalleryAdmin />} />
              <Route path='settings' element={ <Settings /> } />
              <Route path='user-add' element={ <Participants /> } />
              <Route path='footer' element={ <Address /> } />
              
              
            </Route>  
          {/* <Route path='pdf' element={<Flipbook pdfUrl={Pdf} />} /> */}
        </Routes>
      </BrowserRouter>
      <Toaster position='top-center' gutter={12} containerStyle={{margin:'8px'}}
        toastOptions={{
          success: {
            duration: 3000
          },
          error:{
            duration: 5000
          },
          className:"bg-green-500 text-white",
          style:{
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            // backgroundColor: 'var(--color-grey-0)',
            // color: "var(--color-grey-700)"
          }
        }}
      />
      </AuthContext>
    </QueryClientProvider>
  );
};

export default App;