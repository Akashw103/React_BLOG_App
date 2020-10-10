import React from 'react';
import'./style.css'

/**
* @author
* @function LatestStoies
**/

const LatestStoies = (props) => {
  return(
       
    <div className="stories">
        <h1>Latest Stories</h1>
        <hr/>
        <section className="card-3">
        <div className="text_block">
              <h3>Amitabh Bachchan Becomes The First Celebrity Voice On Amazon Alexa In India</h3>
              <p>Megastar Amitabh Bachchan has been roped in as Alexa's first celebrity voice in India. To speak to the 77-year-old Bollywood star, users will have to say “Alexa, Say Hello to Mr. Amitabh Bachchan”. In 2019, Samuel L Jackson became the first-ever celebrity voice to collaborate with Amazon.</p>
              <span>UPDATED: September 14 2020</span>
        </div>

        </section>
        <section className="card-3">
        <div className="text_block">
              <h3>The Internet Is Built on ‘Intermediaries’ – They Should Be Protected</h3>
              <p>Now is not the time to be careless with laws that could harm the Internet we Internet for work rely on more than ever in our day to day lives.Policymakers owe it to the billions of users around world that rely on the Internet for work, education, and daily activities..</p>
              <span>UPDATED: September 14 2020</span>
        </div>
        </section>
        <section className="card-3">
        <div className="text_block">
              <h3>Spinach Artichoke Mac and Cheese Is Comfort Food at its Best</h3>
              <p>Like clockwork, the arrival of sweater weather brings a craving for all things cheesy and comforting. So we set out to create a dish that’s warm, cozy, and melty, without being heavy. The answer is this mac and cheese. It features the classic combination of spinach and artichokes to balance the richness,..</p>
              <span>UPDATED: September 14 2020</span>
        </div>
        </section>
    </div> 
   )

 }

export default LatestStoies;