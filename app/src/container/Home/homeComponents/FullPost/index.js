import React from 'react';


const FullPost = (props) => {
  return(
    <div>
      <div class="heading" id="navbar">
        <span class="heading-vertical">The</span>
        <h1 class="heading-bold">Siren</h1>
        <button class="btn">Let Started</button>
      </div>
      <div class="body">
        <div class="content">
        <div class="icon">
                <div class="sign">
                    <i class="fas fa-sign-language"></i>
                    <span>9.3k</span>
                </div>
                <div class="sign">
                    <i class="far fa-comment"></i>
                    <span>18</span>
                </div>
                <div class="sign">
                    <i class="far fa-bookmark"></i>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
export default FullPost;