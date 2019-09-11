import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

export default class StoryItem extends Component {
    render() {
        return (
            
        // <div className="card">
            <div class="card" id='cardImg' >
  <img src={this.props.story.img} class="card-img-top" alt="lo"/>
  <div class="card-body">
    <h5 class="card-title">{this.props.story.title}</h5>
    <p class="card-text">{this.props.story.content}</p>
    <Link to="/story/:id"><button class="btn btn-primary ">Read Mre !</button></Link>
  </div>
</div>
// </div>


        )
    }
}
