import React from 'react';
import Card from '../../components/UI/Card';
import './style.css';

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
          </section>
          <section className="card-4">
            <img src={require('../../components/images/cheese.jpg')} />
            <div className="text_block">
              <h3>Spinach Artichoke Mac and Cheese Is Comfort Food at its Best</h3>
              <p>Like clockwork, the arrival of sweater weather brings a craving for all things cheesy and comforting. So we set out to create a dish that’s warm, cozy, and melty, without being heavy. The answer is this mac and cheese. It features the classic combination of spinach and artichokes to balance the richness,...</p>
              <span>UPDATED: September 28 2020</span>
            </div>
          </section>
          <section className="card-4">
            <img src={require('../../components/images/Baked.jpg')} />
            <div className="text_block">
              <h3>baked shrimp with feta with grilled sourdough</h3>
              <p>The yummiest Baked Shrimp with Feta and Grilled Sourdough! Bubble up some feta, garlic, shrimp, and tomato sauce in a pan, grill some buttery crispy bread, and dunk that right on in. The simplest fancy-ish dinner!,...</p>
              <span>UPDATED: September 28 2020</span>
            </div>

          </section>
          <section className="card-4">
            <img src={require('../../components/images/chana.jpg')} />
            <div className="text_block">
              <h3>This Low- Calorie Paneer, Chana, Chutney Salad Can Make Weight-Loss Fun</h3>
              <p>We love salads. There, we said it. We are pretty sure, a lot of you must be thinking, what is the whole fuss all about, All the celebrities cannot stop gushing about it, your friends want to hit the newest salad bar in town, even the restaurants that are popular </p>
              <span>UPDATED: September 28 2020</span>
            </div>

          </section>
          <section className="card-4">
            <img src={require('../../components/images/navratri.jpg')} />
            <div className="text_block">
              <h3>Navratri 2020: Sharad Navratri Date, Significance, Vrat Ka Khana, And Colours For All Days</h3>
              <p>Navratri 2020: It has not been one of your regular years, the Coronavirus pandemic has brought the world to a standstill. India also announced the nationwide in March. Now with gradual phases of unlock, not only so we have to acclimatise to the new normal but also re-think the idea of festivals</p>
              <span>UPDATED: October 03 2020</span>
            </div>

          </section>
          <section className="card-4">
            <img src={require('../../components/images/juice.jpg')} />
            <div className="text_block">
              <h3>Build Immunity With This Turmeric, Black Pepper And Carrot Juice</h3>
              <p>Since time immemorial, we have valued our spices not only for their flavour but also their holistic benefits. Spices, if consumed in moderation, could do wonders for your immunity, with minimum side-effects.</p>
              <span>UPDATED: October 03 2020</span>
            </div>

          </section>
          <section className="card-4">
            <img src={require('../../components/images/moong.jpg')} />
            <div className="text_block">
              <h3>Moong Dal Pakodi Curry - A Flavourful And Unique Twist To Your Regular Dal Recipe</h3>
              <p>Hate it or love it, you can't ignore the fact that lentils are truly a healthy addition to your daily meals. Lentils are one of the primary sources of protein in the vegetarian diet. Moong Dal, for instance, comprises an impressive 24 grams of protein per 100 grams as per the USDA</p>
              <span>UPDATED: September 28 2020</span>
            </div>

          </section>
          <section className="card-4">
            <img src={require('../../components/images/airprotein.jpg')} />
            <div className="text_block">
              <h3>NASA technology put to use to make ‘meat’ from air</h3>
              <p>Air Protein has developed a method of making meat analogues out of carbon dioxide. Based on NASA ideas about how to grow food on board long journey spacecraft, Air Protein says its technology can create protein in a matter of hours and without the use of any arable land.</p>
              <span>UPDATED: May 28 2020</span>
            </div>

          </section>
          <section className="card-4">
            <img src={require('../../components/images/idli.jpg')} />
            <div className="text_block">
              <h3>Weight Loss: How To Make High-Protein, Oats-Dal Idli Without Idli Maker</h3>
              <p>A healthy and wholesome breakfast is considered to be one of the most crucial components of a good weight-loss diet. Breakfast is the very first meal of your day, it kickstarts your metabolism, skipping breakfast would mean starving until lunch, and we already know what those garrulous hungers pangs do to us.</p>
              <span>UPDATED: September 28 2020</span>
            </div>

          </section>
        </Card>
      </div>
      <div className="right">
        <Card style={{ padding: '10px' }}>
          <h1>Top Post</h1>
          <hr />
          <section className="topPost">
          <img src={require('../../components/images/airprotein.jpg')} />

          </section>
          <section>
            <h3>Short NEWS</h3>
            <section className="short">
            <img src={require('../../components/images/juice.jpg')} />
              <h4>Build Immunity With This Turmeric, Black Pepper And Carrot Juice</h4>
            </section>
            <section className="short">
            <img src={require('../../components/images/idli.jpg')} />
              <h4>Weight Loss: How To Make High-Protein, Oats-Dal Idli Without Idli Maker</h4>

            </section>
            <section className="short">
            <img src={require('../../components/images/chana.jpg')} />
              <h4>This Low- Calorie Paneer, Chana, Chutney Salad Can Make Weight-Loss Fun</h4>
            </section>
          </section>
          <section className="adverties">
         
          <img src={require('../../components/images/advertiesment1.jpg')} />

          </section>
        </Card>
      </div>
    </div>
  )

}

export default Food;