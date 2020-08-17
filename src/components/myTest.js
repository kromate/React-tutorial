import React, { Component } from 'react'

export class myTest extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:'Anthony'
    }
  }
  
  updateName = (event)=>{
    this.setState({
      name:event.target.value
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <input value ={this.state.name} onChange = {this.updateName}/>
      </div>
    )
  }
}

export default myTest
