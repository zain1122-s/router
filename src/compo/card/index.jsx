import React, { useState } from 'react'
import { Link } from 'react-router'
const Card = ()=> {


  return (

    <div class= " flex bg-amber-300  justify-between h-13">
      
      <div class="ml-4 text-3xl">
        <a ><Link to={"/logo"} element="logo"> logo</Link></a>
       
      </div>
      <ul class="flex gap-10 text-3xl">
      
        <li><Link to={"/home"} element={"home"}>home</Link> </li>
        <li><Link to={"/about"} element={"about"}>about</Link> </li>
        
        <li>contect</li>
      </ul>
      <div class="flex gap-2"> 
        <button class="bg-amber-200 border-0 w-15 h-10"><Link to={"/"} element={"login"}>login</Link></button>
        <button>signup</button>
      </div>
      
    </div>
  )
}

export default Card
 