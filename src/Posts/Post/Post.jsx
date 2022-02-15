import React from 'react';
import './Post.css'
import postImg from '../Sidebar/sneha-0RPZ3qwrGjw-unsplash.jpg'

export default function Post() {
  return (

    <>
      <div className="post">
        <div className="post_info">
          <img className='postImg' src={postImg}alt="" />
          <span className="postCat">Music Life</span>
           
          <span className="post_title">Lorem, ipsum dolor.</span>
          <hr />
          <div className="datePost">2 hours ago</div>
          <p className="postdescri">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam temporibus illo natus voluptates harum reiciendis aperiam, magni similique tempore dolore voluptate unde iste animi provident obcaecati cum perferendis sint laudantium ab! Maxime soluta sint temporibus numquam quo veniam consequuntur ipsam obcaecati quaerat inventore. Consequuntur nostrum corporis at omnis accusantium ea optio aperiam, quidem ex laudantium placeat sunt blanditiis accusamus. Voluptates optio modi consequatur sequi deleniti recusandae nihil saepe officia quos ipsa iusto qui, a exercitationem nulla, porro illum mollitia blanditiis eos, nobis magni et minus libero quas repellendus. Culpa vel necessitatibus neque vero iure, excepturi quia distinctio odio? Exercitationem, quasi!
          </p>
        </div>
      </div>
    </>
  );
}
