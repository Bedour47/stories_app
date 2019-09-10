import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class StoriesType extends Component {
    render() {
        return (
            <div>
                <div class="row center">
                  <button class="waves-effect waves-light btn-large"><Link to="/trueStories">True Story</Link></button>
                  <button class="waves-effect waves-light btn-large"><Link to="/imaginationStories">Imaginations Story</Link></button>
                </div>
            </div>
        )
    }
}
