import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class StoriesType extends Component {
    render() {
        return (
            // <div class='container'>
            //     <div class="row" id="TSB">
            //       <Link to="/trueStories"><button class="btn btn-primary viewB" >True Story</button></Link>
            //       <Link to="/imaginationStories"><button class="btn btn-primary viewB">Imaginations Story</button></Link>
            //     </div>
            // </div>
   <div class='container'>
     {/* <div class='text' */}
                <div class="row" id="TSB">
                      <div class="col-3">
                            <div className="card cardContainer" >
                           
                            <img src="https://i.pinimg.com/originals/75/89/78/758978dd74afd211340e7278a98d0531.gif" className="card-img-top" alt="lo"/>
                              
                                    
                            <Link to="/trueStories"><button class="btn btn-primary" >Realty</button></Link>
                            </div>
                            
                      </div>

                      <div class="col-3">
                            <div className="card cardContainer2" >
                            <img src="https://i.pinimg.com/originals/17/8c/a9/178ca9925c624bd2542f0b61aa45a310.gif" className="card-img-top" alt="lo"/>
                                  
                            <Link to="/imaginationStories"><button class="btn btn-primary" >Imaginations</button></Link>
                            
                            </div>
                      </div>
                  </div>
</div>

        )
    }
}
