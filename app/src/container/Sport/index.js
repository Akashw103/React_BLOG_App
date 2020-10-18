import React from 'react';
import Card from '../../components/UI/Card';
import'./style.css';
import Data from '../../data/sport.json';

/**
* @author
* @function Sport
**/

const Sport = (props) => {
  return(
 <div>
    <div className="left">
      <Card style={{padding:'10px'}}>
        <section className="heading">
          <h1>Sport</h1>
          <hr/>
          {Data.map(post => {
              return(
              <section className="card-4">
                <img src={post.blogImage}  alt=""/>
                <div className="text_block">
                  <div className="text_block_2" key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    <span>{post.date}</span>
                  </div>      
                </div>
              </section>)
            })}
        </section> 
      </Card>   
    </div>
    <div className="right">
      <Card style={{padding:'10px'}}>
        <h1>Top Post</h1>
        <hr/>
        <section className="topPost">
        <img src='/images/Dream11.jpg' alt=""/>
        

        </section>
        <section>
          <h3>Short News</h3>
          <section className="short">
          <img src='/images/fifa.png' alt=""/> 
          <h4>FIFA World Cup: Records That May Tumble During World Cup In Russia </h4>

          </section>
          <section className="short">
          <img src='/images/Badminton.png' alt=""/> 
                <h4>Badminton: Asian Leg Of World Tour Postponed To 2021</h4>

          </section>
          <section className="short">
          <img src='/images/dream-11-ipl-2020-.jpg' alt=""/> 
          <h4>Dream11 IPL 2020: New Schedule, Team, Venue, PDF, Time table, Point Table, Winning Prediction</h4>

          </section>
        </section>
        <section className="adverties">
        <img src='/images/dell.jpg' alt=""/> 

        </section> 
      </Card>
    </div> 
  </div>
   )

 }

export default Sport;