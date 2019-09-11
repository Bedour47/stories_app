import React, { Component } from 'react'
import apiUrl from '../../apiConfig';
import axios from 'axios'

export default class Comment extends Component {
        // Delete Story
        deleteComment = (e) => {
            e.preventDefault();
            console.log('my props', this.props);
            const storyID = this.props.storyID
            const commentID = this.props.comment._id
            axios.delete(`${apiUrl}/stories/${storyID}/comments/${commentID}`, {
                  headers: {
                      'Authorization': `Bearer ${this.props.user.token}`,
                      'Accept' : 'application/json',
                      'Content-Type': 'application/json'
                  }
                  })
            .then((response) => {
      
            })
            .catch((err) => {
              console.log(err);
            })
          }
    render() {
        const userObject = localStorage.getItem('user')
        let deleteCommentButton = ''
        console.log('userObject:', userObject)

        if(this.props.user && userObject == this.props.comment.owner){
            deleteCommentButton = (<button onClick={this.deleteComment}>Delete Comment</button>)
        }
        return (
            <div>
                <p>comment: {this.props.comment.comment}</p>
                <p>by:{this.props.comment.owner}</p>
                {deleteCommentButton}
            </div>
        )
    }
}
