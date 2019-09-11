import React, { Component } from 'react'
import StoryList from '../stories/StoryList'
import apiUrl from '../../apiConfig'
import axios from 'axios'

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user: '',
          stories: ''
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
            // this.setState({
            //     user: response.data.user,
            //     stories: response.data.stories
            // });
          })
          .catch((err) => {
            console.log(err);
          })
        }
    render() {
        return <p>{this.state.user}</p>

       
        // return (
        //     <div>
        //         <div>
        //             <img src={this.props.user.img}></img>
        //             <p>{this.props.user.bio}</p>
        //         </div>
        //         <StoryList />
        //     </div>
        // )
    }
}
