import React from 'react';
import Card from '../../components/UI/Card';
import './style.css';
import Data from '../../data/technology.json';

/**
* @author
* @function Technology
**/

const Technology = (props) => {
  return (
    <div>
      <div className="left">
        <Card style={{ padding: '10px' }}>
          <section className="heading">
            <h1>Technology</h1>
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
            <img src='/images/Ryzen_PRO.png' />


          </section>
          <section>
            <h3>Short News</h3>
            <section className="short">
              <img src='/images/computerx.jpg' />
              <h4>Computex 2019: ../../../public/images/AMD, Intel, Asus Bring the Energy Back to PCs and Hardware</h4>

            </section>
            <section className="short">
              <img src='/images/nvdia.jpg' />
              <h4>Nvidia GeForce RTX 3080 Founders Edition Review</h4>

            </section>
            <section className="short">
              <img src='/images/microsoft.jpg' />
              <h4>Microsoft Surface Laptop Go With 12.5-Inch Display, Revamped Surface Pro X to Launch on October 1: Report</h4>

            </section>
          </section>
          <section className="adverties">
          <img src='/images/dell.jpg' />

          </section>
        </Card>
      </div>
    </div>
  )

}

export default Technology;