import './styles/index.scss'
import React from 'react';
import { Route, Routes, Link} from 'react-router-dom';
import { Suspense } from 'react';
import { classNames } from 'app/shared/lib/className/classNames';
import { useTheme } from './providers/ThemeProvider';
import AboutPage from 'pages/AboutPage/ui/AboutPage';
import MainPage from 'pages/MainPage/ui/MainPage';


const App = () => {
  const {theme, toggleTheme} = useTheme()
  const bool = true;

  return (
    <div className={classNames('app',{},[theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={'/about'} element={<AboutPage/>}/>
            <Route path={'/'} element={<MainPage/>}/>

          </Routes>
        </Suspense>  
    </div>
  );
};

export default App;