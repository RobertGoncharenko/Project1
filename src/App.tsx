import './index.scss'
import { Route, Routes, Link} from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { Suspense } from 'react';

const App = () => {
  return (
    <div className='app'>
      <Suspense fallback={<div>Loading...</div>}>
          <Link to={'/'}>Главная</Link>
          <Link to={'/about'}>О сайте</Link>
          <Routes>
            <Route path={'/about'} element={<AboutPageAsync/>}/>
            <Route path={'/'} element={<MainPageAsync />}/>

          </Routes>
        </Suspense>  
    </div>
  );
};

export default App;