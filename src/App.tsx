import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoutes} from './const';
import { HelmetProvider } from 'react-helmet-async';
import MainPage from './pages/main-page';
import FavoritesPage from './pages/favorite';


function App(): JSX.Element {
  return (

    <HelmetProvider>
      <BrowserRouter>
      <Routes>
        <Route
        path={AppRoutes.Main}
        element={<MainPage />}
        />
        <Route
        path={AppRoutes.Favorite}
        element={<FavoritesPage />}
        />


      </Routes>
        </BrowserRouter>
    </HelmetProvider>

  );
}

export default App;
