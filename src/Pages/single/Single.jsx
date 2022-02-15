import './single.css';
import Sidebar from '../../Posts/Sidebar/Sidebar'
import SinglePost from '../../SinglePost/SinglePost';
export default function Single() {
  return(
    <>
      {/* Post */}
      <div className="single">
          <SinglePost />
          <Sidebar />
      </div>
    </>
  );
}
