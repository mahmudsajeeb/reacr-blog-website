import './settings.css';
import Sidebar from '../../Posts/Sidebar/Sidebar'
export default function Setting() {
  return (
    <> 
    
      <div className="settings">
        <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle">Update Your Account</span>
          <span className="settingDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
              <img className='settingImg' src="https://images.pexels.com/photos/915051/pexels-photo-915051.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=80%" alt="" />
              <label htmlFor="fileInput">
                <i className="settingIcon far fa-user-circle"></i>
              </label>
              <input type="file" id='fileInput' style={{display:'none'}} />
          </div>
          <label htmlFor="">UserName</label>
          <input type="text" placeholder='Name' />
          <label htmlFor="">Email</label>
          <input type="text" placeholder='Write your Emial' />
          <label htmlFor="">Password</label>
          <input type="password"   />
    <button className='btnSettings'>Update</button>
        </form>
        </div>
        <Sidebar />
        
      </div>
    </>
  )
}
