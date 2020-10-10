import React from 'react';
import Card from '../../components/UI/Card';
import './style.css';


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
          </section>

          <section className="card-4">
            <img src={require('../../components/images/internet.jpg')} />
            <div className="text_block">
              <h3>The Internet Is Built on ‘Intermediaries’ – They Should Be Protected</h3>
              <p> Now is not the time to be careless with laws that could harm the Internet we rely on more than ever in our day to day lives.Policymakers owe it to the billions of users around world that rely on the Internet for work, education, and daily activities..</p>
              <span>UPDATED: September 14 2020</span>
            </div>
          </section>
          <section className="card-4">
            <img src={require('../../components/images/Google.jpg')} />
            <div className="text_block">
              <h3>US Senate panel moves to compel CEOs of Facebook, Google, and Twitter to testify</h3>
              <p>The Senate Commerce Committee authorized subpoenas for Facebook CEO Mark Zuckerberg, Sundar Pichai of Google and Twitter's Jack Dorsey to force them to appear at a planned hearing if they do not agree to do so voluntarily.</p>
              <span>UPDATED: September 14 2020</span>
            </div>
          </section>
          <section className="card-4">
            <img src={require('../../components/images/apple.jpg')} />
            <div className="text_block">
              <h3>Apple's legal battle with Epic Games starts for real today, could alter app store policies</h3>
              <p>The legal fight between Apple and Epic Games kicks into full gear on Monday with decisions that will influence the future of app stores in the US and how the world's largest technology platforms make money from developers.</p>
              <span>UPDATED: September 14 2020</span>
            </div>
          </section>
          <section className="card-4">
            <img src={require('../../components/images/microsoft.jpg')} />
            <div className="text_block">
              <h3>Microsoft Surface Laptop Go With 12.5-Inch Display, Revamped Surface Pro X to Launch on October 1: Report</h3>
              <p> Microsoft Surface Laptop Go with 12.5-inch display and Microsoft Surface Pro X with upgraded internals may debut on Thursday, October 1. A report states that Microsoft has plans to unveil......</p>
              <span>UPDATED: September 15 2020</span>
            </div>
          </section>
          <section className="card-4">
            <img src={require('../../components/images/nvdia.jpg')} />
            <div className="text_block">
              <h3>Nvidia GeForce RTX 3080 Founders Edition Review</h3>
              <p> Several years sometimes pass between major generation refreshes,and improvements in performance. It's now been almost exactly two years since Nvidia launched its GeForce RTX 20 lineup, the GeForce RTX 3090, the GeForce RTX 3080, and the GeForce RTX 3070.</p>
              <span>UPDATED: 16 September 2020</span>
            </div>
          </section>
          <section className="card-4">
            <img src={require('../../components/images/computerx.jpg')} />
            <div className="text_block">
              <h3>Computex 2019: AMD, Intel, Asus Bring the Energy Back to PCs and Hardware</h3>
              <p>Computex, the world's biggest computer hardware trade show, has been in somewhat of a slump for the past few years. As excitement has shifted out of the PC hardware arena towards smartphones and similar gadgets, I've seen the show reduce in size,...</p>
              <span>UPDATED: 7 june 2019</span>
            </div>
          </section>
          <section className="card-4">
            <img src={require('../../components/images/internet.jpg')} />
            <div className="text_block">
              <h3>The Internet Is Built on ‘Intermediaries’ – They Should Be Protected</h3>
              <p> Now is not the time to be careless with laws that could harm the Internet we rely on more than ever in our day to day lives.Policymakers owe it to the billions of users around world that rely on the Internet for work, education, and daily activities..</p>
              <span>UPDATED: 14 September 2020</span>
            </div>
          </section>
          <section className="card-4">
            <img src={require('../../components/images/intel_evo.webp')} />
            <div className="text_block">
              <h3>Intel Evo: What to Expect from New Ultra-Slim Laptops Launching Later This Year</h3>
              <p>Laptops from multiple manufacturers hitting the market later this year will bear Intel's new ‘Evo' branding, which is meant to signify that they are premium ultraportables that have gone through extensive testing and validation at the design stage.</p>
              <span>UPDATED: 11 September 2020</span>
            </div>
          </section>
        </Card>
      </div>
      <div className="right">
        <Card style={{ padding: '10px' }}>
          <h1>Top Post</h1>
          <hr />
          <section className="topPost">
            <img src={require('../../components/images/Ryzen_PRO.png')} />


          </section>
          <section>
            <h3>Short News</h3>
            <section className="short">
              <img src={require('../../components/images/computerx.jpg')} />
              <h4>Computex 2019: AMD, Intel, Asus Bring the Energy Back to PCs and Hardware</h4>

            </section>
            <section className="short">
              <img src={require('../../components/images/nvdia.jpg')} />
              <h4>Nvidia GeForce RTX 3080 Founders Edition Review</h4>

            </section>
            <section className="short">
              <img src={require('../../components/images/microsoft.jpg')} />
              <h4>Microsoft Surface Laptop Go With 12.5-Inch Display, Revamped Surface Pro X to Launch on October 1: Report</h4>

            </section>
          </section>
          <section className="adverties">
          <img src={require('../../components/images/dell.jpg')} />

          </section>
        </Card>
      </div>
    </div>
  )

}

export default Technology;