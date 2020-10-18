import React from 'react';
import Card from '../../../components/UI/Card';
import './style.css';
import Data from '../../../data/bollywood.json';


const Subpage = (props) => {
  return (
    <div>
      <div className="left">
        <Card style={{ padding: '10px' }}>
          <section className="heading">
            <h1>Bollywood</h1>
            <hr />
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
        <Card style={{ padding: '10px' }}>
          <h1>Top Post</h1>
          <hr />
          <section className="topPost">
            <img src='/images/akshay.jpg' alt=""/>

          </section>
          <section>
            <h3>Daulatabad Fort Daulatabad Fort <br />Daulatabad Fort</h3>
            <span>Travel </span><br /><br />
            <section className="short">
            <img src='/images/mirzapur.jpg' alt="" />
            <h4>Mirzapur,and More: October 2020 Guide to Netflix, Disney+ Hotstar, and Prime Video</h4>

            </section>
            <section className="short">
            <img src='/images/Mission.jpg' alt="" />
            <h4>Mission Bell Bottom Accomplished, The Next Stop On Akshay Kumar's Itinerary Is...</h4>
            

            </section>
            <section className="short">
            <img src='/images/bigbalexa.jpg' alt=""/>
            <h4>Amitabh Bachchan Becomes The First Celebrity Voice On Amazon Alexa In India</h4>

            </section>
          </section>
          <section className="adverties">
            <img src='/images/advertiesment1.jpg' alt="" />

          </section>
        </Card>
      </div>

    </div>
  )

}

export default Subpage;