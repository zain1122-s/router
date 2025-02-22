import { useCallback, useState } from 'react'
import {  Routes , Route} from 'react-router'
import Button from './compo/button'
import Card from './compo/card'
import Home from './compo/home'
import About from './compo/about'
import Logo from './compo/logo'
import Login from './login'
function App() {
  
const [loggedIn, setLoggedIn]=useState(false);




const loginForm = useCallback((email, password)=>{
  if (email === "example@gmail.com" && password=== "12345") {
    setLoggedIn(true);
    
  }else {
    steMessage("invalid password")
  }
}, [])

  return (
    <>
    
    {/* <Card/> */}
    <Routes>
    {/* <Route path="/" element={<Button />} /> */}
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/logo' element={<Logo/>}/>
     <Route path='/' element={<Login loggedIn={loginForm} />}/>
   
  </Routes>

  
  
  
    </>
  )
}

export default App
