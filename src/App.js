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
import { useSignInTokenMutation } from './features/usersAPI';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthUser } from './features/userSlice';
import NewItinerary from './pages/NewItinerary';


function App() {

  const [singInToken] = useSignInTokenMutation()
  const dispatch = useDispatch()
  const logged = useSelector(state => state.auth.logged)
  const role = useSelector(state => state.auth.role)
  const [admin , setAdmin] = useState()

  async function verifyToken(){
    try{
      let res = await singInToken(localStorage.getItem('token'))
      if(res.data?.success){
        dispatch(setAuthUser(res.data.response.user))
      }else{
        localStorage.removeItem('token')
      }
    }catch(error){
      localStorage.removeItem('token')
      console.log(error)
    }
  }

  useEffect(() => {
    if(role === "admin"){
      setAdmin(true)
    }else if(role === "user") {
      setAdmin(false)
    }
  }, [role])

  useEffect(() => {
    if(localStorage.getItem('token')){
      verifyToken()
    }
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
        <Route path='/auth/signup' element={<SignUp />}/>
        <Route path='/auth/signin' element= {<SignIn />
        } />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/mytinerary/mytineraries' element= {<MyTineraries />} />

        </Routes>

      </WebsiteLayout>

    </BrowserRouter>
  );
}

export default App;
