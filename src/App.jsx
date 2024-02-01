import {useDispatch} from 'react-redux'
import { useState,useEffect } from 'react'
import './App.css'
import authService from './appwrite/auth'
import {login,logout} from './store/authSlice'
import { Header,Footer } from './components'
import { Outlet } from 'react-router-dom'

function App() {
//  console.log(import.meta.env.VITE_APPWRITE_URL);

const [loading,setLoading] = useState(true)

  const dispatch = useDispatch()

  useEffect(() => {
     authService.getCurrentUser()
     .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())

      }
     })
     .finally(() => setLoading(false))
  },[])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
        Todo :  <Outlet/> 
        </main>
        <Footer/>
      </div>
    </div>
  ) : <div><h1>Loading.....</h1></div>
 
}

export default App
