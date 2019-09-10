import React, { Component } from 'react'
import apiUrl from '../../apiConfig'
import axios from 'axios'
import StoryItem from './StoryItem';

export default class LastStoriesList extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          stories: []
        };
      }
    
      componentDidMount() {
        axios.get(`${apiUrl}/stories`)
          .then((response) => {
            this.setState({ stories: response.data.stories});
          })
          .catch((err) => {
            console.log(err);
          })
      }

    render() {
        const allStories = this.state.stories.map((story, index) => {
            return <StoryItem story={story} key={index} />
        })
        const lastStories = allStories.slice(-3);
        return lastStories;
    }
}
