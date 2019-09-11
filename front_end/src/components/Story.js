import React, { Component } from 'react'
import StoryItem from './stories/StoryItem';
import apiUrl from '../apiConfig';
import axios from 'axios'

export default class Story extends Component {
  constructor(props) {
    super(props);
    this.state = {
      story: ''
    };
  }
  
  componentDidMount() {
    console.log(this.props.match.params.id)
    const handle = this.props.match.params.id

    axios.get(`${apiUrl}/story/${handle}`)
      .then((response) => {
        console.log(response.data.story)
        this.setState({ story: response.data.story});
      })
      .catch((err) => {
        console.log(err);
      })
    }

  render() {
    return(
      <div>
          <p>{this.state.story.title}</p>
          <p>{this.state.story.content}</p>
          <p>{this.state.story.img}</p>
      </div>
    )
  }
}