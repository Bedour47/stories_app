import React, { Component } from 'react'
import apiUrl from '../../apiConfig'
import axios from 'axios'
import ProfileStories from './ProfileStories';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user: '',
          stories: []
        };
      }
      componentDidMount() {
        console.log(this.props.match.params.id)
        const userID = this.props.match.params.id
    
        axios.get(`${apiUrl}/profile/${userID}`)
          .then((response) => {
              console.log(response)
              console.log(response.data.user)
              console.log(response.data.stories)
            this.setState({
                user: response.data.user,
                stories: response.data.stories
            });
          })
          .catch((err) => {
            console.log(err);
          })
        }
    render() {
        const allProfileStories = this.state.stories.map((story, index) => {
            return <ProfileStories story={story} key={index} /> 
        })
        
        return(
            <div>
                <div>
                    <p>{this.state.user.username}</p>
                    <img src={this.state.user.img} class="card-img-top" alt="profile pic"/>
                </div>
                <div>
                    {allProfileStories}
                </div>
            </div>
        )
    }
}
