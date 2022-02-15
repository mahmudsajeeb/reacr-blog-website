import React from 'react'
import './register.css'
import {  Link } from "react-router-dom";
export default function Register() {
  return (
    <> 
      <div className="register">
        <span className="registerTitle">Register</span>
        <form   className="registerForm">
        <label htmlFor="">Username</label>
          <input className='inputLong' type="text" placeholder='Enter Your username' />
          <label htmlFor="">Email</label>
          <input className='inputLong' type="text" placeholder='Enter Your Email' />
          <label htmlFor="">Password</label>
          <input className='inputLong' type="password" placeholder='Enter Your Password' />
          <button className='registerButton'>Register</button>
        </form>
        <button className='registerLogin'><Link  className='link' to="/login">Login</Link></button>
      </div>
    </>
  )
}
