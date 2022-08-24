import './style/App.css';
import Welcome from './pages/Welcome';
import WebsiteLayout from './layouts/WebsiteLayout';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cities from './pages/Cities';
import UnderConstruction from './pages/UnderConstruction';
import ScrollToTop from './components/ScrollToTop';
import NewCity from './pages/NewCity';


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <WebsiteLayout>

        <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/cities' element={<Cities />} />
        <Route path='/newcity' element={<NewCity/>}/>
        <Route path='*' element={<UnderConstruction />} />
        </Routes>

      </WebsiteLayout>

    </BrowserRouter>
  );
}

export default App;
