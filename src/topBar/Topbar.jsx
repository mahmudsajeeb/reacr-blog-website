import React from 'react';
import './topbar.css';
import {  Link } from "react-router-dom";
import img from '../img/img.png'
function Topbar() {
  const user = false;
  return( <>

  
      <div className="Header">
        <div className="topLeft">
              <i class="fab topIcon fa-facebook-square"></i>
              <i class="fab topIcon fa-twitter-square"></i>
              <i class="fab topIcon fa-linkedin"></i>
        </div>
        <div className="topCenter">
          <div className="centerList">
           
              <li className='TopList'><Link  className='link' to="/">Home</Link></li>
              <li className='TopList'><Link  className='link' to="/about">About</Link></li>
              <li className='TopList'><Link  className='link' to="/contact">Contact</Link></li>
              <li className='TopList'><Link  className='link' to="/write">Write</Link></li>
              <li className='TopList'>{user  && "LOGOUT" }</li>
            
          </div>
        </div>
        <div className="topRight">
        {
          user ? (
            <img className='topImg' src={img} alt="img" />
          ):(
            <>
            <li className='TopList'><Link  className='link' to="/login">LOGIN</Link> </li>
            <li className='TopList'><Link  className='link' to="/register">REGISTER</Link></li>
              
             </>
          )
        }
          

          <i class="topSearchIcon fas fa-search"></i>
        </div>
      </div>


  
  </>
  );
}

export default Topbar;
