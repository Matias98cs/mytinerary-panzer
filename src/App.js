import './style/App.css';
import Footer from './components/Footer';
import Welcome from './pages/Welcome';
import Carousel from './components/Carousel';
import WebsiteLayout from './layouts/WebsiteLayout';
import EventsCarousel from './components/EventsCarousel';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cities from './pages/Cities';
import UnderConstruction from './pages/UnderConstruction';


function App() {
  return (
    <BrowserRouter>

      <WebsiteLayout>

        <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/cities' element={<Cities />} />
        <Route path='*' element={<UnderConstruction />} />
        </Routes>

      </WebsiteLayout>

    </BrowserRouter>
  );
}

export default App;
