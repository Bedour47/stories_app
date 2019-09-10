import React, { Component } from 'react'
import StoryList from './StoryList'
export default class Profile extends Component {
    render() {
        return (
            <div>
                <div>
                    <img src={this.props.user.img}></img>
                    <p>{this.props.user.bio}</p>
                </div>
                <StoryList />
            </div>
        )
    }
}
