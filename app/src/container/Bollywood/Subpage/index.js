import React from 'react';
import Card from '../../../components/UI/Card';
import './style.css';


const Subpage = (props) => {
  return (
    <div>
      <div className="left">
        <Card style={{ padding: '10px' }}>
          <section className="heading">
            <h1>Bollywood</h1>
            <hr />
          </section>

          <section className="card-4">
            <img src={require('../../../components/images/bigbalexa.jpg')} />
            <div className="text_block">
              <h3>Amitabh Bachchan Becomes The First Celebrity Voice On Amazon Alexa In India</h3>
              <p>Megastar Amitabh Bachchan has been roped in as Alexa's first celebrity voice in India. To speak to the 77-year-old Bollywood star, users will have to say “Alexa, Say Hello to Mr. Amitabh Bachchan”. In 2019, Samuel L Jackson became the first-ever celebrity voice to collaborate with Amazon.</p>
              <span>14 September, 2020</span>
            </div>

          </section>
          <section className="card-4">
            <img src={require('../../../components/images/Farhan.jpg')} />
            <div className="text_block">
              <h3>Farhan Akhtar: Please stop being so gullible</h3>
              <p>Farhan Akhtar responds after his name was dragged in by a new channel who claims him of hiring late actor Sushant Singh Rajput's cook Keshav.Farhan took to his Twitter account to set the record straight. Keshav is said to have given Rajput a glass of juice hours before the actor's death.</p>
              <span>02 October, 2020 09:56 IST</span>
            </div>

          </section>
          <section className="card-4">
            <img src={require('../../../components/images/sanju-bapu.jpg')} />
            <div className="text_block">
              <h3>Gandhi Jayanti: Sanjay Dutt Shares Video From Lage Raho Munna Bhai, Writes 'Happy Birthday Bapu'</h3>
              <p>Sanjay Dutt went nostalgic on the occasion of Gandhi Jayanti.  The actor went took a trip down memory lane and talked about what is probably one the most iconic films in Bollywood. It’s none other than ‘Lage Raho Munna Bhai</p>
              <span>02 October, 2020 09:00</span>
            </div>
          </section>
          <section className="card-4">
            <img src={require('../../../components/images/War-turns.jpg')} />
            <div className="text_block">
              <h3>Siddharth Anand On War: We Had Two Action Superstars, We Had To Set A Benchmark!</h3>
              <p>WAR is an all-time historic blockbuster that set the box office on fire in 2019 and became the highest-grossing film of the year. Directed by Siddharth Anand, the film starred two of the biggest action superstars of the country Hrithik Roshan and Tiger Shroff in an adrenaline-pumping face off</p>
              <span>02 October, 2020 10:27 IST</span>

            </div>


          </section>
          <section className="card-4">
            <img src={require('../../../components/images/Mission.jpg')} />
            <div className="text_block">
              <h3>Mission Bell Bottom Accomplished, The Next Stop On Akshay Kumar's Itinerary Is...</h3>
              <p>Akshay Kumar, yet again, confirmed the current status of "Mission Bell Bottom" and it reads "accomplished." The 53-year-old actor had flown into UK in August, when the shooting of Bell Bottom began. On September 1, 40 something days later, Akshay Kumar tweeted that Bell Bottom is "complete"</p>
              <span>02 October, 2020 4:53 pm IST</span>
            </div>

          </section>
          <section className="card-4">
            <img src={require('../../../components/images/akshay.jpg')} />
            <div className="text_block">
              <h3>Akshay Kumar's Sooryavanshi Not Releasing On Diwali, '83 May Be Postponed Too</h3>
              <p> Looks like Akshay Kumar's much-awaited cop drama Sooryavanshi has been postponed again. On Thursday, Reliance Entertainment Group CEO Sibashish Sarkar told news agency PTI: "One thing is clear, we are not releasing any film on Diwali. </p>
              <span>02 October, 2020 4:53 pm IST</span>
            </div>
          </section>
          <section className="card-4">
            <img src={require('../../../components/images/mirzapur.jpg')} />
            <div className="text_block">
              <h3>Mirzapur,and More: October 2020 Guide to Netflix, Disney+ Hotstar, and Prime Video</h3>
              <p>A lot is happening in October. We've the return of gun-toting Mirzapur, Baby Yoda in The Mandalorian, zombie horror The Walking Dead, and futuristic sci-fi Star Trek: Discovery to look forward to. and  Nawazuddin Siddiqui, Nicole Kidman, Adam Sandler, Bill Murray, and Ethan Hawke. </p>
              <span>30 September 2020 18:08 IST</span>
            </div>

          </section>
          <section className="card-4">
            <img src={require('../../../components/images/abhishek.jpg')} />
            <div className="text_block">
              <h3>Abhishek Bachchan's Response To Troll Who Called Him "Jobless". Mic Drop</h3>
              <p> Abhishek Bachchan recently shut down a troll, who attempted to shame his career, with dignity and grace. On Wednesday, as part of the Unlock 5 guidelines, the government gave the green signal to cinema halls</p>
              <span>01 October , 2020 11:08 am IST</span>
            </div>

          </section>
        </Card>
      </div>
      <div className="right">
        <Card style={{ padding: '10px' }}>
          <h1>Top Post</h1>
          <hr />
          <section className="topPost">
            <img src={require('../../../components/images/akshay.jpg')} />

          </section>
          <section>
            <h3>Daulatabad Fort Daulatabad Fort <br />Daulatabad Fort</h3>
            <span>Travel </span><br /><br />
            <section className="short">
            <img src={require('../../../components/images/mirzapur.jpg')} />
            <h4>Mirzapur,and More: October 2020 Guide to Netflix, Disney+ Hotstar, and Prime Video</h4>

            </section>
            <section className="short">
            <img src={require('../../../components/images/Mission.jpg')} />
            <h4>Mission Bell Bottom Accomplished, The Next Stop On Akshay Kumar's Itinerary Is...</h4>
            

            </section>
            <section className="short">
            <img src={require('../../../components/images/bigbalexa.jpg')} />
            <h4>Amitabh Bachchan Becomes The First Celebrity Voice On Amazon Alexa In India</h4>

            </section>
          </section>
          <section className="adverties">
            <img src={require('../../../components/images/advertiesment1.jpg')} />

          </section>
        </Card>
      </div>

    </div>
  )

}

export default Subpage;