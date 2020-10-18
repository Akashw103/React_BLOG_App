import React from 'react';
import Card from '../../components/UI/Card';
import './style.css';
import Data from '../../data/food.json';
/**
* @author
* @function Food
**/

const Food = (props) => {
  return (
    <div>
      <div className="left">
        <Card style={{ padding: '10px' }}>
          <section className="heading">
            <h1>Food</h1>
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
          <img src='/images/airprotein.jpg'  alt="" />

          </section>
          <section>
            <h3>Short NEWS</h3>
            <section className="short">
            <img src='/images/juice.jpg' alt="" />
              <h4>Build Immunity With This Turmeric, Black Pepper And Carrot Juice</h4>
            </section>
            <section className="short">
            <img src='/images/idli.jpg' alt="" />
              <h4>Weight Loss: How To Make High-Protein, Oats-Dal Idli Without Idli Maker</h4>

            </section>
            <section className="short">
            <img src='/images/chana.jpg' alt="" />
              <h4>This Low- Calorie Paneer, Chana, Chutney Salad Can Make Weight-Loss Fun</h4>
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

export default Food;