import React, { Component } from 'react'
import LastStoriesItem from './LastStoriesItem';

export default class LastStoriesList extends Component {
    render() {
        const allStories = this.props.stories.map((story, index) => {
            return <LastStoriesItem story={story} key={index} />
        })
        return (
            {allStories}
        )
    }
}
