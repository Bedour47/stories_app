import React, { Component } from 'react'
import LastStoriesItem from './LastStoriesItem';
import { getAllUserStories } from '../auth/api.js';
import apiUrl from '../../src/apiConfig'
import axios from 'axios'

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
            return <LastStoriesItem story={story} key={index} />
        })
        return allStories
    }
}
