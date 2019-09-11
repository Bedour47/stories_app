import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class StoriesType extends Component {
    render() {
        return (
            <div>
                <div class="row center">
                  <Link to="/trueStories"><button class="btn btn-primary">True Story</button></Link>
                  <Link to="/imaginationStories"><button class="btn btn-primary">Imaginations Story</button></Link>
                </div>
            </div>
        )
    }
}
