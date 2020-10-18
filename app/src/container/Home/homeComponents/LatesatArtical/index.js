import React from 'react';
import './style.css';
import Card from '../../../../components/UI/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Data from '../../../../data/latestartical.json';

/**
* @author
* @function LatestArtical
**/

const LatestArtical = (props) => {
  return (
    <div className="latestArtical">

      <h1>Latest Article</h1>
      <hr />

      <div className="leftcolumn">
        <Card style={{ padding: '10px' }}>
        {Data.map(post => {
          return(
            <section className="card-2">
              <img src={post.blogImage} width="280px"  alt="" />
              <div className="text_block">
                <div className="text_block_2" key={post.id}>
                  <h3>{post.title}</h3>
                  <p>{post.content}</p>
                  <span>{post.date}</span>
                </div>      
              </div>
            </section>)
            })}
          <button>
            <FontAwesomeIcon icon={faArrowDown} />Load More
            </button>
          <section className="banner">
            
          </section>
        </Card>
      </div>
      <div className="rightcolumn">
        <Card style={{ padding: '10px' }}>
          <section className="fram">
            <img src='/images/byjus.png' alt="" />
          </section>
        </Card>
        <h1>Top Post</h1>
        <hr />
        <section className="topPost">
        <img src='/images/Google.jpg'  alt=""/>

        </section>
        <section>
          <h3>Short News</h3>
          <section className="shortNews">
            <img src='/images/microsoft.jpg'  alt=""/>
            <h4>Microsoft Surface Laptop Go With 12.5-Inch Display, Revamped Surface Pro X to Launch on October 1: Report</h4>

          </section>
          <section className="shortNews">
            <img src='/images/Google.jpg'  alt=""/>
            <h4>US Senate panel moves to compel CEOs of Facebook, Google, and Twitter to testify</h4>

          </section>
          <section className="shortNews">
            <img src='/images/cheese.jpg'  alt=""/>
            <h4>Spinach Artichoke Mac and Cheese Is Comfort Food at its Best</h4>

          </section>

        </section>

      </div>

    </div>
  )

}

export default LatestArtical;