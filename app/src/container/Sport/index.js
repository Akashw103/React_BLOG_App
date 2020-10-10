import React from 'react';
import Card from '../../components/UI/Card';
import'./style.css';


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
        </section>
        <section className="card-4">
        <img src={require('../../components/images/French.png')}/>    
              <div className="text_block">
              <h3>French Open 2020: Rafael Nadal Eases Into Last-16, Dispatches Stefano Travaglia In 95 Minutes </h3>
              <p>Rafael Nadal charged into the French Open last 16 on Friday and took another confident stride towards equalling Roger Federer's record of 20 major titles while Simona Halep and Dominic Thiem made surprisingly short work of tricky opponents.</p>
              <span>UPDATED:  03 September 2020</span>
        </div>

        </section>
        <section className="card-4">
        <img src={require('../../components/images/dream-11-ipl-2020-.jpg')}/>    
              <div className="text_block">
              <h3>Dream11 IPL 2020: New Schedule, Team, Venue, PDF, Time table, Point Table, Winning Prediction</h3>
              <p>Dream11 IPL 2020 time table is now re-scheduled and starting from 19 September to 10 November 2020. The whole series will be hosted in UAE. BCCI has confirmed the date and time. The series includes 10 doubleheaders. And the evening matches will start at 7:30 p.m. IST.</p>
              <span>UPDATED:  06 September 2020</span>
        </div>

        </section>
        <section className="card-4">
        <img src={require('../../components/images/fifa.png')}/>    
              <div className="text_block">
              <h3>FIFA World Cup: Records That May Tumble During World Cup In Russia </h3>
              <p>Like the previous editions, the FIFA World Cup 2018 edition will witness the fall of many records. While all the attention will be on Cristiano Ronaldo and Lionel Messi, there are few other records that could tumble in Russia. The weather conditions of Russia makes for a unique and challenging World Cup</p>
              <span>UPDATED:  16 june 2018</span>
        </div>

        </section>
        <section className="card-4">
        <img src={require('../../components/images/Badminton.png')}/>    
              <div className="text_block">
              <h3>Badminton: Asian Leg Of World Tour Postponed To 2021</h3>
              <p>The Asian leg of the 2020 badminton world tour scheduled for November has been moved until next year in Bangkok, officials said, in the latest disruption to the sport due to the coronavirus pandemic. The sport has seen international matches called off throughout the year,..</p>
              <span>UPDATED:  06 September 2020</span>
        </div>

        </section>
        <section className="card-4">
        <img src={require('../../components/images/car.jpg')}/>    
              <div className="text_block">
              <h3>Honda To Withdraw From Formula One At End Of 2021 Season</h3>
              <p>Honda said Friday it will withdraw from Formula One at the end of the 2021 season as part of the car industry's move away from internal combustion engines. The Red Bull and Alpha Tauri use power units made by the Japanese manufacturer. Honda said it was pursuing "carbon neutrality by 2020</p>
              <span>UPDATED:  29 September 2020</span>
        </div>

        </section>
        <section className="card-4">
        <img src={require('../../components/images/csk.jpg')}/>    
              <div className="text_block">
              <h3>IPL 2020, Kings XI Punjab vs Chennai Super Kings Preview: KL Rahul, MS Dhoni Look To Reverse Fortunes</h3>
              <p>Both Kings XI Punjab and Chennai Super Kings have suffered poor starts in their Indian Premier League 2020 campaigns, and will be looking to turn it around. Both teams have won just one out of their three matches going into Sunday's clash. KXIP failed to chase down a 192-run target in their last match against Mumbai Indians, with their death bowling a particular concern.</p>
              <span>UPDATED:  6 September 2020</span>
        </div>

        </section>
        <section className="card-4">
        <img src={require('../../components/images/Tennis.png')}/>    
              <div className="text_block">
              <h3>Djokovic Takes Trip Into Roland Garros Unknown Against Nadal Fan</h3>
              <p>Novak Djokovic admits he knows absolutely nothing about Daniel Galan, the world number 153 from Colombia who stands in his way of a place in the last 16 at Roland Garros on Saturday. That may be just as well as Galan, a 24-year-old lucky loser from qualifying.</p>
              <span>UPDATED:  21 September 2020</span>
        </div>

        </section>
        <section className="card-4">
        <img src={require('../../components/images/golf.jpg')}/>    
              <div className="text_block">
              <h3>Bryson DeChambeau captured his first major golf title on Sunday, firing a three-under-par 67..</h3>
              <p>Bryson DeChambeau became the first player since 1955 to win with the only sub-par score in the final round, and just the fourth ever to do it, completing a dominating performance.</p>
              <span>UPDATED:  06 September 2020</span>
        </div>

        </section>
      </Card>   
    </div>
    <div className="right">
      <Card style={{padding:'10px'}}>
        <h1>Top Post</h1>
        <hr/>
        <section className="topPost">
        <img src={require('../../components/images/Dream11.jpg')}/>
        

        </section>
        <section>
          <h3>Short News</h3>
          <section className="short">
          <img src={require('../../components/images/fifa.png')}/> 
          <h4>FIFA World Cup: Records That May Tumble During World Cup In Russia </h4>

          </section>
          <section className="short">
          <img src={require('../../components/images/Badminton.png')}/> 
                <h4>Badminton: Asian Leg Of World Tour Postponed To 2021</h4>

          </section>
          <section className="short">
          <img src={require('../../components/images/dream-11-ipl-2020-.jpg')}/> 
          <h4>Dream11 IPL 2020: New Schedule, Team, Venue, PDF, Time table, Point Table, Winning Prediction</h4>

          </section>
        </section>
        <section className="adverties">
        <img src={require('../../components/images/dell.jpg')}/> 

        </section> 
      </Card>
    </div> 
  </div>
   )

 }

export default Sport;