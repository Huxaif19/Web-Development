import { useEffect, useState } from 'react'; 
import {useDispatch} from 'react-redux';
import authService from "../src/appwrite/auth.js"
import {login, logout} from "../src/store/authSlice.js"
import { Header, Footer} from './components/index.js';
import { Outlet } from 'react-router-dom';
function App() { 
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if (userData){
        dispatch(login({userData}));
      }
      else {
        dispatch(logout());
      }
    })
    .finally(()=>{
        setLoading(false);
      }
    );
  },[]);
  return !loading ? (
    <div className='min-h-screen felx flex-wrap bg-gray-700 '>
      <div className='w-full block content-center'>
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ): null;
}

export default App
