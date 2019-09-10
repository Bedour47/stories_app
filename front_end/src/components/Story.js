import React, { Component } from 'react'
import StoryItem from './profile/StoryItem';
import apiUrl from '../apiConfig';
import axios from 'axios'

export default class Story extends Component {
    constructor(props) {
        super(props);
        this.state = {
          story: ''
        };
      }
    //   componentDidMount() {
    //     const { handle } = this.props.params

    //     axios.get(`${apiUrl}/story/${handle}`)
    //       .then((response) => {
    //         this.setState({ story: response.data.story});
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       })
    //     }
    render() {
            return <StoryItem story={this.state.story} />
    }
}
