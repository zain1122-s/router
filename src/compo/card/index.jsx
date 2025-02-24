import React, { useState } from 'react'
import { Link } from 'react-router'
const Card = ()=> {


  return (

    <div class= " flex bg-blue-400  justify-between h-15">
      
      <div class="ml-40 text-3xl">
        <a ><Link to={"/logo"} element="logo"><img class="w-16 h-15" src="https://i.pinimg.com/474x/f8/3f/1d/f83f1dd66d7183b416158f9169839577.jpg"/></Link></a>
       
      </div>
      <ul class="flex gap-10 text-3xl mt-3">
      
        <li><Link to={"/home"} element={"home"} class="text-amber-50">home</Link> </li>
        <li><Link to={"/about"} element={"about"} class="text-amber-50">about</Link> </li>
        <li><Link to={"/services"} element={"services"} class="text-amber-50">services</Link> </li>
         <li class="text-amber-50">contect</li>

      </ul>
      <div class="flex gap-2 mr-40"> 
        <button class="bg-blue-500 border-0 w-20 h-14 text-amber-50"><Link to={"/"} element={"login"}>login</Link></button>
        <button class="bg-blue-500 border-0 w-20 h-14 text-amber-50">signup</button>
      </div>
      
    </div>
  )
}

export default Card
 