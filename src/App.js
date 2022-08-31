import './style/App.css';
import Welcome from './pages/Welcome';
import WebsiteLayout from './layouts/WebsiteLayout';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cities from './pages/Cities';
import PageNotFound from './pages/PageNotFound';
import ScrollToTop from './components/ScrollToTop';
import NewCity from './pages/NewCity';
import Detail from './components/Detail';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <WebsiteLayout>

        <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/cities' element={<Cities />} />
        <Route path='/newcity' element={<NewCity/>}/>
        <Route path='*' element={<PageNotFound />} />
        <Route path='/detail' element={<Detail/>} />
        </Routes>

      </WebsiteLayout>

    </BrowserRouter>
  );
}

export default App;
