import React from 'react';
import './singlepost.css'
import singleImg from '../img/b.jpg'
export default function SinglePost() {
  return(
    <>
      <div className="singlepost">
        <div className="singlePostWrapper">
        <img className='singlePostImg' src={singleImg} alt="singleImg" />
        <h1 className="singlePostTitle">Lorem ipsum dolor sit amet consectetur iste.
         <div className="singlePostEdit">
          <i class=" singlePostIcon far fa-edit"></i>
          <i class=" singlePostIcon fas fa-trash-alt"></i>
          </div> 
        </h1>
        <div className="singlePostInfo">
          <span className="author">Author: <b>Sajib</b></span>
          <span className="authorNamePost">1 hour Ago</span>
          </div>
          <p className='singleDec' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum obcaecati similique veritatis magni magnam deleniti quia temporibus natus explicabo, error eligendi incidunt facilis autem doloremque cupiditate facere quam labore pariatur corporis laudantium architecto consectetur omnis harum nesciunt. Qui, laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, cupiditate?</p>
        </div>
        </div>  
    </>
  );
}
