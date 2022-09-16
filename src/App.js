import './style/App.css';
import Welcome from './pages/Welcome';
import WebsiteLayout from './layouts/WebsiteLayout';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cities from './pages/Cities';
import PageNotFound from './pages/PageNotFound';
import ScrollToTop from './components/ScrollToTop';
import NewCity from './pages/NewCity';
import Detail from './components/Detail';
import EditPage from './pages/EditPage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import { useEffect, useState } from 'react';

import MyTineraries from './pages/MyTineraries';


function App() {

  const [logged, setLogged] = useState(false)
  const [admin, setAdmin] = useState(false)

  useEffect(() => {
    JSON.parse(localStorage.getItem('user')) && setLogged(true)
    JSON.parse(localStorage.getItem('user'))?.role === 'admin' && setAdmin(true)
  },[])

  return (
    <BrowserRouter>
      <ScrollToTop />
      <WebsiteLayout>

        <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/cities' element={<Cities />} />
        <Route path='/newcity' element={
          admin
          ?
          <NewCity/>
          :
          <Welcome/>
        }/>
        <Route path='/cities/:id' element={<Detail/>} />
        <Route path='/editcity' element={
          admin
          ?
          <EditPage />
          :
          <Welcome />
        } />
        <Route path='/auth/signup' element={
          logged
          ?
          <Welcome/>
          :
          <SignUp />
        } />
        <Route path='/auth/signin' element= {
          logged
          ?
          <Welcome/>
          :
          <SignIn />
        } />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/mytinerary/mytineraries' element= {<MyTineraries />} />

        </Routes>

      </WebsiteLayout>

    </BrowserRouter>
  );
}

export default App;
