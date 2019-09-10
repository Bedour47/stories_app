import React, { Component } from 'react'

export default class AddStoryForm extends Component {
    constructor(props){
        super(props)
        this.state={story:''}

    }
    handleChange = event => this.setState({
        [event.target.name]: event.target.value
      })  
      onClick = event => {
        event.preventDefault()  
    render() {
        return (
            <div>
               <form> onSubmit={this.onClick}
  <label>
    Name:
    <input type="radio" value="True" checked={false} onChange={this.handleChange}/>
    <input type="radio" value="Imaginations" checked={false} onChange={this.handleChange}/>
  </label>
  <label>
      title:
  <input type="text" value="title"onChange={this.handleChange} />
  </label>
  <label>
      text:
  <input type="text" value="text" onChange={this.handleChange}/>
  </label>
  <lable>
      image:
  <input type="text" value="image"onChange={this.handleChange} />
  </lable>
  <input type="submit" value="Submit"onChange={this.handleChange} />
</form> 
            </div>
        )
    }
}
