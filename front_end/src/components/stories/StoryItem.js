import React, { Component } from 'react'

export default class StoryItem extends Component {
    render() {
        return (
            <div>
                 <h2>{this.props.story.title}</h2>
                <p>{this.props.story.content}</p>
            </div>
        )
    }
}
