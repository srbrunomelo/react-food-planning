import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoaderPage } from '../components'

const Home = lazy(() => import('../pages/Home'));  
const Wishlist = lazy(() => import('../pages/Wishlist'))

const MainRoutes = () => {
  return ( 
    <BrowserRouter>
      <Suspense fallback={<LoaderPage />}> 
        <Routes>
          <Route path='/' element={<Home/>} />  
          <Route path='/wishlist' element={<Wishlist/>} /> 
        </Routes>
      </Suspense>
    </BrowserRouter> 
  );
}

export default MainRoutes; 