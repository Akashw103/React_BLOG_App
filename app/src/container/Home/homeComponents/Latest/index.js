import React from 'react';
import './style.css';
import Data from '../../../../data/latest.json';
/**
* @author
* @function Latest
**/

const Latest = (props) => {
  return(
      <div className="post">
         <h1>The Latest</h1>
          <hr/>
          {Data.map(post => {
          return(
            <section className="card-1">
              <img src={post.blogImage}  alt="" />
              <div className="text_block_2">
                <div className="text_block_2" key={post.id}>
                  <h3>{post.title}</h3>
                  <p>{post.content}</p>
                  <span>{post.date}</span>
                </div>      
              </div>
            </section>)
            })}
      </div>      
              
    

   )

 }

export default Latest;