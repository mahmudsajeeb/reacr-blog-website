import React from 'react'
import './login.css'
import {  Link } from "react-router-dom";
export default function Login() {
  return (
    <>
      <div className="login">
      <span className="loginTitle">Login</span>
        <form   className="loginForm">
          <label   htmlFor="">Email</label>
          <input className='LoginInput' type="text" placeholder='Enter Your Email' />
          <label   htmlFor="">Passowrd</label>
          <input className='LoginInput' type="password" placeholder='Enter your Password' />
          <button className='loginButton'>Login</button>
        </form>
        <button className='loginRegister'><Link  className='link' to="/register">REGISTER</Link></button>
      </div>

    </>
  )
}
