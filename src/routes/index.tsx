import { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom'
import { LoaderPage } from '../components'

const Home = lazy(() => import('../pages/Home'));  
const Wishlist = lazy(() => import('../pages/Wishlist'))

const MainRoutes = () => {
  return ( 
    <HashRouter>
      <Suspense fallback={<LoaderPage />}> 
        <Routes>
          <Route path='/' element={<Home/>} />  
          <Route path='/wishlist' element={<Wishlist/>} /> 
        </Routes>
      </Suspense>
    </HashRouter> 
  );
}

export default MainRoutes; 