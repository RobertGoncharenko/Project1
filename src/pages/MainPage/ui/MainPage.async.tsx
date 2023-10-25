import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise(res => {
  //@ts-ignore
  setTimeout(() =>res(import('./MainPage')), 1500)
}));

// export const MainPageAsync = lazy(() => import('./MainPage'));