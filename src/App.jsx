import { useCallback, useState } from 'react'
import {  Routes , Route} from 'react-router'
import Button from './compo/button'
import Card from './compo/card'
import Home from './compo/home'
import About from './compo/about'
import Logo from './compo/logo'
import Login from './login'
import Navbar from './compo/navbar'
import Services from './compo/services'
function App() {
  
const [loggedIn, setLoggedIn]=useState(false);
const [message, setMessage]= useState("")



const loginForm = useCallback((email, password)=>{
  if (email === "example@gmail.com" && password=== "12345") {
    setLoggedIn(true);
    return true
  }else {
    setMessage("invalid password")
    return false
  }
}, [])

  return (
    <>
    {loggedIn && <Card/>}

    <Routes>
  
    <Route path='/home' element={<Home/>}/>
    {/* <Route path='/about' element={<About/>}/> */}
    <Route path='/logo' element={<Logo/>}/>
     <Route path='/' element={<Login loggedIn={loginForm} />}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/services' element={<Services/>}/>
  </Routes>
  {message && <p>{message}</p>}

  
  
  
    </>
  )
}

export default App
