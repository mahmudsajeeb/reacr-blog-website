import React from 'react';
import headerImg from "../img/post.jpg"
import './header.css'
export default function Header() {
  return (
    <>
       <div className="header">
         <div className="header_title">
           <span className='headerTitlesm'>React & Node</span>
           <span className='headerTitleLg'>Blog</span>
         </div>

         <div className="header_img">
           <img className='headerImg' src={headerImg} alt="headerImg" />
         </div>
       </div>
    </>
  );
}
