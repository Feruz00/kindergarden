import React from 'react';
import './index.css'; 
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Dashboard from './pages/Dashboard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime: 0
    }
  }
})

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={ <AppLayout /> } >
            <Route index element={<Dashboard />} />
            <Route path='about' element={<p>Feruz</p>} />
            <Route path='classes' element={<p>Feruz</p>} />
            <Route path='teachers' element={<p>Feruz</p>} />
            <Route path='gallery' element={<p>Feruz</p>} />
            <Route path='other' element={<p>Feruz</p>} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;