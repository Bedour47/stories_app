import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <ul>
                <li><img src={this.props.user.img}></img></li>
                <li>{this.props.user.bio}</li>
            </ul>
        )
    }
}
