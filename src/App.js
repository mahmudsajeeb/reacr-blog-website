 
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Setting from "./Pages/Settings/Setting";
import Topbar from "./topBar/Topbar";
import Home from "./Pages/Home/Home";
import { Routes, Route, Link } from "react-router-dom";
import Write from "./Pages/Write/Write";
import SinglePost from './SinglePost/SinglePost'  
import Post from "./Posts/Post/Post";

function App() {
  const user = true;
  return (
    <> 
   
    {/* <Post /> */}
          <Topbar />
          <Routes> 
               <Route path="/" element={<Home />} /> 
               <Route path="/register" element={
                 user ? <Home /> :
               <Register />
               } />
               
               <Route path="/write" element={
               user ?
               <Write /> : <Register />
               
               } />
               <Route path="/setting" element={
               user ? 
               <Setting /> : <Register />
               
               } />
               <Route path="/login" element={ <Login />} />
               <Route path="/post/:postId" element={ <SinglePost />} />
               
           </Routes>

    </>
  );
}

export default App;
