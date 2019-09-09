import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import './Home.scss'
export default class Home extends Component {
    render() {
        return (
            <body>
            <div>
            <div id="index-banner" class="parallax-container">
            <div class="section no-pad-bot">
              <div class="container">
                <h1 class="header center teal-text text-lighten-2">Party Generator</h1>
                <div class="row center">
                  <h5 class="header col s12 light">Throw the hottest parties</h5>
                </div>
                <div class="row center">
                {/* <Link to="/sign-up">Sign Up</Link> */}
                  <button class="waves-effect waves-light btn-large"><Link to="/stories">View Stories</Link></button>
                  <button class="waves-effect waves-light btn-large"><Link to="/sign-in">Sign In</Link></button>
                </div>
             
        
              </div>
            </div>
        
        
            {/* <div class="parallax"> <img src="/assets/bgparty-36190dec1740f682e9acd2c7637eca964e9c535b4948503462e87e7cd91941c1.jpg" alt="Bgparty 36190dec1740f682e9acd2c7637eca964e9c535b4948503462e87e7cd91941c1" style="transform: translate3d(-50%, 470px, 0px); display: block;">
                </img>
            </div> */}
            
            </div>

 <div class="parallax"> <img src="https://www.hiamag.com/sites/default/files/styles/ph2_960_600/public/article/02/07/2016/1467453280-4362606.jpg" alt="Bgparty 36190dec1740f682e9acd2c7637eca964e9c535b4948503462e87e7cd91941c1"></img></div>
 


<div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center brown-text"><i class="mdi-hardware-speaker"></i></h2>
            <h5 class="center">Cutomized SoundCloud Playlists</h5>

            <p class="light">SoundCloud is a Swedish online audio distribution platform based in Berlin, Germany, that enables its users to upload, record, promote, and share their originally-created sounds... </p>
          </div>
        </div>
        
        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center brown-text"><i class="mdi-hardware-speaker"></i></h2>
            <h5 class="center">Cutomized SoundCloud Playlists</h5>

            <p class="light">SoundCloud is a Swedish online audio distribution platform based in Berlin, Germany, that enables its users to upload, record, promote, and share their originally-created sounds... </p>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center brown-text"><i class="mdi-maps-local-bar"></i></h2>
            <h5 class="center">Perfect Cocktails</h5>

            <p class="light">The origins of the word "cocktail" are lost to history, but the first definition we find in print comes from an 1806 newspaper from upstate New York. A cocktail is called "a...</p>

            <div class="parallax-container valign-wrapper">
    <div class="section no-pad-bot">
      <div class="container">
        <div class="row center">
          <h3 class="header center teal-text text-lighten-2">Never Worry about Planning a party again</h3>
       </div>
      </div>
    </div>
</div>
<div class="parallax"><img src="https://www.hiamag.com/sites/default/files/styles/ph2_960_600/public/article/02/07/2016/1467453280-4362606.jpg" alt="Bg2 79ee1b92e59344e55086434e4516a200f6d0ae240a14aff0b3aa637c04806766">
    </img>
</div>

<div class="container">
    <div class="section">

      <div class="row">
        <div class="col s12 center">
          <h3><i class="mdi-content-send brown-text"></i></h3>
          <h4>Contact Me  </h4>
        </div>
      </div>

    </div>
  </div>


  <div class="footer-copyright">
      <div class="container">
      Made by <a class="brown-text text-lighten-3" href="http://twitter.com/tropiccolin">Colin Taylor</a>
      </div>
    </div>
  
  
  </div>

          </div>
        </div>
     </body>

        )
    }
}
