import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class StoriesType extends Component {
    render() {
        return (
            <div>
                <div class="row center">
                {/* <Link to="/sign-up">Sign Up</Link> */}
                  <button class="waves-effect waves-light btn-large"><Link to="/TrueStory">True Story</Link></button>
                  <button class="waves-effect waves-light btn-large"><Link to="/ImaginationsStory">Imaginations Story</Link></button>
                </div>
             
            </div>
        )
    }
}
