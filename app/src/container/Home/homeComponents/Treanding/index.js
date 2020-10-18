import React, { useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css'




/**
* @author
* @function Treanding
**/

const Treanding = (props) => {
  console.log(props);

  return (
    <div className="treanding">

      <section className="left-container">
        <Link to='./FullPost/index.js'>
          <h1> Dream11 IPL 2020: New Schedule, Team, Venue, PDF,Time table, <br />
                 Point Table, Winning Prediction</h1>
          <img src='/images/dream-11-ipl-2020-.jpg'  alt=""/>
        </Link>
      </section>
      <section className="right-container">
        <section className="container">
        <h1>Siddharth Anand On War: We Had Two Action Superstars, We Had To Set A Benchmark!</h1>
        <img src='/images/War-turns.jpg' alt=""/>

        </section>
        <section className="container-1">
          <h1>AMD Ryzen Processors with PRO technologies</h1>
          <img src='/images/Ryzen_PRO.png' alt=""/>
        </section>
      </section>

    </div>
  )

}

export default Treanding;