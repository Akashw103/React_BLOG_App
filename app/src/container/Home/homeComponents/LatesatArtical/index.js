import React from 'react';
import './style.css';
import Card from '../../../../components/UI/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faCreditCard } from '@fortawesome/free-solid-svg-icons'

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
          <section className="card-2">
            <img src={require('../../../../components/images/dream-11-ipl-2020-.jpg')} />
            <div className="text_block">
              <h3>Dream11 IPL 2020: New Schedule, Team, Venue, PDF, Time table, Point Table, Winning Prediction</h3>
              <p>Dream11 IPL 2020 time table is now re-scheduled and starting from 19 September to 10 November 2020. The whole series will be hosted in UAE. BCCI has confirmed the date and time. The series includes 10 doubleheaders. And the evening matches will start at 7:30 p.m. IST.</p>
              <span>UPDATED:  6 September 2020</span>
            </div>

          </section>
          <section className="card-2">
            <img src={require('../../../../components/images/bigbalexa.jpg')} />
            <div className="text_block">
              <h3>Amitabh Bachchan Becomes The First Celebrity Voice On Amazon Alexa In India</h3>
              <p>Megastar Amitabh Bachchan has been roped in as Alexa's first celebrity voice in India. To speak to the 77-year-old Bollywood star, users will have to say “Alexa, Say Hello to Mr. Amitabh Bachchan”. In 2019, Samuel L Jackson became the first-ever celebrity voice to collaborate with Amazon.</p>
              <span>UPDATED: September 14 2020</span>
            </div>
          </section>
          <section className="card-2">
            <img src={require('../../../../components/images/Google.jpg')} />
            <div className="text_block">
              <h3>US Senate panel moves to compel CEOs of Facebook, Google, and Twitter to testify</h3>
              <p>The Senate Commerce Committee authorized subpoenas for Facebook CEO Mark Zuckerberg, Sundar Pichai of Google and Twitter's Jack Dorsey to force them to appear at a planned hearing if they do not agree to do so voluntarily.</p>
              <span>UPDATED: September 14 2020</span>
            </div>
          </section>
          <section className="card-2">
            <img src={require('../../../../components/images/cheese.jpg')} />
            <div className="text_block">
              <h3>Spinach Artichoke Mac and Cheese Is Comfort Food at its Best</h3>
              <p>Like clockwork, the arrival of sweater weather brings a craving for all things cheesy and comforting. So we set out to create a dish that’s warm, cozy, and melty, without being heavy. The answer is this mac and cheese. It features the classic combination of spinach and artichokes to balance the richness,....</p>
              <span>UPDATED: September 28 2020</span>
            </div>

          </section>
          <section className="card-2">
            <img src={require('../../../../components/images/internet.jpg')} />
            <div className="text_block">
              <h3>The Internet Is Built on ‘Intermediaries’ – They Should Be Protected</h3>
              <p> Now is not the time to be careless with laws that could harm the Internet we rely on more than ever in our day to day lives.Policymakers owe it to the billions of users around world that rely on the Internet for work, education, and daily activities..</p>
              <span>UPDATED: September 14 2020</span>
            </div>
          </section>
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
            <img src={require('../../../../components/images/byjus.png')} />
          </section>
        </Card>
        <h1>Top Post</h1>
        <hr />
        <section className="topPost">
        <img src={require('../../../../components/images/Google.jpg')} />

        </section>
        <section>
          <h3>Short News</h3>
          <section className="shortNews">
            <img src={require('../../../../components/images/microsoft.jpg')} />
            <h4>Microsoft Surface Laptop Go With 12.5-Inch Display, Revamped Surface Pro X to Launch on October 1: Report</h4>

          </section>
          <section className="shortNews">
            <img src={require('../../../../components/images/Google.jpg')} />
            <h4>US Senate panel moves to compel CEOs of Facebook, Google, and Twitter to testify</h4>

          </section>
          <section className="shortNews">
            <img src={require('../../../../components/images/cheese.jpg')} />
            <h4>Spinach Artichoke Mac and Cheese Is Comfort Food at its Best</h4>

          </section>

        </section>

      </div>

    </div>
  )

}

export default LatestArtical;