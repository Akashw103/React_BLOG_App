import React, { useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom';
import'./style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'


const List=()=>{
  return(
    <nav className="navbar">
    <ul className="navbarMenu">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/bollywood">Bollywood</NavLink></li>
      <li><NavLink to="/technology">Technology</NavLink></li>
      <li><NavLink to="/sport">Sport</NavLink></li>
      <li><NavLink to="/food">Food</NavLink></li>
      <li><NavLink to="/signup">SignUp</NavLink></li>
      <li><NavLink to="/login">Login</NavLink></li>
    </ul>
  </nav> 
  )
}


const Navbar = (props) => {
  const[isMobile,setIsMobile]=useState(
    window.matchMedia("(max-width:320px)").matches
  );

  useEffect(() =>{
    window.addEventListener("resize",()=>{
      setIsMobile(window.matchMedia("(max-width:320)").matches);
    });
  }) ;

const MobileList = () =>{
  const[active, setActive] = useState(false);
  return(
    <>
    <button onClick={() =>{
      setActive(!active);
    }}>
      <FontAwesomeIcon icon={faBars} />
    </button>
    {active && <List />}
    </>
  )
}


  return(
    <div className="logo">
      <a className="heading-vertical">The</a>
      <a className="heading-bold " href="#">Siren</a>
      {isMobile ? <MobileList/> : <List/>}
    </div>
   )

 }


export default Navbar;