import React from 'react';
import './sidebar.css';
import sideBarImg from '../Sidebar/img.png'
export default function Sidebar() {
  return (
    <>
      <div className="sidebars">
        <span className="sideBarTitle">About Me</span>
        <img className='sidebarImg' src={sideBarImg} alt="" />
        <p className='description'>I'm a Computer Engineer and Professional Web Developer</p>
        <span className="sideBarTitle">CATEGORY</span>
        <div className="sidebarList">
          <ul className="ItemList">
            <li className='List'>Music</li>
            <li className='List'>Movie</li>
            <li className='List'>Sport</li>
            <li className='List'>Games</li>
            <li className='List'>Programming</li>
            <li className='List'>Dance</li>
          </ul>
        </div>

        <span className="sideBarTitle">Follow Us</span>
        <div className="sidebarFollowUs">
        <i className="fab topIcon fa-facebook-square"></i>
         <i className="fab topIcon fa-twitter-square"></i>
         <i className="fab topIcon fa-linkedin"></i>
         <i className="fab topIcon fa-github-square"></i>
        </div>
      </div>
    </>
  );
}
