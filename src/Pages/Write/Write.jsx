import React from 'react'
import './write.css'
export default function Write() {
  return (
    <>
      <div className="write">
      <img className='writeImg' src="https://images.pexels.com/photos/3747455/pexels-photo-3747455.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="photo" />
        <div className="writeForm">
          <div className="writeFormGroup">
          <label htmlFor="fileInput">
          <i className=" writeIcon fas  fa-plus"></i>
          </label>
            <input type="file" id='fileInput' style={{display:"none"}} />
            <input type="text" className='writeInput' autoFocus={true}  placeholder='Title'/>
          </div>
          <div className="writeFormGroup">
            <textarea className='writeInput writeText' type="text" placeholder='Tell your story..'></textarea>
          </div>
          <button className='writeSubmit'>Publish</button>
        </div>
      </div>
    </>
  )
}
