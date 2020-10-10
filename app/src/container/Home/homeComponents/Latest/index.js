import React from 'react';
import './style.css';
import Data from '../../../../data.json';
/**
* @author
* @function Latest
**/

const Latest = (props) => {
  return(
    
      <div className="post">
      
            <h1>The Latest</h1>
            <hr/>
            <section className="card-1">
             <img src={require('../../../../components/images/MI-Punjab-IPL.jpg')}/>
             <div className="text_block_2">
              {Data.map(post => {
                      return(
                        <div className="text_block_2" key={post.id}>
                          <h3>{post.title}</h3>
                          <p>{post.content}</p>
                          <span>{post.date}</span>
                        </div>
                      )
                    })}
              </div>
            </section>
            <section className="card-1">
              <img src={require('../../../../components/images/laptop.jpg')}/>
              <div className="text_block_2">
                  {Data.map(post => {
                    return(
                      <div className="text_block_2" key={post.id}>
                        <h3>{post.title2}</h3>
                        <p>{post.content2}</p>
                        <span>{post.date2}</span>
                      </div>
                    )
                  })}
              </div>
            </section>
            <section className="card-1">
            <img src={require('../../../../components/images/Baked.jpg')}/>
              <div>
                {Data.map(post => {
                  return(
                    <div className="text_block_2" key={post.id} >
                      <h3>{post.title3}</h3>
                      <p>{post.content3}</p>
                      <span>{post.date3}</span>
                    </div>
                  )
                })}
              </div>
            </section>
      </div> 
    

   )

 }

export default Latest;