import React from 'react';

import Header from '../../Header/Header';
import BlogPost from '../../Posts/BlogPost'; 
import Sidebar from '../../Posts/Sidebar/Sidebar';
 import './home.css'

export default function Home() {
  return(
    <>
    <Header />
    <div className="home">
    
     <BlogPost />
      <Sidebar />
    </div>
      
    </>
  )
}
