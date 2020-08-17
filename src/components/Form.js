import React, { Component } from 'react'

export class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      comments:'',
      topic:''
    }
  }

  handleUsernameChange = (event)=>{
    this.setState({
      username: event.target.value
    })
  }
  handleCommentsChange = (event)=>{
    this.setState({
      comments:event.target.value
    })
  }

  handleTopicChange = (event)=>{
    this.setState({
      topic:event.target.value
    })
  }

  handleSubmit= (events)=>{
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    events.preventDefault()
  }
  render() {
    const {username, comments, topic} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input 
            value={username}
            type='text'
            onChange = {this.handleUsernameChange} />
          </label>
        </div>

        <div>
          <label>Comments</label>
          <textarea
          type='text'
          value={comments}
          onChange={this.handleCommentsChange} ></textarea>
        </div>

        <div>
           <label>Topic</label>
           <select value={topic}
           onChange={this.handleTopicChange}>
             <option value='react'>React</option>
             <option value='angular'>Angular</option>
             <option value='vue'>Vue</option>
           </select>
        </div>
        <button type='submit'>submit</button>
      </form>
    )
  }
}

export default Form
